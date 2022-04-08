import Head from 'next/head';
import Layout from '#/src/components/Layout/Layout';
import { FrontmatterBlog } from '#/src/utils/getBlogData';
import BlogPostList from '#/src/components/shared/BlogPostList';
import PageHeader from '#/src/components/shared/PageHeader';

interface PostProps {
    frontmatterSorted: FrontmatterBlog[];
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
                <PageHeader heading='DevBlog' />
                <BlogPostList frontmatter={frontmatterSorted} />
            </Layout>
        </>
    );
}
