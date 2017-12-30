import PropTypes from 'prop-types';
import React from 'react';

import { Logo } from '../icon';


/**
 * The Cta component
 */
const Cta = ({ code, _body }) => (
	<section className="cta">
		<div className="cta__section cta__section--top">
			<div className="cta__section__body">
				<Logo className="cta__section__logo" title="Cuttlebelle logo" desc="A cute, green cuttlefish with a big smile" />
			</div>
		</div>

		<div className="cta__section cta__section--bottom">
			<div className="cta__section__body body">
				{ _body }
			</div>
		</div>

		<div className="cta__section cta__section--code">
			<div className="cta__code code">
				{
					code.map( ( line, i ) => (
						<p key={ i } className="code__line">{ line }</p>
					))
				}
			</div>
		</div>
	</section>
);

Cta.propTypes = {
	/**
	 * code:
	 *   - npm install cuttlebelle --global
	 *   - cuttlebelle
	 */
	code: PropTypes.array.isRequired,

	/**
	 * _body: (text)(2)
	 */
	_body: PropTypes.node.isRequired,
};

Cta.defaultProps = {};

export default Cta;
