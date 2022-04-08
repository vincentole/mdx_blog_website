import { FrontmatterBlog } from '#/src/utils/getBlogData';
import ArticleCardEmpty from '#/src/components/shared/ArticleCardEmpty';
import ArticleCard from './ArticleCard';

interface BlogPostListProps {
    frontmatter: FrontmatterBlog[];
}

export default function BlogPostList({ frontmatter }: BlogPostListProps) {
    const isEmpty = frontmatter.length === 0;
    return (
        <ol className='flex flex-col gap-2'>
            {isEmpty && <ArticleCardEmpty />}
            {frontmatter.map((item) => (
                <li key={item.slug} className='list-none'>
                    <ArticleCard
                        date={item.date}
                        title={item.title}
                        category={item.category}
                        description={item.description}
                        slug={item.slug}
                    />
                </li>
            ))}
        </ol>
    );
}
