import PropTypes from 'prop-types';
import Slugify from 'slugify';
import React from 'react';

import { Logo } from './icon';


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
	main,
	footer
}) => (
 <html lang="en" className="background">
	<head>
		<title>{ title }</title>
		<meta charSet="UTF-8" />
		<meta name="viewport" content="width=device-width" />
		<link rel="shortcut icon" type="image/x-icon" href={ _relativeURL( '/assets/img/favicon.ico', _ID ) } />
		<link rel="stylesheet" href={ _relativeURL( '/assets/css/style.css', _ID ) } />

		<script src={ _relativeURL( '/assets/js/header.js', _ID ) } />
	</head>
	<body className={`page-${ Slugify( _ID ) }`}>

		<div className="wrapper">
			{ header }

			<main>
				{ main }
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
	 * main: (partials)(4)
	 */
	main: PropTypes.node.isRequired,

	/**
	 * footer: (partials)(2)
	 */
	footer: PropTypes.node,
};

Page.defaultProps = {};

export default Page;
