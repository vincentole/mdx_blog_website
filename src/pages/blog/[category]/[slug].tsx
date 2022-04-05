import { useMemo } from 'react';
import { GetStaticPropsContext } from 'next';
import { getMDXComponent } from 'mdx-bundler/client';
import Layout from '#/src/components/Layout/Layout';
import { NumberOfPosts } from '#/src/types/types';
import { Frontmatter, getBlogData } from '#/src/utils/getBlogData';
import { NumberOfPostsContext } from '#/src/store/NumberOfPostsContext';
import { categoryToSlug } from '#/src/utils/transformCategory';
import ArticleHeader from '#/src/components/shared/ArticleHeader';

interface PostProps {
    numberOfPosts: NumberOfPosts;
    post: { code: string; frontmatter: Frontmatter };
}

export default function Post({ numberOfPosts, post }: PostProps) {
    const MDXContent = useMemo(() => getMDXComponent(post.code), [post.code]);

    return (
        <NumberOfPostsContext.Provider value={numberOfPosts}>
            <Layout noSidebar>
                <article className=''>
                    <ArticleHeader
                        title={post.frontmatter.title}
                        date={post.frontmatter.date}
                        category={post.frontmatter.category}
                    />
                    <div className='prose mx-auto'>
                        <MDXContent />
                    </div>
                </article>
            </Layout>
        </NumberOfPostsContext.Provider>
    );
}

export async function getStaticPaths() {
    const { posts } = await getBlogData();

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
    const { numberOfPosts, posts } = await getBlogData();

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

    return { props: { numberOfPosts, post: { code, frontmatter } } };
}
