import PropTypes from 'prop-types';
import React from 'react';

import { Logo, Code, Content, Fish } from '../icon';


/**
 * The Why component
 */
const Why = ({ headline, reasons, _parseMD }) => (
	<section className="why">
		<h2 className="why__headline">{ headline }</h2>

		{
			reasons.map( ( reason, i ) => {
				const allowedIcons = {
					code: Code,
					fish: Fish,
					content: Content,
				};
				const ImageTag = allowedIcons[ reason.image ];

				return (
					<div key={ i } className="why__wrapper">
						<div className={`why__section why__section--image${ ( i % 2 === 0 ) ? '' : '  why__section--right' }`}>
							<div className="why__section__body">
								<div className="why__section__body body">
									<ImageTag className="why__section__body__icon" title={ reason.headline } desc={ reason.text } />
								</div>
							</div>
						</div>
						<div className={`why__section${ ( i % 2 === 0 ) ? ' why__section--right' : '' }`}>
							<div className="why__section__body">
								<div className="why__section__body body">
									<h3>{ reason.headline }</h3>
									{ _parseMD( reason.text ) }
								</div>
							</div>
						</div>
					</div>
				)
			})
		}
	</section>
);

Why.propTypes = {
	/**
	 * headline: Why another static site generator?
	 */
	headline: PropTypes.node.isRequired,

	/**
	 * reasons:
	 *   - image: fish
	 *     headline: Multiple layouts
	 *     text: (text)[2]
	 *   - image: code
	 *     headline: Easy templating
	 *     text: (text)[2]
	 *   - image: content
	 *     headline: Clean separation
	 *     text: (text)[2]
	 */
	reasons: PropTypes.arrayOf(
		PropTypes.shape({
			image: PropTypes.oneOf([ 'code', 'fish', 'content' ]).isRequired,
			headline: PropTypes.string,
			text: PropTypes.string,
		})
	).isRequired,
};

Why.defaultProps = {};

export default Why;
