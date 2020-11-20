import React from 'react';
import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const pages = [
	{
		label: 'Home',
		href: '/'
	},
	{
		label: 'About',
		href: '/about'
	},
	{
		label: 'App',
		href: '/app'
	},
	{
		label: 'Process a video',
		href: '/video'
	}
];

const Navbar = () => (
	<AppBar position="static">
		<Toolbar>
			{
				pages.map(page => (
					<Link key={page.href} passHref href={page.href}>
						<Button color="inherit" component="a">{page.label}</Button>
					</Link>
				))
			}
		</Toolbar>
	</AppBar>
);

export default Navbar;
