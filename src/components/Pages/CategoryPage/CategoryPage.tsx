import Head from 'next/head';
import Layout from '#/src/components/Layout/Layout';
import { FrontmatterBlog } from '#/src/utils/getBlogData';
import BlogPostList from '#/src/components/shared/BlogPostList';
import PageHeader from '#/src/components/shared/PageHeader';

interface PostProps {
    frontmatterSorted: FrontmatterBlog[];
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
                <PageHeader heading={category} />

                <BlogPostList frontmatter={frontmatterSorted} />
            </Layout>
        </>
    );
}
