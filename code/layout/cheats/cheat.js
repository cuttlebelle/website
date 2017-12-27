import PropTypes from 'prop-types';
import Slugify from 'slugify';
import React from 'react';


/**
 * The Cheat component
 */
const Cheat = ({ section, description, cheats, _parseMD }) => (
	<div id={ Slugify( section ) } className="cheat">
		<h3 className="cheat__headline">{ section }</h3>
		<div className="cheat__description">{ _parseMD( description ) }</div>
		{
			cheats.map( ( cheat, i ) => (
				<details className="cheat__item" id={ Slugify(`${ section }-${ cheat.headline }`) } key={ i }>
					<summary className="cheat__item__headline">{ cheat.headline }</summary>
					<div className="cheat__item__details">
						<div className="cheat__item__details__description">{ _parseMD( cheat.description ) }</div>
						<div className="cheat__item__details__example">{ _parseMD( cheat.example ) }</div>
					</div>
				</details>
			))
		}
	</div>
);

Cheat.propTypes = {
	/**
	 * section: Markdown
	 */
	section: PropTypes.string.isRequired,

	/**
	 * description: Markdown is used to help ...
	 */
	description: PropTypes.string.isRequired,

	/**
	 * cheats:
	 *   - headline: Paragraph/line break
	 *     description: To create a paragraph simply add a line of text. To add a line break add two empty lines.
	 *     example: |
	 *       ```
	 *       One paragraph
	 *       Still the same paragraph
	 *
	 *       New paragraph
	 *       ```
	 *   - headline: Headline
	 *     description: To add a headline add the `#` symbol in-front of your line. The amount of hashes represents the headline level.
	 *     example: |
	 *       ```
	 *       # A headline level 1
	 *       ## A headline level 2
	 *       ### A headline level 3
	 *       ```
	 */
	cheats: PropTypes.arrayOf(
		PropTypes.shape({
			headline: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			example: PropTypes.string.isRequired,
		})
	).isRequired,
};

Cheat.defaultProps = {};

export default Cheat;
