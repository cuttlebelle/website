import PropTypes from 'prop-types';
import React from 'react';

import { Logo, Cuttlebelle, RocksLeft, RocksRight, RocksBack, Code, Content, Fish } from '../icon';


/**
 * The Header component
 */
const Header = ({ description }) => (
	<header className="header header--large">
		<div className="header__bubble header__bubble--floater header__bubble--floater2 js-header__bubble"></div>
		<div className="header__bubble header__bubble--floater js-header__bubble"></div>
		<div className="header__bubble header__bubble--floater header__bubble--floater2 js-header__bubble"></div>
		<div className="header__bubble header__bubble--floater header__bubble--floater3 js-header__bubble"></div>
		<div className="header__bubble header__bubble--floater js-header__bubble"></div>
		<div className="header__bubble header__bubble--floater header__bubble--floater1 js-header__bubble"></div>
		<div className="header__bubble header__bubble--floater header__bubble--floater2 js-header__bubble"></div>
		<div className="header__bubble header__bubble--floater js-header__bubble"></div>
		<div className="header__bubble header__bubble--floater header__bubble--floater3 js-header__bubble"></div>
		<div className="header__bubble header__bubble--floater js-header__bubble"></div>
		<div className="header__bubble header__bubble--floater js-header__bubble"></div>
		<div className="header__bubble header__bubble--floater header__bubble--floater1 js-header__bubble"></div>
		<div className="header__bubble header__bubble--floater js-header__bubble"></div>
		<div className="header__bubble header__bubble--floater js-header__bubble"></div>
		<div className="header__bubble header__bubble--floater header__bubble--floater2 js-header__bubble"></div>
		<div className="header__bubble header__bubble--floater js-header__bubble"></div>
		<div className="header__bubble header__bubble--floater header__bubble--floater3 js-header__bubble"></div>
		<div className="header__bubble header__bubble--floater js-header__bubble"></div>
		<div className="header__bubble header__bubble--floater header__bubble--floater3 js-header__bubble"></div>
		<div className="header__bubble header__bubble--floater js-header__bubble"></div>
		<div className="header__bubble header__bubble--floater header__bubble--floater1 js-header__bubble"></div>
		<div className="header__bubble header__bubble--floater js-header__bubble"></div>
		<div className="header__bubble header__bubble--floater js-header__bubble"></div>
		<div className="header__bubble header__bubble--floater js-header__bubble"></div>
		<div className="header__bubble header__bubble--floater header__bubble--floater2 js-header__bubble"></div>
		<div className="header__bubble header__bubble--floater header__bubble--floater3 header__bubble--floater1 js-header__bubble"></div>
		<div className="header__bubble header__bubble--floater js-header__bubble"></div>
		<div className="header__bubble header__bubble--floater header__bubble--floater2 js-header__bubble"></div>
		<div className="header__bubble header__bubble--floater js-header__bubble"></div>
		<div className="header__bubble header__bubble--floater header__bubble--floater1 js-header__bubble"></div>

		<div className="header__fishschool">
			<Fish className="header__fishschool__fish header__fishschool__fish--1" title="" desc="" />
			<Fish className="header__fishschool__fish header__fishschool__fish--2" title="" desc="" />
			<Fish className="header__fishschool__fish header__fishschool__fish--3" title="" desc="" />
			<Fish className="header__fishschool__fish header__fishschool__fish--4" title="" desc="" />
			<Fish className="header__fishschool__fish header__fishschool__fish--5" title="" desc="" />
			<Fish className="header__fishschool__fish header__fishschool__fish--6" title="" desc="" />
			<Fish className="header__fishschool__fish header__fishschool__fish--7" title="" desc="" />
			<Fish className="header__fishschool__fish header__fishschool__fish--8" title="" desc="" />
		</div>

		<RocksBack className="header__rocks header__rocks--back" title="" desc="" />
		<RocksLeft className="header__rocks header__rocks--left" title="" desc="" />
		<RocksRight className="header__rocks header__rocks--right" title="" desc="" />

		<div className="header__logo">
			<div className="header__bubble header__bubble--left">
				<Content className="header__bubble__icon header__bubble__icon--content" title="Content" desc="Symbolizing content concerns" />
			</div>

			<div className="header__bubble header__bubble--right">
				<Code className="header__bubble__icon header__bubble__icon--code" title="Code" desc="Symbolizing code concerns" />
			</div>

			<Logo className="header__logo__logo" title="Cuttlebelle logo" desc="A cute, green cuttlefish with a big smile" />
			<Cuttlebelle className="header__logo__cuttlebelle" title="Cuttlebelle" desc="The word Cuttlebelle" />

			<p className="header__logo__description">{ description }</p>
		</div>
	</header>
);

Header.propTypes = {
	/**
	 * description: The react static site generator that separates editing and code concerns
	 */
	description: PropTypes.string.isRequired,
};

Header.defaultProps = {};

export default Header;
