import { useContext } from 'react';
import NavbarItem from '#/src/components/Layout/Navbar/NabbarItem';
import NavbarSection from '#/src/components/Layout/Navbar/NavbarSection';
import NavbarSeparator from '#/src/components/Layout/Navbar/NavbarSeparator';
import CounterChip from '#/src/components/shared/CounterChip';
import Navbar from '#/src/components/Layout/Navbar/Navbar';
import { MainMenuController } from '#/src/components/Layout/Layout';
import { NumberOfPostsContext } from '#/src/store/NumberOfPostsContext';

import { HiOutlineUser as WhoAmI } from 'react-icons/hi';
import { HiOutlineCode as Portfolio } from 'react-icons/hi';
import { HiOutlineMail as Contact } from 'react-icons/hi';

import { GiHighKick as PersonalPath } from 'react-icons/gi';
import { GiPencilRuler as Architecture } from 'react-icons/gi';
import { GiMeshNetwork as Algorithms } from 'react-icons/gi';
import { VscSymbolArray as Datastructures } from 'react-icons/vsc';
import { BsJournalCode as DevBlog } from 'react-icons/bs';
import { SiReact as ReactJs } from 'react-icons/si';
import { SiNextdotjs as NextJs } from 'react-icons/si';
import { SiTypescript as TypeScript } from 'react-icons/si';
import { SiTailwindcss as TailwindCSS } from 'react-icons/si';
import { GiShrug as Other } from 'react-icons/gi';

import { VscTools as Tools } from 'react-icons/vsc';
import { GiJumpAcross as Practice } from 'react-icons/gi';
import { GiStickFrame as Frameworks } from 'react-icons/gi';

import { GiPathDistance as Roadmap } from 'react-icons/gi';
import { HiScissors as Snippets } from 'react-icons/hi';

import { GiDesk as DeskSetup } from 'react-icons/gi';
import { GiBookshelf as Books } from 'react-icons/gi';
import { MdOutlineKeyboardAlt as Programming } from 'react-icons/md';
import { FaAppStore as Software } from 'react-icons/fa';
import Link from 'next/link';

interface MainNavProps {
    mainMenuController: MainMenuController;
}

export default function MainNav({ mainMenuController }: MainNavProps) {
    const numberOfPosts = useContext(NumberOfPostsContext);

    return (
        <Navbar
            className={`absolute lg:static h-full lg:h-auto bg-white z-10 w-full overflow-auto pr-4 lg:pr-0 lg:w-64 bg-primary text-sm ${
                mainMenuController.isOpen ? 'block' : 'hidden'
            } lg:block`}
        >
            <NavbarSection label='About Me'>
                <NavbarItem
                    link='/who-am-i'
                    leftIcon={<WhoAmI className='text-secondary text-lg' />}
                >
                    Who am I
                </NavbarItem>
                <NavbarItem
                    link='/portfolio'
                    leftIcon={<Portfolio className='text-secondary text-lg' />}
                >
                    Portfolio
                </NavbarItem>
                <NavbarItem
                    link='/contact'
                    leftIcon={<Contact className='text-secondary text-lg' />}
                >
                    Contact
                </NavbarItem>
            </NavbarSection>
            <NavbarSeparator />
            <NavbarSection label='Blog' displayLabel>
                <NavbarItem
                    link='/blog/devblog'
                    leftIcon={<DevBlog className='text-lg' />}
                    rightIcon={<CounterChip label={String(numberOfPosts.DevBlog)} />}
                >
                    DevBlog
                </NavbarItem>

                <NavbarItem
                    link='/blog/personal-path'
                    leftIcon={<PersonalPath className='text-lg' />}
                    rightIcon={<CounterChip label={String(numberOfPosts['Personal Path'])} />}
                >
                    Personal Path
                </NavbarItem>

                <NavbarItem
                    link='/blog/software-architecture'
                    leftIcon={<Architecture className='text-lg' />}
                    rightIcon={
                        <CounterChip label={String(numberOfPosts['Software Architecture'])} />
                    }
                >
                    Software Architecture
                </NavbarItem>

                <NavbarItem
                    link='/blog/data-structures'
                    leftIcon={<Datastructures className='text-lg' />}
                    rightIcon={<CounterChip label={String(numberOfPosts['Data Structures'])} />}
                >
                    Data Structures
                </NavbarItem>

                <NavbarItem
                    link='/blog/algorithms'
                    leftIcon={<Algorithms className='text-lg' />}
                    rightIcon={<CounterChip label={String(numberOfPosts.Algorithms)} />}
                >
                    Algorithms
                </NavbarItem>

                <NavbarItem
                    link='/blog/reactjs'
                    leftIcon={<ReactJs className='text-lg' />}
                    rightIcon={<CounterChip label={String(numberOfPosts['React.js'])} />}
                >
                    React.js
                </NavbarItem>

                <NavbarItem
                    link='/blog/nextjs'
                    leftIcon={<NextJs className='text-lg' />}
                    rightIcon={<CounterChip label={String(numberOfPosts['Next.js'])} />}
                >
                    Next.js
                </NavbarItem>

                <NavbarItem
                    link='/blog/typescript'
                    leftIcon={<TypeScript className='text-lg' />}
                    rightIcon={<CounterChip label={String(numberOfPosts.TypeScript)} />}
                >
                    TypeScript
                </NavbarItem>

                <NavbarItem
                    link='/blog/tailwindcss'
                    leftIcon={<TailwindCSS className='text-lg' />}
                    rightIcon={<CounterChip label={String(numberOfPosts.TailwindCSS)} />}
                >
                    TailwindCSS
                </NavbarItem>

                <NavbarItem
                    link='/blog/other'
                    leftIcon={<Other className='text-lg' />}
                    rightIcon={<CounterChip label={String(numberOfPosts.Other)} />}
                >
                    Other
                </NavbarItem>
            </NavbarSection>
            <NavbarSection label='Resources' displayLabel>
                <NavbarItem
                    link='/resources/libs-and-frameworks'
                    leftIcon={<Frameworks className='text-lg' />}
                >
                    Libs and Frameworks
                </NavbarItem>

                <NavbarItem link='/resources/tools' leftIcon={<Tools className='text-lg' />}>
                    Tools
                </NavbarItem>

                <NavbarItem link='/resources/practice' leftIcon={<Practice className='text-lg' />}>
                    Practice
                </NavbarItem>
            </NavbarSection>
            <NavbarSection label='Roadmap' displayLabel>
                <NavbarItem link='/roadmap/roadmap' leftIcon={<Roadmap className='text-lg' />}>
                    Roadmap
                </NavbarItem>
            </NavbarSection>
            <NavbarSection label='Snippets' displayLabel>
                <NavbarItem
                    link='/blog/snippets'
                    leftIcon={<Other className='text-lg' />}
                    rightIcon={<CounterChip label={String(numberOfPosts.Other)} />}
                >
                    Snippets
                </NavbarItem>
            </NavbarSection>
            <NavbarSection label='Stack' displayLabel>
                <NavbarItem
                    link='/stack/programming'
                    leftIcon={<Programming className='text-lg' />}
                >
                    Programming
                </NavbarItem>
                <NavbarItem link='/stack/desk-setup' leftIcon={<DeskSetup className='text-lg' />}>
                    Desk Setup
                </NavbarItem>
                <NavbarItem link='/stack/software' leftIcon={<Software className='text-lg' />}>
                    Software
                </NavbarItem>
                <NavbarItem link='/stack/books' leftIcon={<Books className='text-lg' />}>
                    Books
                </NavbarItem>
            </NavbarSection>
        </Navbar>
    );
}
