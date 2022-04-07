import Head from 'next/head';
import Layout from '#/src/components/Layout/Layout';
import WhoAmISection from '#/src/components/Pages/WhoAmIPage/WhoAmISection';

export function WhoAmIPage() {
    return (
        <>
            <Head>
                <title>Document</title>
                <meta
                    name='description'
                    content='Ole Urfels | Frontend Developer, Teacher, Writer'
                />
            </Head>
            <Layout noSidebar>
                <WhoAmISection />
            </Layout>
        </>
    );
}
