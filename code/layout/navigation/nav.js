import PropTypes from 'prop-types';
import React from 'react';

import { Cuttlebelle, Github } from '../icon';


/**
 * The Nav component
 */
const Nav = ({ links, _pages, _relativeURL, _ID }) => (
	<nav className="nav">
		<ul>
			<li className="nav__link nav__link--fixed">
				<a href={ _relativeURL( '/', _ID ) }>
					<Cuttlebelle className="nav__link__logo" title="Cuttlebelle" desc="The word Cuttlebelle" />
				</a>
			</li>
			{
				links.map( ( link, i ) => {
					const url = link.link === undefined ? _pages[ link.name ]._url : link.link;

					return (
						<li key={ i } className={`nav__link nav__link--generated${
							_pages[ _ID ]._url.startsWith( url ) && url != '/' || url === '/' && _ID === 'index'
								? ` nav__link--active`
								: ''
							}`}>
							<a href={
								url.startsWith('http')
									? url
									: _relativeURL( url, _ID )
							}>
								{
									link.name === 'github'
										? <span>
												<Github className="nav__link__github" title="GitHub" desc="The GitHub logo" />
												<span className="nav__link__github__text">{ link.name }</span>
											</span>
										: link.name
								}
							</a>
						</li>
					);
				})
			}
		</ul>
	</nav>
);

Nav.propTypes = {
	/**
	 * links:
	 *  - name: home
	 *    link: /
	 *  - name: docs
	 *    link: /docs
	 *  - name: github  # the string 'github' will have the GitHub logo attached to it
	 *    link: https://github.com/cuttlebelle/cuttlebelle
	 */
	links: PropTypes.array.isRequired,
};

Nav.defaultProps = {};

export default Nav;
