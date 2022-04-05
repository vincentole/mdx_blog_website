import { categoryToSlug } from '#/src/utils/transformCategory';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    RedditShareButton,
    RedditIcon,
    TelegramShareButton,
    TwitterShareButton,
    TwitterIcon,
} from 'react-share';

interface ArticleHeaderProps {
    date: string;
    category: string;
    title: string;
}

export default function ArticleHeader({ date, category, title }: ArticleHeaderProps) {
    const [currentURL, setCurrentURL] = useState('#');
    const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' } as const;
    const categorySlug = categoryToSlug(category);

    useEffect(() => {
        setCurrentURL(window.location.href);
    }, []);

    return (
        <>
            <div className='w-full max-w-prose mx-auto mt-10 mb-10 text-left'>
                <div className='pb-6 mb-3 border-b border-gray-200'>
                    <h2
                        className='mb-3 text-3xl font-bold text-gray-900 md:leading-tight md:text-4xl'
                        itemProp='headline'
                        title={title}
                    >
                        {title}
                    </h2>
                    <p className='text-base text-gray-500 mb-3'>
                        {new Date(date).toLocaleDateString('en-us', dateOptions)} — Written by Ole
                        Urfels
                    </p>

                    <Link href={`/blog/${categorySlug}`}>
                        <a className='px-3 py-1 text-xs font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500'>
                            {category}
                        </a>
                    </Link>
                </div>
                <div className='flex items-center mb-6 space-x-2'>
                    <p className='text-gray-600 pr-2'>Share this article</p>
                    <FacebookShareButton url={currentURL}>
                        <FacebookIcon className='rounded w-6 h-6' />
                    </FacebookShareButton>
                    <TwitterShareButton url={currentURL}>
                        <TwitterIcon className='rounded w-6 h-6' />
                    </TwitterShareButton>
                    <LinkedinShareButton url={currentURL}>
                        <LinkedinIcon className='rounded w-6 h-6' />
                    </LinkedinShareButton>
                    <RedditShareButton url={currentURL}>
                        <RedditIcon className='rounded w-6 h-6' />
                    </RedditShareButton>
                </div>
            </div>
        </>
    );
}
