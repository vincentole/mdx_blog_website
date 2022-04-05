import { Dispatch, SetStateAction, useState } from 'react';
import AppShell from '#/src/components/Layout/AppShell/AppShell';
import Logo from '#/src/components/shared/Logo';
import Header from '#/src/components/Layout/Header';
import NavMain from '#/src/components/Layout/NavMain';
import SidebarToc from '#/src/components/Layout/SidebarToc';

export interface MainMenuController {
    isOpen: boolean;
    toggleIsOpen: Dispatch<SetStateAction<boolean>>;
}

interface LayoutProps {
    children: React.ReactNode;
    noSidebar?: boolean;
}

export default function Layout({ children, noSidebar }: LayoutProps) {
    const [isOpenMainMenu, setIsOpenMainMenu] = useState(false);
    const mainMenuController = {
        isOpen: isOpenMainMenu,
        toggleIsOpen: () => setIsOpenMainMenu((prev) => !prev),
    };

    return (
        <AppShell
            navbarBreakpoint='sm'
            asideBreakpoint='sm'
            header={
                <Header mainMenuController={mainMenuController}>
                    <Logo />
                </Header>
            }
            navbar={<NavMain mainMenuController={mainMenuController} />}
            aside={noSidebar ? undefined : <SidebarToc />}
            footer={<footer>Footer</footer>}
        >
            {children}
        </AppShell>
    );
}
