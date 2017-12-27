import PropTypes from 'prop-types';
import React from 'react';

import { Logo } from '../icon';


/**
 * The Cta component
 */
const Cta = ({ cta, _body }) => (
	<section className="cta">
		<div className="cta__section cta__section--top">
			<div className="cta__section__body body">
				<Logo className="cta__section__logo" title="Cuttlebelle logo" desc="A cute, green cuttlefish with a big smile" />
			</div>
		</div>
		<div className="cta__section cta__section--bottom">
			<div className="cta__section__body body">
				{ _body }
				<a className="btn" href={ cta.link }>{ cta.text }</a>
			</div>
		</div>
	</section>
);

Cta.propTypes = {
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
	 * _body: (text)(2)
	 */
	_body: PropTypes.node.isRequired,
};

Cta.defaultProps = {};

export default Cta;
