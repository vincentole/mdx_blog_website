import { HiMail } from 'react-icons/hi';
import { RiLinkedinFill } from 'react-icons/ri';

export default function ContactSection() {
    return (
        <div className='w-full px-6 py-4 mx-auto bg-primary rounded'>
            <div className='grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2'>
                <a
                    href='https://www.linkedin.com/in/ole-urfels/'
                    className='flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500'
                >
                    <RiLinkedinFill className='text-2xl' />

                    <span className='mt-2'>LinkedIn ole-urfels</span>
                </a>

                <a
                    href='mailto:ole.urfels@outlook.de'
                    className='flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500'
                >
                    <HiMail className='text-2xl' />

                    <span className='mt-2'>ole.urfels@outlook.de</span>
                </a>
            </div>
        </div>
    );
}
