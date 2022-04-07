import Head from 'next/head';
import Layout from '#/src/components/Layout/Layout';
import PageHeader from '#/src/components/shared/PageHeader';
import ContactSection from '#/src/components/Pages/ContactPage/ContactSection';

export function ContactPage() {
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
                <PageHeader
                    heading='Contact Me'
                    subText='Do you have a job offer, would you like to leave a comment or just say hello? You are welcome to get in touch.'
                />
                <ContactSection />
            </Layout>
        </>
    );
}
