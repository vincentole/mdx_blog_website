import { categoryToSlug } from '#/src/utils/transformCategory';
import Link from 'next/link';

interface ArticleCardProps {
    date: string;
    category: string;
    title: string;
    description: string;
    slug: string;
}

export default function ArticleCard({
    date,
    category,
    title,
    description,
    slug,
}: ArticleCardProps) {
    const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' } as const;
    const categorySlug = categoryToSlug(category);

    return (
        <>
            <div className='max-w-2xl px-8 py-4 mx-auto bg-white rounded shadow-md dark:bg-gray-800'>
                <div className='flex items-center justify-between'>
                    <span className='text-sm font-light text-gray-600 dark:text-gray-400'>
                        {new Date(date).toLocaleDateString('en-us', dateOptions)}
                    </span>
                    <Link href={`/blog/${categorySlug}`}>
                        <a className='px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500'>
                            {category}
                        </a>
                    </Link>
                </div>

                <div className='mt-2'>
                    <Link href={`/blog/${categorySlug}/${slug}`}>
                        <a className='text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline'>
                            <h2>{title}</h2>
                        </a>
                    </Link>
                    <p className='mt-2 text-gray-600 dark:text-gray-300'>{description}</p>
                </div>
            </div>
        </>
    );
}
