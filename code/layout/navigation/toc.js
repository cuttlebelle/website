import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Slugify from 'slugify';


/**
 * The toc component
 */
const TOC = ({ sections, _pages, _ID, _relativeURL }) => {
	const SentenceCase = ( text ) => text.charAt( 0 ).toUpperCase() + text.slice( 1 );

	return (
		<section className="toc">
			{
				sections.map( ( section, i ) => {
					const page = _pages[ section ];
					return (
						<nav key={ i } className={`toc__section toc__section--${ i }`}>
							<h2><a href={ _relativeURL( page._url, _ID ) }>{ page.title }</a></h2>

							<ul>
								{
									page.main.map( ( partial, i ) => {
										if( partial.startsWith('content-') ) {
											const sectionName = partial.replace( 'content-', '' ).replace( '.md', '' );

											return (
												<li key={ i }>
													<a href={`${ _relativeURL( page._url, _ID ) }#${ sectionName }`}>{ SentenceCase( sectionName.replace( /-/g, ' ' ) ) }</a>
												</li>
											);
										}
									})
								}
							</ul>
						</nav>
					)
				})
			}
		</section>
	);
}

TOC.propTypes = {
	/**
	 * sections:
	 *   - page1
	 *   - page1/nested
	 *   - page2
	 */
	sections: PropTypes.node.isRequired,
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
