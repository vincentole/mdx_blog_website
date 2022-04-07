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
            className={`rounded pointer-events-auto ${className}`}
        >
            {children}
        </nav>
    );
}
