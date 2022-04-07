import Head from 'next/head';
import Layout from '#/src/components/Layout/Layout';
import PortfolioProject from '#/src/components/Pages/PortfolioPage/PortfolioProject';
import PageHeader from '#/src/components/shared/PageHeader';
import { RiReactjsFill } from 'react-icons/ri';
import { SiGraphql, SiNextdotjs, SiRedux, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { GiMeshNetwork } from 'react-icons/gi';

export function PortfolioPage() {
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
                    heading='Portfolio'
                    subText='During my journey to becoming a frontend developer, I have build many
                        projects. Below you can find some of my recent once.'
                />
                <PortfolioProject
                    title='Rustica Coffee Website'
                    description={`Rustica Coffee Website is a website with an integrated store. The coffee shop is imaginary and the project was created for learning purposes. The website has a contact form integrated with formspree and formik, a random products section, a store subpage (among others), as well as an interactive shopping cart. In addition, the site is fully responsive and uses Next.js's integrated image optimization. The products' data is pulled from graphcms via their GraphQL API.`}
                    githubLink='https://github.com/vincentole/rustica_coffee_website'
                    liveDemoLink='https://rustica-coffee-website.vercel.app/'
                    src='/rustica_coffee_website.png'
                    icons={
                        <>
                            <SiTypescript title='TypeScript' />
                            <SiNextdotjs title='Next.js' />
                            <RiReactjsFill title='React.js' />
                            <SiRedux title='Redux' />
                            <SiGraphql title='GraphQL' />
                            <SiTailwindcss title='TailwindCSS' />
                        </>
                    }
                />
                <PortfolioProject
                    title='React Portfolio Website'
                    description='React Portfolio Website is a practice project showcasing design and development capabilities. The website is a single page application divided into multiple sections with smooth/custom animations, project showcase, and fun visual interactions. Concrete features are, for example, the ability to switch tsParticles on and off, a smooth scroll to page sections, the appearance-transition of the navbar based on the scroll direction.'
                    githubLink='https://github.com/vincentole/react_portfolio_website'
                    liveDemoLink='https://serene-archimedes-4f2abc.netlify.app/'
                    src='/portfolio_website_1.png'
                    icons={
                        <>
                            <RiReactjsFill title='React.js' />
                            <SiTailwindcss title='TailwindCSS' />
                            <GiMeshNetwork title='tsParticles.js' />
                        </>
                    }
                />
            </Layout>
        </>
    );
}
