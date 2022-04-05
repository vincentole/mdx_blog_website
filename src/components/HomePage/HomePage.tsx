import Head from 'next/head';
import Layout from '#/src/components/Layout/Layout';
import { Frontmatter } from '#/src/utils/getBlogData';
import BlogPostList from '#/src/components/shared/BlogPostList';

interface PostProps {
    frontmatterSorted: Frontmatter[];
}

export function HomePage({ frontmatterSorted }: PostProps) {
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
                <div className='py-4'>
                    <h2 className='text-3xl font-bold text-gray-700 dark:text-white text-center'>
                        All Articles
                    </h2>
                </div>
                <BlogPostList frontmatter={frontmatterSorted} />
            </Layout>
        </>
    );
}
