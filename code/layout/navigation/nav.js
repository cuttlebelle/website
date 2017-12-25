import PropTypes from 'prop-types';
import React from 'react';

import { Cuttlebelle, Github } from '../icon';


/**
 * The Nav component
 */
const Nav = ({ links, _relativeURL, _ID }) => (
	<nav className="nav">
		<ul>
			<li className="nav__link nav__link--fixed">
				<a href={ _relativeURL( '/', _ID ) }>
					<Cuttlebelle className="nav__link__logo" title="Cuttlebelle" desc="The word Cuttlebelle" />
				</a>
			</li>
			{
				links.map( ( link, i ) => (
					<li className={`nav__link nav__link--generated${
						link.link.endsWith( _ID ) || link.link === '/' && _ID === 'index'
							? ` nav__link--active`
							: ''
						}`} key={ i }>
						<a href={
							link.link.startsWith('http')
								? link.link
								: _relativeURL( link.link, _ID )
						}>
							{
								link.name === 'GitHub'
									? <span>
											<Github className="nav__link__github" title="GitHub" desc="The GitHub logo" />
											<span className="nav__link__github__text">{ link.name }</span>
										</span>
									: link.name
							}
						</a>
					</li>
				))
			}
		</ul>
	</nav>
);

Nav.propTypes = {
	/**
	 * links:
	 *  - name: What is Cuttlebelle
	 *    link: /
	 *  - name: Docs
	 *    link: /docs
	 *  - name: GitHub
	 *    link: https://github.com/cuttlebelle/cuttlebelle
	 */
	links: PropTypes.array.isRequired,
};

Nav.defaultProps = {};

export default Nav;
