export default function ArticleCardEmpty() {
    return (
        <>
            <div className='w-full text-center px-8 py-4 rounded bg-primary'>
                <h2 className='text-xl font-bold text-gray-700 dark:text-white'>
                    {`No posts yet.`} <span>🔨</span>
                </h2>
            </div>
        </>
    );
}
