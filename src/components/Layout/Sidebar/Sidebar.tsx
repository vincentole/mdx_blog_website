import { useState } from 'react';
import ButtonDefault from '#/src/components/shared/ButtonDefault';
import { HiOutlineChevronDoubleLeft as OpenIcon } from 'react-icons/hi';
import { HiOutlineChevronDoubleRight as CloseIcon } from 'react-icons/hi';

interface NavbarProps {
    children: React.ReactNode;
    className?: string;
}
export default function Sidebar({ children, className = '' }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(true);

    const sidebarController = {
        isOpen: isOpen,
        toggleIsOpen: () => setIsOpen((prev) => !prev),
    };

    return (
        <aside
            className={`relative ${className} ${
                sidebarController.isOpen ? '' : 'translate-x-full'
            } lg:translate-x-0`}
        >
            <ButtonDefault
                ariaLabel='Visually toggle sidebar'
                as='button'
                onClick={sidebarController.toggleIsOpen}
                className={`absolute top-4 ${
                    sidebarController.isOpen ? 'right-0 translate-x-1/4' : 'left-0 -translate-x-3/4'
                } lg:hidden `}
            >
                {isOpen ? <CloseIcon /> : <OpenIcon />}
            </ButtonDefault>
            {children}
        </aside>
    );
}
