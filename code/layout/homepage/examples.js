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
						<div>
							<h3 className="examples__list__headline">{ example.headline }</h3>
							<div className="examples__list__body">{ _parseMD( example.text ) }</div>
						</div>
						<div className="examples__list__example">
							<code className="code">
								<p className="code__command">{ example.example }</p>
							</code>
						</div>
					</li>
				))
			}
		</ul>
	</section>
);

Examples.propTypes = {
	/**
	 * headline: Why another static site generator?
	 */
	headline: PropTypes.node.isRequired,

	/**
	 * examples:
	 *   - headline: Install cuttlebelle
	 *     text: |
	 *       Install Cuttlebelle globally from [npm](https://www.npmjs.com/). Now the `cuttlebelle` command is available to you globally.
	 *     example: npm install cuttlebelle -g
	 *   - headline: Get started
	 *     text: |
	 *       Before you start adding your files and pages, run the `init` command to get you started quickly with some common components.
	 *     example: cuttlebelle --init
	 *   - headline: Compile your website
	 *     text: |
	 *       Now compile your website into the `site` folder. The watch will wait after for any additional changes you make to your files and only run on those
	 *       pages you change affected.
	 *     example: cuttlebelle --watch
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
