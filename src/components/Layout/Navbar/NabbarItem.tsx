interface NavbarItemProps {
    children: React.ReactNode;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export default function NavbarItem({ children, leftIcon, rightIcon }: NavbarItemProps) {
    return (
        <li
            role='menuitem'
            className='flex items-center gap-3 py-2 pl-2 rounded-l cursor-pointer transition-colors hover:bg-slate-200'
        >
            {leftIcon && <span>{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className='ml-auto mr-2'>{rightIcon}</span>}
        </li>
    );
}
