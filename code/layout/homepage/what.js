import PropTypes from 'prop-types';
import React from 'react';

import { Logo } from '../icon';


/**
 * The What component
 */
const What = ({ cta, _body }) => (
	<section className="what">
		<div className="what__section what__section--top">
			<div className="what__section__body">
				<Logo className="what__section__logo" title="Cuttlebelle logo" desc="A cute, green cuttlefish with a big smile" />
			</div>
		</div>
		<div className="what__section what__section--bottom">
			<div className="what__section__body">
				{ _body }
				<a className="btn" href={ cta.link }>{ cta.text }</a>
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
