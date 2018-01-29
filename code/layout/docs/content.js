import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The content component
 */
const Content = ({ _ID, _body, _self }) => {
	const section = _self.split('/')[ ( _self.split('/').length - 1 ) ].replace( '.md', '' ).replace( 'content-', '' );
	const SentenceCase = ( text ) => text.charAt( 0 ).toUpperCase() + text.slice( 1 );

	return (
		<Fragment>
			<article id={ section } className="content">
				<a href={`#${ section }`} className="content__link">#</a>
				<a href={`https://github.com/cuttlebelle/website/blob/master/content/${ _self }`} className="content__edit-this-page">
					Edit this partial
				</a>
				<h2>{ SentenceCase( section.replace( /-/g, ' ' ) ) }</h2>

				{ _body }
			</article>
		</Fragment>
	);
}

Content.propTypes = {
	/**
	 * _body: (partials)(4)
	 */
	_body: PropTypes.node.isRequired,
};

Content.defaultProps = {};

export default Content;
