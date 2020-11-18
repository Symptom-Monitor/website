import React from 'react';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import Navbar from '../components/navbar';
// eslint-disable-next-line import/no-unassigned-import
import '../styles/global.scss';

const MyApp = ({Component, pageProps}: AppProps) => {
	return (
		<>
			<Head>
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>

				<title>Symptom Monitor</title>
			</Head>

			<Navbar/>

			<div className="container">
				<Component {...pageProps}/>
			</div>
		</>
	);
};

export default MyApp;
