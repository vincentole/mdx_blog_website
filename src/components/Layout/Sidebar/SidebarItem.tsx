interface NavbarItemProps {
    children: React.ReactNode;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export default function SidebarItem({ children, leftIcon, rightIcon }: NavbarItemProps) {
    return (
        <li
            role='menuitem'
            className='flex items-center border-l border-gray-300 hover:border-blue-400 gap-3 py-1 pl-5 rounded-r cursor-pointer transition-colors hover:bg-slate-200'
        >
            {leftIcon && <span>{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className='ml-auto mr-2'>{rightIcon}</span>}
        </li>
    );
}
