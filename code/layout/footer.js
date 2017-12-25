import PropTypes from 'prop-types';
import React from 'react';

import { Cuttlebelle } from './icon';


/**
 * The Footer component
 */
const Footer = ({ _body }) => (
	<footer className="footer">
		{ _body }
	</footer>
);

Footer.propTypes = {
	/**
	 * _body: (partials)(4)
	 */
	_body: PropTypes.node.isRequired,
};

Footer.defaultProps = {};

export default Footer;
