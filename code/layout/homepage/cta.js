import PropTypes from 'prop-types';
import React from 'react';

import { Computer } from '../icon';


/**
 * The Cta component
 */
const Cta = ({ code, _body }) => (
	<section className="cta">
		<div className="cta__section cta__section--top">
			<div className="cta__section__body">
				<Computer className="cta__section__logo" title="Cuttlebelle computer" desc="A computer with keyboard and a monitor that has tentacles couming out of it
					behind it" />
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
						<p key={ i } className={ line.type === 'command' ? 'code__command' : 'code__stdout'}>
							{ line.display }
						</p>
					))
				}
			</div>
		</div>
	</section>
);

Cta.propTypes = {
	/**
	 * code:
	 *   - type: command
	 *     display: npm install cuttlebelle --global
	 *   - type: stdout
	 *     display: '+ cuttlebelle@1.0.0'
	 *   - type: command
	 *     display: cuttlebelle
	 */
	code: PropTypes.arrayOf(
		PropTypes.shape({
			type: PropTypes.oneOf([ 'command', 'stdout' ]).isRequired,
			display: PropTypes.string.isRequired,
		})
	).isRequired,

	/**
	 * _body: (text)(2)
	 */
	_body: PropTypes.node.isRequired,
};

Cta.defaultProps = {};

export default Cta;
