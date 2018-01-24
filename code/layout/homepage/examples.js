import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Logo, Code, Content, Fish } from '../icon';


/**
 * The Examples component
 */
const Examples = ({ headline, examples, _parseMD }) => (
	<section className="examples">
		<h2 className="examples__headline">{ headline }</h2>

		<ul className="examples__list">
			{
				examples.map( ( example, i ) => (
					<li key={ i }>
						<div className="examples__list__text">
							<h3 className="examples__list__headline">{ example.headline }</h3>
							<div className="examples__list__body">{ _parseMD( example.text ) }</div>
						</div>
						<div className="examples__list__example">
							<div className="content">
								{ _parseMD( example.example ) }
							</div>
						</div>
					</li>
				))
			}
		</ul>
	</section>
);

Examples.propTypes = {
	/**
	 * headline: Separate content and code
	 */
	headline: PropTypes.node.isRequired,

	/**
	 * examples:
	 *   - headline: We use markdown with front-matter
	 *     text: Some description of the example.
	 *     example: |
	 *       ```
	 *       code example
	 *       ```
	 *   - headline: With JSX front-mater become props in react
	 *     text: Some description of the example.
	 *     example: |
	 *       ```
	 *       code example
	 *       ```
	 */
	examples: PropTypes.arrayOf(
		PropTypes.shape({
			headline: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
			example: PropTypes.string.isRequired,
		})
	).isRequired,
};

Examples.defaultProps = {};

export default Examples;
