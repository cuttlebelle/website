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
		<link rel="apple-touch-icon" sizes="180x180" href={ _relativeURL('/assets/apple-touch-icon.png', _ID ) }/>
		<link rel="icon" type="image/png" sizes="32x32" href={ _relativeURL('/assets/favicon-32x32.png', _ID ) }/>
		<link rel="icon" type="image/png" sizes="16x16" href={ _relativeURL('/assets/favicon-16x16.png', _ID ) }/>
		<link rel="manifest" href={ _relativeURL('/assets/manifest.json', _ID ) }/>
		<link rel="mask-icon" href={ _relativeURL('/assets/safari-pinned-tab.svg', _ID ) } color="#06262d"/>
		<link rel="shortcut icon" href={ _relativeURL('/assets/favicon.ico', _ID ) }/>
		<meta name="msapplication-config" content={ _relativeURL('/assets/browserconfig.xml', _ID ) }/>
		<meta name="theme-color" content="#ffffff"/>
		<meta name="robots" content="index, follow" />
		<meta name="author" content="Dominik Wilkowski" />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:title" content="Cuttlebelle" />
		<meta name="twitter:description" content="The react static site generator that separates editing and code concerns" />
		<meta name="twitter:name" content="cuttlebelle" />
		<meta name="twitter:image" content="https://cuttlebelle.com/assets/img/cuttlebelle.jpg" />
		<meta property="og:type" content="website" />
		<meta property="og:title" content="Cuttlebelle" />
		<meta property="og:site_name" content="Cuttlebelle" />
		<meta property="og:description" content="The react static site generator that separates editing and code concerns" />
		<meta property="og:image" content="https://cuttlebelle.com/assets/img/cuttlebelle.jpg" />
		<meta property="og:url" content="https://cuttlebelle.com/" />
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
