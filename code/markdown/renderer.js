// https://github.com/chjj/marked

module.exports = exports = function renderer({ Marked, _ID, _relativeURL }) {

	/**
	 * Link overwrite to support external and relative links
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
		else if( !href.startsWith('#') && typeof _relativeURL === 'function' ) {
			href = _relativeURL( href, _ID );
		}

		return `<a href="${ href }"${ title ? ` title="${ title }"` : '' }${ attr }>${ text }</a>`;
	};


	/**
	 * Image overwrite to support relative links
	 *
	 * @param  {string} href  - The source of the image
	 * @param  {string} title - The title of the image
	 * @param  {string} text  - The alt text for the image
	 *
	 * @return {string}       -
	 */
	Marked.image = ( href, title, text ) => {
		let sourcePath = href;
		if( !sourcePath.startsWith('http://') && !sourcePath.startsWith('https://') ) {
			sourcePath = _relativeURL( href, _ID );
		}

		let out = `<img src="${ sourcePath }" alt="${ text }"`;

		if( title ) {
			out += ` title="${ title }"`;
		}

		out += '>';

		return out;
	}


	/**
	 * Text function
	 *
	 * @param  {string} text - The markdown coming from our partials
	 *
	 * @return {string}      - The markdown after we’re finished with it
	 */
	Marked.text = ( text ) => {
		return text
			.replace(/\™/g, '<span class="markdown-trademark">&trade;</span>')
			.replace(/\’/g, '<span class="markdown-quote">&rsquo;</span>')
			.replace(/\—/g, '<span class="markdown-mdash">&mdash;</span>')
			.replace(/\–/g, '<span class="markdown-ndash">&ndash;</span>')
			.replace(/\.\.\./g, '<span class="markdown-ellipsis">&hellip;</span>');
	};

	Marked.paragraph = ( text ) => {
		if( text.startsWith('💡') ) {
			return `<p class="markdown-hint">${ text }</p>\n`;
		}
		else {
			return `<p>${ text }</p>\n`;
		}
	}

	return Marked;
};
