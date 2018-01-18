import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Slugify from 'slugify';


/**
 * The page component
 *
 * @disable-docs
 */
const Page = ({
	_ID,
	_relativeURL,
	title,
	header,
	navigation,
	intro,
	docs,
	footer
}) => (
 <html lang="en" className="background">
	<head>
		<title>Cuttlebelle documentation - { title }</title>
		<meta charSet="UTF-8" />
		<meta name="viewport" content="width=device-width" />
		<link rel="shortcut icon" type="image/x-icon" href={ _relativeURL( '/assets/img/favicon.ico', _ID ) } />
		<link rel="stylesheet" href={ _relativeURL( '/assets/css/style.css', _ID ) } />

		<script src={ _relativeURL( '/assets/js/header.js', _ID ) } />
	</head>
	<body className={`page-${ Slugify( _ID ) }`}>

		<div className="wrapper">
			{ header }

			<main className="docs">
				<aside className="docs__nav">
					{ navigation }
				</aside>

				<section className="docs__content">
					{ intro && intro }
					{ docs }
				</section>
			</main>

			{ footer }
		</div>

		<script src={ _relativeURL( '/assets/js/footer.js', _ID ) } />
	</body>
 </html>
);

Page.propTypes = {
	/**
	 * title: Homepage
	 */
	title: PropTypes.string.isRequired,

	/**
	 * header: (partials)(2)
	 */
	header: PropTypes.node,

	/**
	 * navigation: (partials)(4)
	 */
	navigation: PropTypes.node.isRequired,

	/**
	 * docs: (partials)(4)
	 */
	docs: PropTypes.node.isRequired,

	/**
	 * footer: (partials)(2)
	 */
	footer: PropTypes.node,
};

Page.defaultProps = {};

export default Page;
