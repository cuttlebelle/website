import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Worker } from '../icon';


/**
 * The content component
 */
const Content = ({ _body, headline }) => (
	<article className="content content--intro">
		<Worker className="content__icon" title="Cuttlebelle worker" desc="The Cuttlebelle mascot with a hard hat on ready to work" />
		{ _body }
	</article>
);

Content.propTypes = {
	/**
	 * _body: (text)(2)
	 */
	_body: PropTypes.node.isRequired,
};

Content.defaultProps = {};

export default Content;
