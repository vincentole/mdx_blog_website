import Link from 'next/link';

interface NavbarItemProps {
    children: React.ReactNode;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    link?: string;
}

export default function NavbarItem({ children, leftIcon, rightIcon, link }: NavbarItemProps) {
    return (
        <Link href={link ? link : '#'}>
            <a>
                <li
                    role='menuitem'
                    className='flex items-center gap-3 py-2 pl-2 rounded-l cursor-pointer transition-colors hover-bg-primary'
                >
                    {leftIcon && <span>{leftIcon}</span>}
                    <span>{children}</span>
                    {rightIcon && <span className='ml-auto mr-2'>{rightIcon}</span>}
                </li>
            </a>
        </Link>
    );
}
