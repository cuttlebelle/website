// https://github.com/chjj/marked

module.exports = exports = function renderer({ Marked }) {

	/**
	 * Link overwrite
	 *
	 * @param  {string} href  - The href attribute
	 * @param  {string} title - The title attribute
	 * @param  {string} text  - The text string
	 *
	 * @return {string}       - The rendered HTML
	 */
	Marked.link = ( href, title, text ) => {
		let attr = '';
		if( href.startsWith('http://') || href.startsWith('https://') ) {
			attr = ` rel="external"`;
		}

		return `<a href="${ href }"${ title ? ` title="${ title }"` : '' }${ attr }>${ text }</a>`;
	};


	/**
	 * Pre-parse function
	 *
	 * @param  {string} markdown - The markdown coming from our partials
	 *
	 * @return {string}          - The markdown after we’re finished with it
	 */
	Marked.preparse = ( markdown ) => {
		return markdown
			.replace(/\™/g, '<span class="markdown-trademark">&trade;</span>')
			.replace(/\’/g, '<span class="markdown-quote">&rsquo;</span>')
			.replace(/\—/g, '<span class="markdown-mdash">&mdash;</span>')
			.replace(/\–/g, '<span class="markdown-ndash">&ndash;</span>')
			.replace(/\.\.\./g, '<span class="markdown-ellipsis">&hellip;</span>');
	};

	return Marked;
};
