import Head from 'next/head';
import Layout from '#/src/components/Layout/Layout';
import { Frontmatter } from '#/src/utils/getBlogData';
import BlogPostList from '#/src/components/shared/BlogPostList';

interface PostProps {
    frontmatterSorted: Frontmatter[];
    category: string;
}

export function CategoryPage({ frontmatterSorted, category }: PostProps) {
    return (
        <>
            <Head>
                <title>Ole Urfels | {category}</title>
                <meta
                    name='description'
                    content='Ole Urfels | Frontend Developer, Teacher, Writer'
                />
            </Head>
            <Layout noSidebar>
                <div className='py-4'>
                    <h2 className='text-3xl font-bold text-gray-700 dark:text-white text-center'>
                        {category}
                    </h2>
                </div>
                <BlogPostList frontmatter={frontmatterSorted} />
            </Layout>
        </>
    );
}
