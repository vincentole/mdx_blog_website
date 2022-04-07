import '@fontsource/roboto/100.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';
import '#/src/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta charSet='UTF-8' />
                <meta
                    name='viewport'
                    content='minimum-scale=1, initial-scale=1, width=device-width'
                />
            </Head>
            <ThemeProvider attribute='class'>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
