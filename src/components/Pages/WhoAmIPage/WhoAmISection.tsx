import Image from 'next/image';
import { RiGithubFill, RiLinkedinFill } from 'react-icons/ri';
import ExternalLink from '#/src/components/shared/ExternalLink';
import { HiMail } from 'react-icons/hi';

export default function WhoAmISection() {
    return (
        <section className='bg-primary rounded py-10 px-4'>
            <div className='container max-w-md mx-auto'>
                <h2 className='text-3xl font-semibold text-center capitalize lg:text-4xl text-primary'>
                    Who am I
                </h2>

                <div className='flex justify-center mx-auto mt-6'>
                    <span className='inline-block w-40 h-1 bg-text-color-primary rounded-full'></span>
                    <span className='inline-block w-3 h-1 mx-1 bg-text-color-primary rounded-full'></span>
                    <span className='inline-block w-1 h-1 bg-text-color-primary rounded-full'></span>
                </div>
                <div className='flex flex-col gap-6 mt-6 mx-w-2xl text-secondary'>
                    <p>
                        I am a software developer, specializing in web application and serverless
                        cloud technologies.
                    </p>
                    <p>
                        I love to work with the cloud, since almost any project can be implement,
                        and scaling is virtually limitless.
                    </p>
                    <p>
                        I get exciting to break new ground and move the world ahead with modern
                        technology.
                    </p>
                    <p>
                        I believe that the key to success lies in communication, technical
                        understanding and full commitment, and with this focus I approach my
                        projects.
                    </p>
                </div>
            </div>

            <div className='flex justify-center mt-8'>
                <div className='flex flex-col items-center p-6 border rounded-xl dark:border-gray-700'>
                    <div className='relative w-full min-w-[250px]  aspect-square'>
                        <Image
                            src='/profile.jpeg'
                            alt='Ole Urfels'
                            layout='fill'
                            objectFit='cover'
                            objectPosition='center'
                            className='rounded-xl'
                        />
                    </div>

                    <h3 className='mt-4 text-2xl font-semibold capitalize text-primary'>
                        Ole Urfels
                    </h3>

                    <p className='mt-2 capitalize text-secondary'>Web Developer</p>

                    <div className='flex mt-3 -mx-2'>
                        <ExternalLink
                            ariaLabel='LinkedIn'
                            link='https://www.linkedin.com/in/ole-urfels/'
                        >
                            <RiLinkedinFill />
                        </ExternalLink>

                        <ExternalLink ariaLabel='GitHub' link='https://github.com/vincentole/'>
                            <RiGithubFill />
                        </ExternalLink>

                        <ExternalLink ariaLabel='Email' link='mailto:ole.urfels@outlook.de'>
                            <HiMail />
                        </ExternalLink>
                    </div>
                </div>
            </div>
        </section>
    );
}
