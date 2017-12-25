import PropTypes from 'prop-types';
import React from 'react';

import { Github } from '../icon';


/**
 * The What component
 */
const What = ({ cta, _body }) => (
	<section className="what">
		<div className="what__section what__section--left">
			<div className="what__section__body">
				{ _body }
				<a className="btn" href={ cta.link }>{ cta.text }</a>
			</div>
		</div>
		<div className="what__section what__section--right">
			<div className="what__section__body">
				image
			</div>
		</div>
	</section>
);

What.propTypes = {
	/**
	 * cta:
	 *   text: 'Install Cuttlebelle'
	 *   link: '#hashlink'
	 */
	cta: PropTypes.shape({
		text: PropTypes.string,
		link: PropTypes.string,
	}).isRequired,

	/**
	 * _body: (text)(4)
	 */
	_body: PropTypes.node.isRequired,
};

What.defaultProps = {};

export default What;
