import { useMemo } from 'react';
import { GetStaticPropsContext } from 'next';
import { getMDXComponent } from 'mdx-bundler/client';
import Layout from '#/src/components/Layout/Layout';
import { NumberOfPosts } from '#/src/types/types';
import { FrontmatterBlog, getBlogData } from '#/src/utils/getBlogData';
import { NumberOfPostsContext } from '#/src/store/NumberOfPostsContext';
import ArticleHeader from '#/src/components/shared/ArticleHeader';
import { FrontmatterSinglePage, getStaticPageData } from '#/src/utils/getStaticPageData';
import Prose from '#/src/components/shared/Prose';
import Comments from '#/src/components/shared/Comments';

interface PostProps {
    numberOfPosts: NumberOfPosts;
    post: { code: string; frontmatter: FrontmatterSinglePage };
    singlePagePostsData: FrontmatterSinglePage[];
}

export default function Post({ numberOfPosts, post, singlePagePostsData }: PostProps) {
    const MDXContent = useMemo(() => getMDXComponent(post.code), [post.code]);
    const group = post.frontmatter.groupSlug;
    return (
        <NumberOfPostsContext.Provider value={numberOfPosts}>
            <Layout noSidebar>
                <article className='w-full article'>
                    <ArticleHeader
                        title={post.frontmatter.title}
                        date={post.frontmatter.date}
                        group={group}
                        singlePagePostsData={singlePagePostsData}
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
    const { posts } = await getStaticPageData('resources');

    const paths = posts.map((post) => {
        const { slug } = post.frontmatter;
        return { params: { slug } };
    });

    return {
        paths: paths,
        fallback: false,
    };
}

export async function getStaticProps(context: GetStaticPropsContext) {
    const { numberOfPosts } = await getBlogData('blog');
    const { posts } = await getStaticPageData('resources');
    const singlePagePostsData = posts.map((post) => post.frontmatter);

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

    return {
        props: { numberOfPosts, post: { code, frontmatter }, singlePagePostsData },
        revalidate: 1,
    };
}
