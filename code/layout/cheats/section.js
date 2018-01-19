import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Slugify from 'slugify';


/**
 * The Section component
 */
const Section = ({ section, _body, cheats, _parseMD, _relativeURL }) => (
	<div id={ Slugify( section ) } className="cheat">
		<h3 className="cheat__headline">{ section }</h3>
		<div className="cheat__description">{ _body }</div>
		{ cheats }
	</div>
);

Section.propTypes = {
	/**
	 * section: Markdown
	 */
	section: PropTypes.string.isRequired,

	/**
	 * _body: Markdown is used to help ...
	 */
	_body: PropTypes.node.isRequired,

	/**
	 * cheats: (partials)(2)
	 */
	cheats: PropTypes.node.isRequired,
};

Section.defaultProps = {};

export default Section;
