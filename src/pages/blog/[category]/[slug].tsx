import { useMemo } from 'react';
import { GetStaticPropsContext } from 'next';
import { getMDXComponent } from 'mdx-bundler/client';
import Layout from '#/src/components/Layout/Layout';
import { NumberOfPosts } from '#/src/types/types';
import { FrontmatterBlog, getBlogData } from '#/src/utils/getBlogData';
import { NumberOfPostsContext } from '#/src/store/NumberOfPostsContext';
import { categoryToSlug } from '#/src/utils/transformCategory';
import ArticleHeader from '#/src/components/shared/ArticleHeader';
import Prose from '#/src/components/shared/Prose';
import Comments from '#/src/components/shared/Comments';

interface PostProps {
    numberOfPosts: NumberOfPosts;
    post: { code: string; frontmatter: FrontmatterBlog };
}

export default function Post({ numberOfPosts, post }: PostProps) {
    const MDXContent = useMemo(() => getMDXComponent(post.code), [post.code]);

    return (
        <NumberOfPostsContext.Provider value={numberOfPosts}>
            <Layout noSidebar>
                <article className='w-full article'>
                    <ArticleHeader
                        title={post.frontmatter.title}
                        date={post.frontmatter.date}
                        category={post.frontmatter.category}
                    />
                    <Prose>
                        <MDXContent />
                    </Prose>
                </article>
                <Comments />
            </Layout>
        </NumberOfPostsContext.Provider>
    );
}

export async function getStaticPaths() {
    const { posts } = await getBlogData('blog');

    const paths = posts.reduce((paths, post) => {
        const { category, slug } = post.frontmatter;
        const categorySlug = categoryToSlug(category);

        paths.push({ params: { category: categorySlug, slug } });
        paths.push({ params: { category: 'devblog', slug } });
        return paths;
    }, [] as any[]);

    return {
        paths: paths,
        fallback: false,
    };
}

export async function getStaticProps(context: GetStaticPropsContext) {
    const { numberOfPosts, posts } = await getBlogData('blog');

    if (!context.params || !context.params.slug || Array.isArray(context.params.slug)) {
        return {
            notFound: true,
        };
    }

    const contextSlug = context.params.slug;

    const post = posts.find((post) => post.frontmatter.slug === contextSlug);

    if (!post) {
        return {
            notFound: true,
        };
    }
    const { code, frontmatter } = post;

    return { props: { numberOfPosts, post: { code, frontmatter } }, revalidate: 1 };
}
