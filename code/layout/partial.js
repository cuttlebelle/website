import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The partial component
 *
 * @disable-docs
 */
const Partial = ({ _body }) => (
	<div className="partial">{ _body }</div>
);

Partial.propTypes = {
	/**
	 * _body: (partials)(4)
	 */
	_body: PropTypes.node.isRequired,
};

Partial.defaultProps = {};

export default Partial;
