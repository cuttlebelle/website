import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Logo, MultipleLayouts, NoLockIn, Separation, EasyTemplating } from '../icon';


/**
 * The Tiles component
 */
const Tiles = ({ headline, tiles, _parseMD }) => (
	<section className="tiles">
		<h2 className="tiles__headline">{ headline }</h2>

		{
			tiles.map( ( reason, i ) => {
				const allowedIcons = {
					Separation: Separation,
					MultipleLayouts: MultipleLayouts,
					NoLockIn: NoLockIn,
					EasyTemplating: EasyTemplating,
				};
				const ImageTag = allowedIcons[ reason.image ];

				return (
					<div key={ i } className="tiles__wrapper">
						<div className={`tiles__section tiles__section--image${ ( i % 2 === 0 ) ? '' : '  tiles__section--right' }`}>
							<div className="tiles__section__body">
								<div className="body">
									<ImageTag className="tiles__section__body__icon" title={ reason.headline } desc={ reason.text } />
								</div>
							</div>
						</div>
						<div className={`tiles__section${ ( i % 2 === 0 ) ? ' tiles__section--right' : '' }`}>
							<div className="tiles__section__body">
								<div className="body">
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

Tiles.propTypes = {
	/**
	 * headline: Why another static site generator?
	 */
	headline: PropTypes.node.isRequired,

	/**
	 * tiles:
	 *   - image: MultipleLayouts
	 *     headline: Multiple layouts
	 *     text: |
	 *       Each page is divided into components that have their own layouts. Think of it like little [Lego™ blocks](https://www.lego.com) that make up your
	 *       site.
	 *   - image: EasyTemplating
	 *     headline: Easy templating
	 *     text: |
	 *       Keeping your content free of any code empowers more users to change the content of your site. And because we chunk it all up into partials, content
	 *       authors are able to build completely new layouts all by them self without ever touching more complex code.
	 *   - image: Separation
	 *     headline: Clean separation
	 *     text: |
	 *       Cuttlebelle uses [JSX](https://facebook.github.io/jsx/) as the templating language. This makes is very convenient to build simple partials all the way to
	 *       super complex ones that fetch data from online APIs.
	 */
	tiles: PropTypes.arrayOf(
		PropTypes.shape({
			image: PropTypes.oneOf([ 'NoLockIn', 'MultipleLayouts', 'Separation', 'EasyTemplating' ]).isRequired,
			headline: PropTypes.string,
			text: PropTypes.string,
		})
	).isRequired,
};

Tiles.defaultProps = {};

export default Tiles;
