import PropTypes from 'prop-types';
import React from 'react';

import { Logo } from './icon';


/**
 * The page component
 */
const Page = ({
	_ID,
	_relativeURL,
	title,
	header,
	main,
	footer
}) => (
 <html className="background">
	<head>
		<title>{ title }</title>
		<link rel="shortcut icon" type="image/x-icon" href={ _relativeURL( '/code/assets/img/favicon.ico', _ID ) } />
		<link rel="stylesheet" href={ _relativeURL( '/code/assets/css/style.css', _ID ) } />

		<script src={ _relativeURL( '/code/assets/js/header.js', _ID ) } />
	</head>
	<body>

		<div className="wrapper">
			{ header }
			<main>
				{ main }
			</main>
			{ footer }
		</div>

		<script src={ _relativeURL( '/code/assets/js/footer.js', _ID ) } />
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
