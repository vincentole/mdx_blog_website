import Layout from '#/src/components/Layout/Layout';
import { NumberOfPostsContext } from '#/src/store/NumberOfPostsContext';
import { NumberOfPosts } from '#/src/types/types';
import { getBlogData } from '#/src/utils/getBlogData';
import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticProps } from 'next';
import { useMemo } from 'react';

interface Props {
    code: any;
    frontmatter: any;
    numberOfPosts: NumberOfPosts;
}

export default function ExamplePage({ code, frontmatter, numberOfPosts }: Props) {
    // const Component = useMemo(() => getMDXComponent(code), [code]);
    return (
        <NumberOfPostsContext.Provider value={numberOfPosts}>
            <Layout>
                <div>{/* <Component /> */}</div>
            </Layout>
        </NumberOfPostsContext.Provider>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const { numberOfPosts, posts } = await getBlogData();

    return { props: { numberOfPosts } };
};
