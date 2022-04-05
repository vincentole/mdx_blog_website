interface NavbarProps {
    children: React.ReactNode;
    className?: string;
}
export default function SidebarNav({ children, className = '' }: NavbarProps) {
    return (
        <nav
            id='article-menu'
            role='navigation'
            aria-label='Article menu'
            className={`h-full ${className}`}
        >
            {children}
        </nav>
    );
}
