import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import colors from 'tailwindcss/colors';
import { MainMenuController } from '#/src/components/Layout/Layout';
import Button from '#/src/components/shared/ButtonDefault';

import { Fade as MenuBtn } from 'hamburger-react';
import { RiGithubFill as GitHub } from 'react-icons/ri';
import { RiMoonClearFill as Moon } from 'react-icons/ri';
import { RiSunLine as Sun } from 'react-icons/ri';
import { RiLinkedinFill as LinkedIn } from 'react-icons/ri';

interface LayoutProps {
    children: React.ReactNode;
    mainMenuController: MainMenuController;
}

export default function Header({ children, mainMenuController }: LayoutProps) {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();
    const isLightTheme = resolvedTheme === 'light';
    const toggleTheme = () => {
        const theme = isLightTheme ? 'dark' : 'light';
        setTheme(theme);
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <header className='flex items-center h-16 shadow-sm border-primary'>
            <div className='cContainer flex items-center w-full'>
                <div className='lg:hidden'>
                    {mounted && (
                        <MenuBtn
                            toggled={mainMenuController.isOpen}
                            toggle={mainMenuController.toggleIsOpen}
                            direction='right'
                            size={24}
                            label='Toggle main navigation'
                            color={isLightTheme ? colors.gray[700] : colors.white}
                        />
                    )}
                </div>
                <div className='flex items-center gap-4 grow justify-center lg:justify-start'>
                    <div>{children}</div>
                    <div>Ole Urfels</div>
                </div>
                <div className='flex gap-2'>
                    <Button
                        as='a'
                        href='https://www.linkedin.com/in/ole-urfels/'
                        newTab
                        className='w-9 h-9 px-0'
                    >
                        <LinkedIn className='w-6 h-6' />
                    </Button>
                    <Button
                        as='a'
                        href='https://github.com/vincentole/'
                        newTab
                        className='w-9 h-9 px-0'
                    >
                        <GitHub className='w-7 h-7' />
                    </Button>
                    {/* TODO: Dark theme design */}
                    {/* <Button as='button' className='w-9 h-9 px-0' onClick={toggleTheme}>
                        {mounted &&
                            (isLightTheme ? (
                                <Moon className='w-5 h-5' />
                            ) : (
                                <Sun className='w-5 h-5' />
                            ))}
                    </Button> */}
                </div>
            </div>
        </header>
    );
}
