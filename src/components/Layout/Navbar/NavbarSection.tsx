interface NavbarSectionProps {
    children: React.ReactNode;
    className?: string;
    label: string;
    displayLabel?: boolean;
    displayLabelAs?: 'h4' | 'h5' | 'h6';
}

export default function NavbarSection({
    children,
    className = '',
    label,
    displayLabel,
    displayLabelAs,
}: NavbarSectionProps) {
    const Element = displayLabelAs || 'h4';

    return (
        <ul role='menu' className={`py-2 pl-6 pr-1 first:pt-6 ${className}`}>
            <Element className={`pl-2 text-gray-500 text-sm py-1 ${!displayLabel && 'sr-only'}`}>
                {label}
            </Element>
            {children}
        </ul>
    );
}
