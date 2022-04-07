import Link from 'next/link';

interface CounterChipProps {
    children: React.ReactNode;
    href: string;
}

export default function FooterLink({ children, href }: CounterChipProps) {
    return (
        <Link href={href}>
            <a className='flex mb-3 text-sm font-medium transition md:mb-2 hover-text-primary'>
                {children}
            </a>
        </Link>
    );
}
