const visit = require( 'unist-util-visit' );

const attacher = ({
	_ID = null,          // The ID of the current page
	_self = null,        // The relative path to the content file; can be md or yaml file
	_isDocs = false,     // A boolean value, true in docs context only
	_parents = null,     // An array of all parent pages IDs
	_pages = null,       // An object of all pages and their props; with ID as key
	_storeSet = null,    // The store setter
	_store = null,       // The store getter
	_nav = null,         // A nested object of your site structure
	_relativeURL = null, // A helper function to make an absolute URL relative
	_parseYaml = null,   // The YAML parsing function
	_parseReact = null,  // A function that parses React to static markup
	_globalProp = null   // A prop that can be set globally from the `package.json`
} = {}) => {
	const transformer = ( tree, file ) => {
		visit( tree, 'link', node => {
			if( node.url.startsWith('http://') || node.url.startsWith('https://') ) {
				let data = node.data || ( node.data = {} );
				let hProperties = data.hProperties || ( data.hProperties = {} );
				node.data.hProperties.rel = 'external';
			}
			else if( !node.url.startsWith('#') && _relativeURL && typeof _relativeURL === 'function' ) {
				node.url = _relativeURL( node.url, _ID );
			}
		} );

		visit( tree, 'image', node => {
			if( !node.url ) {
				return;
			}

			if( !node.url.startsWith('http://') && !node.url.startsWith('https://') ) {
				node.url = _relativeURL( node.url, _ID );
			}
		} );

		visit( tree, 'paragraph', node => {
			if( !node.children || node.children.length < 1 ) {
				return;
			}

			if( node.children[0].type === 'text' && node.children[0].value.startsWith('💡') ) {
				let data = node.data || ( node.data = {} );
				let hProperties = data.hProperties || ( data.hProperties = {} );
				node.data.hProperties.class = [node.data.hProperties.class, 'markdown-hint'].filter(c => !!c).join(' ');
			}
		} );

		// Unicode object keys?… that's alright I guess…
		const entities = {
			'™': {
				pattern: '\\™',
				encoded: '<span class="markdown-trademark">&trade;</span>'
			},
			'\’': {
				pattern: '\\’',
				encoded: '<span class="markdown-quote">&rsquo;</span>'
			},
			'—': {
				pattern: '\\—',
				encoded: '<span class="markdown-mdash">&mdash;</span>'
			},
			'–': {
				pattern: '\\–',
				encoded: '<span class="markdown-ndash">&ndash;</span>'
			},
			'...': {
				pattern: '\\.\\.\\.',
				encoded: '<span class="markdown-ellipsis">&hellip;</span>'
			}
		};
		const entitiesJoined = Object.values(entities).map(entity => entity.pattern).join('|');
		const entitiesTest = new RegExp(`(${entitiesJoined})`);
		const entitiesSplit = new RegExp( entitiesTest.source, entitiesTest.flags + 'g' );

		visit( tree, 'text', ( node, _index, parent ) => {
			if( [ 'code', 'inlineCode' ].includes( parent.type ) ) {
				return;
			}

			if( !node.value ) {
				return;
			}

			if( !entitiesTest.test( node.value ) ) {
				return;
			}

			const newChildren = [];
			parent.children.forEach(child => {
				if (child !== node || !child.value ) {
					if( child.position ) {
						delete child.position;
					}
					newChildren.push( child );
					return;
				}

				child.value.split( entitiesSplit ).forEach(part => {
					if( Object.keys( entities ).includes( part ) ) {
						newChildren.push( {
							type: 'html',
							value: entities[part].encoded
						} );
					}
					else {
						newChildren.push( {
							type: 'text',
							value: part
						} );
					}
				});
			});

			parent.children = newChildren;
		} );
	};

	return transformer;
};

module.exports = attacher;
