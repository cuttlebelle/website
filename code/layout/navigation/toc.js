import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The toc component
 */
const TOC = ({ sections, _pages, _ID, _relativeURL }) => {
	const SentenceCase = ( text ) => text.charAt( 0 ).toUpperCase() + text.slice( 1 );

	return (
		<div className="toc">
			{
				sections.map( ( section, i ) => {
					const page = _pages[ section ];
					return (
						<nav key={ i } className={`toc__section toc__section--${ i }${ page._url === _pages[ _ID ]._url ? ' toc__section--active' : '' }`}>
							<h2 className='toc__section__headline'><a href={ _relativeURL( page._url, _ID ) }>{ page.title }</a></h2>

							<ul>
								{
									page.docs.map( ( partial, i ) => {
										const sectionName = partial.replace( '.md', '' );

										return (
											<li key={ i }>
												<a href={`${ _relativeURL( page._url, _ID ) }#${ sectionName }`}>{ SentenceCase( sectionName.replace( /-/g, ' ' ) ) }</a>
											</li>
										);
									})
								}
							</ul>
						</nav>
					)
				})
			}
		</div>
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
