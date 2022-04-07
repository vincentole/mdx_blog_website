import { HomePage } from '#/src/components/Pages/HomePage/HomePage';
import { FrontmatterBlog, getBlogData } from '#/src/utils/getBlogData';
import { NumberOfPostsContext } from '#/src/store/NumberOfPostsContext';
import { NumberOfPosts } from '#/src/types/types';

interface PostProps {
    numberOfPosts: NumberOfPosts;
    frontmatterSorted: FrontmatterBlog[];
}

export default function IndexPage({ numberOfPosts, frontmatterSorted }: PostProps) {
    return (
        <NumberOfPostsContext.Provider value={numberOfPosts}>
            <HomePage frontmatterSorted={frontmatterSorted} />
        </NumberOfPostsContext.Provider>
    );
}

export const getStaticProps = async () => {
    const { numberOfPosts, posts } = await getBlogData('blog');

    const frontmatterSorted = posts
        .map((post) => post.frontmatter)
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return { props: { numberOfPosts, frontmatterSorted } };
};
