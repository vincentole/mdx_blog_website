interface ExternalIconLinkProps {
    children: React.ReactNode;
    link: string;
    ariaLabel?: string;
}

export default function ExternalLink({ children, link, ariaLabel }: ExternalIconLinkProps) {
    return (
        <a
            href={link}
            target='_blank'
            rel='noreferrer'
            className={`flex items-center text-xl mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 `}
            aria-label={ariaLabel}
        >
            {children}
        </a>
    );
}
