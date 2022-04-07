interface PageHeaderProps {
    heading: string;
    subText?: string;
}

export default function PageHeader({ heading, subText }: PageHeaderProps) {
    return (
        <div className='bg-primary rounded py-10 px-4'>
            <div className='container max-w-md mx-auto'>
                <h2 className='text-3xl font-semibold capitalize text-center lg:text-4xl text-primary'>
                    {heading}
                </h2>

                <div className='flex justify-center mx-auto mt-6'>
                    <span className='inline-block w-40 h-1 bg-text-color-primary rounded-full'></span>
                    <span className='inline-block w-3 h-1 mx-1 bg-text-color-primary rounded-full'></span>
                    <span className='inline-block w-1 h-1 bg-text-color-primary rounded-full'></span>
                </div>
                <div className='flex flex-col gap-6 mt-6 mx-w-2xl text-secondary'>
                    <p>{subText}</p>
                </div>
            </div>
        </div>
    );
}
