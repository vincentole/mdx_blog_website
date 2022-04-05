import { Frontmatter } from '#/src/utils/getBlogData';
import ArticleCard from './ArticleCard';

interface BlogPostListProps {
    frontmatter: Frontmatter[];
}

export default function BlogPostList({ frontmatter }: BlogPostListProps) {
    return (
        <ol className='flex flex-col gap-2'>
            {frontmatter.map((item) => (
                <li key={item.slug} className='list-none'>
                    <ArticleCard
                        date={item.date}
                        title={item.title}
                        category={item.category}
                        description={item.category}
                        slug={item.slug}
                    />
                </li>
            ))}
        </ol>
    );
}
