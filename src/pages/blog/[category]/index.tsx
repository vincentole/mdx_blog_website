import { GetStaticPropsContext } from 'next';
import { FrontmatterBlog, getBlogData } from '#/src/utils/getBlogData';
import { NumberOfPostsContext } from '#/src/store/NumberOfPostsContext';
import { NumberOfPosts } from '#/src/types/types';
import { categorySlugToCategory, categoryToSlug } from '#/src/utils/transformCategory';
import { CategoryPage } from '#/src/components/Pages/CategoryPage/CategoryPage';
import { categories } from '#/src/settings/settings';

interface PostProps {
    numberOfPosts: NumberOfPosts;
    frontmatterSorted: FrontmatterBlog[];
    category: string;
}

export default function IndexPage({ numberOfPosts, frontmatterSorted, category }: PostProps) {
    return (
        <NumberOfPostsContext.Provider value={numberOfPosts}>
            <CategoryPage frontmatterSorted={frontmatterSorted} category={category} />
        </NumberOfPostsContext.Provider>
    );
}

export async function getStaticPaths() {
    const allCategories = categories;
    const paths = allCategories.reduce((paths, category) => {
        const categorySlug = categoryToSlug(category);

        paths.push({ params: { category: categorySlug } });

        return paths;
    }, [] as any[]);

    return {
        paths: paths,
        fallback: false,
    };
}

export async function getStaticProps(context: GetStaticPropsContext) {
    const { numberOfPosts, posts } = await getBlogData('blog');

    if (!context.params || !context.params.category || Array.isArray(context.params.category)) {
        return {
            notFound: true,
        };
    }

    const contextCategory = context.params.category;
    const category = categorySlugToCategory(contextCategory);

    if (!category) {
        return {
            notFound: true,
        };
    }

    if (contextCategory === 'devblog') {
        const frontmatterSorted = posts
            .map((post) => post.frontmatter)
            .sort((a, b) => -(new Date(a.date).getTime() - new Date(b.date).getTime()));

        return { props: { numberOfPosts, frontmatterSorted, category: 'DevBlog' } };
    } else {
        const frontmatterSorted = posts
            .map((post) => post.frontmatter)
            .filter((post) => categoryToSlug(post.category) === contextCategory)
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

        return { props: { numberOfPosts, frontmatterSorted, category } };
    }
}
