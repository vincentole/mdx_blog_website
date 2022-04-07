import Image from 'next/image';
import { BsFillEyeFill } from 'react-icons/bs';
import { RiGithubFill } from 'react-icons/ri';
import ExternalLink from '#/src/components/shared/ExternalLink';

interface PortfolioProjectProps {
    title: string;
    description: string;
    githubLink: string;
    liveDemoLink: string;
    icons: React.ReactNode;
    src: string;
}

export default function PortfolioProject({
    title,
    description,
    githubLink,
    liveDemoLink,
    icons,
    src,
}: PortfolioProjectProps) {
    return (
        <article className='rounded bg-primary'>
            <div className='relative w-full aspect-video'>
                <Image
                    src={src}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    alt='Website Screenshot'
                    className='rounded-t'
                />
            </div>

            <div className='flex items-center gap-4 px-6 py-3 bg-gray-900 text-white text-2xl'>
                {icons}
            </div>

            <div className='px-6 py-4'>
                <h3 className='text-xl font-semibold text-primary'>{title}</h3>

                <p className='py-2 text-secondary'>{description}</p>

                <div className='flex items-center mt-4 '>
                    <ExternalLink link={githubLink}>
                        <RiGithubFill />
                        <span className='px-2 text-base text-primary'>View Github Repo</span>
                    </ExternalLink>
                </div>

                <div className='flex items-center mt-4'>
                    <ExternalLink link={liveDemoLink}>
                        <BsFillEyeFill />
                        <span className='px-2 text-base text-primary'>View Live Demo</span>
                    </ExternalLink>
                </div>
            </div>
        </article>
    );
}
