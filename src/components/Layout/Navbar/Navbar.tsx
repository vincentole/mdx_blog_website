interface NavbarProps {
    children: React.ReactNode;
    className?: string;
}
export default function Navbar({ children, className = '' }: NavbarProps) {
    return (
        <nav
            id='main-menu'
            role='navigation'
            aria-label='Main menu'
            className={`h-full border-r border-gray-300 ${className}`}
        >
            {children}
        </nav>
    );
}
