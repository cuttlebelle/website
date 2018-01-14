import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The content component
 */
const Content = ({ _body, _self }) => {
	const section = _self.split('/')[ ( _self.split('/').length - 1 ) ].replace( '.md', '' ).replace( 'content-', '' );

	return (
		<div id={ section } className="partial content">
			<a href={`#${ section }`} className="content__link">#</a>
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
