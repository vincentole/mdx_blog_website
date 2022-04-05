import Link from 'next/link';

interface NavbarSectionProps {
    children: React.ReactNode;
    className?: string;
    label: string;
    displayLabel?: boolean;
    displayLabelAs?: 'h4' | 'h5' | 'h6';
}

export default function SidebarSection({
    children,
    className = '',
    label,
    displayLabel,
    displayLabelAs,
}: NavbarSectionProps) {
    const Element = displayLabelAs || 'h4';

    return (
        <ul role='menu' className={`pl-1 pr-1 ${className}`}>
            <Link href='/resources'>
                <a className=''>
                    <Element
                        className={`pl-2 py-1 border-l border-gray-300 hover:border-blue-400 rounded-r transition-colors hover:bg-slate-200 text-sm ${
                            !displayLabel && 'sr-only'
                        }`}
                    >
                        {label}
                    </Element>
                </a>
            </Link>

            {children}
        </ul>
    );
}
