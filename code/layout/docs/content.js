import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The content component
 */
const Content = ({ _body, _self }) => {
	const section = _self.split('/')[ ( _self.split('/').length - 1 ) ].replace( '.md', '' ).replace( 'content-', '' );
	const SentenceCase = ( text ) => text.charAt( 0 ).toUpperCase() + text.slice( 1 );

	return (
		<div id={ section } className="partial content">
			<a href={`#${ section }`} className="content__link">#</a>
			<h2>{ SentenceCase( section.replace( /-/g, ' ' ) ) }</h2>
			{ _body }
		</div>
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
