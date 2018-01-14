import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Slugify from 'slugify';


/**
 * The toc component
 */
const TOC = ({ sections, _pages, _ID }) => (
	<section className="toc">
		{
			sections.map( ( section, i ) => {
				const page = _pages[ section ];
				return (
					<nav key={ i } className={`toc__section toc__section--${ i }`}>
						<h2><a href={ page._url }>{ page.title }</a></h2>
						?{ JSON.stringify(page.main) }?
					</nav>
				)
			})
		}
	</section>
);

TOC.propTypes = {
	/**
	 * _body: (partials)(4)
	 */
	// _body: PropTypes.node.isRequired,
};

TOC.defaultProps = {};

export default TOC;



{/*						<ul>
							{
								section.links.map( ( link, j ) => (
									<li key={ j }>
										<a href={`${ section.link }/#${ Slugify( link ).toLowerCase() }`}>{ link }</a>
									</li>
								))
							}
						</ul>*/}
