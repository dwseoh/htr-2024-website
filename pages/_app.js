import '@fontsource/major-mono-display';
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';

import '../styles/globals.css';

import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head'

import theme from '../src/theme/index';
import '../src/theme/styles.css';

const MyApp = ({ Component, pageProps }) => {
	return (
		<div>
			<Head>
				<title>Hack The Ridge</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
			</Head>
			<ChakraProvider theme={theme}>
				<style global jsx>
					{`
						html {
							scroll-behavior: smooth;
						}
					`}
				</style>
				<Component {...pageProps} />
			</ChakraProvider>
		</div>
	);
};

export default MyApp;
