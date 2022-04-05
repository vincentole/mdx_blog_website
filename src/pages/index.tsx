import { HomePage } from '#/src/components/HomePage/HomePage';
import { Frontmatter, getBlogData } from '#/src/utils/getBlogData';
import { NumberOfPostsContext } from '#/src/store/NumberOfPostsContext';
import { NumberOfPosts } from '#/src/types/types';

interface PostProps {
    numberOfPosts: NumberOfPosts;
    frontmatterSorted: Frontmatter[];
}

export default function IndexPage({ numberOfPosts, frontmatterSorted }: PostProps) {
    return (
        <NumberOfPostsContext.Provider value={numberOfPosts}>
            <HomePage frontmatterSorted={frontmatterSorted} />
        </NumberOfPostsContext.Provider>
    );
}

export const getStaticProps = async () => {
    const { numberOfPosts, posts } = await getBlogData();

    const frontmatterSorted = posts
        .map((post) => post.frontmatter)
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return { props: { numberOfPosts, frontmatterSorted } };
};
