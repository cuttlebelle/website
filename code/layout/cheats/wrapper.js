import PropTypes from 'prop-types';
import Slugify from 'slugify';
import React from 'react';


/**
 * The CheatsWrapper component
 */
const CheatsWrapper = ({ cheats }) => (
	<section className="cheats">
		{ cheats }
	</section>
);

CheatsWrapper.propTypes = {
	/**
	 * cheats: (partials)(2)
	 */
	cheats: PropTypes.node.isRequired,
};

CheatsWrapper.defaultProps = {};

export default CheatsWrapper;
