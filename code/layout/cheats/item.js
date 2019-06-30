import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Slugify from 'slugify';


/**
 * The CheatItem component
 */
const CheatItem = ({ headline, _body, _pages, _ID, _parseMD }) => (
	<details className="cheat__item" id={ Slugify(`${ _pages[ _ID ].section }-${ headline }`) }>
		<summary className="cheat__item__headline">{ headline }</summary>
		<div className="cheat__item__details">
			{ _body }
		</div>
	</details>
);

CheatItem.propTypes = {
	/**
	 * headline: Code block
	 */
	headline: PropTypes.string.isRequired,

	/**
	 * _body: (text)(5)
	 */
	_body: PropTypes.node.isRequired,
};

CheatItem.defaultProps = {};

export default CheatItem;
