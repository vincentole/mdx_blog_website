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
            className={`w-screen pr-4 lg:pr-0 lg:w-64 text-gray-800 text-sm ${
                mainMenuController.isOpen ? 'block' : 'hidden'
            } lg:block`}
        >
            <NavbarSection label='About Me'>
                <NavbarItem leftIcon={<WhoAmI className='text-gray-500 text-lg' />}>
                    Who am I
                </NavbarItem>
                <NavbarItem leftIcon={<Portfolio className='text-gray-500 text-lg' />}>
                    Portfolio
                </NavbarItem>
                <NavbarItem leftIcon={<Contact className='text-gray-500 text-lg' />}>
                    Contact
                </NavbarItem>
            </NavbarSection>
            <NavbarSeparator />
            <NavbarSection label='Blog' displayLabel>
                <Link href='/blog/devblog'>
                    <a>
                        <NavbarItem
                            leftIcon={<DevBlog className='text-lg' />}
                            rightIcon={<CounterChip label={String(numberOfPosts.DevBlog)} />}
                        >
                            DevBlog
                        </NavbarItem>
                    </a>
                </Link>
                <Link href='/blog/personal-path'>
                    <a>
                        <NavbarItem
                            leftIcon={<PersonalPath className='text-lg' />}
                            rightIcon={
                                <CounterChip label={String(numberOfPosts['Personal Path'])} />
                            }
                        >
                            Personal Path
                        </NavbarItem>
                    </a>
                </Link>
                <Link href='/blog/software-architecture'>
                    <a>
                        <NavbarItem
                            leftIcon={<Architecture className='text-lg' />}
                            rightIcon={
                                <CounterChip
                                    label={String(numberOfPosts['Software Architecture'])}
                                />
                            }
                        >
                            Software Architecture
                        </NavbarItem>
                    </a>
                </Link>
                <Link href='/blog/data-structures'>
                    <a>
                        <NavbarItem
                            leftIcon={<Datastructures className='text-lg' />}
                            rightIcon={
                                <CounterChip label={String(numberOfPosts['Data Structures'])} />
                            }
                        >
                            Data Structures
                        </NavbarItem>
                    </a>
                </Link>
                <Link href='/blog/algorithms'>
                    <a>
                        <NavbarItem
                            leftIcon={<Algorithms className='text-lg' />}
                            rightIcon={<CounterChip label={String(numberOfPosts.Algorithms)} />}
                        >
                            Algorithms
                        </NavbarItem>
                    </a>
                </Link>
                <Link href='/blog/reactjs'>
                    <a>
                        <NavbarItem
                            leftIcon={<ReactJs className='text-lg' />}
                            rightIcon={<CounterChip label={String(numberOfPosts['React.js'])} />}
                        >
                            React.js
                        </NavbarItem>
                    </a>
                </Link>
                <Link href='/blog/nextjs'>
                    <a>
                        <NavbarItem
                            leftIcon={<NextJs className='text-lg' />}
                            rightIcon={<CounterChip label={String(numberOfPosts['Next.js'])} />}
                        >
                            Next.js
                        </NavbarItem>
                    </a>
                </Link>
                <Link href='/blog/typescript'>
                    <a>
                        <NavbarItem
                            leftIcon={<TypeScript className='text-lg' />}
                            rightIcon={<CounterChip label={String(numberOfPosts.TypeScript)} />}
                        >
                            TypeScript
                        </NavbarItem>
                    </a>
                </Link>
                <Link href='/blog/tailwindcss'>
                    <a>
                        <NavbarItem
                            leftIcon={<TailwindCSS className='text-lg' />}
                            rightIcon={<CounterChip label={String(numberOfPosts.TailwindCSS)} />}
                        >
                            TailwindCSS
                        </NavbarItem>
                    </a>
                </Link>
                <Link href='/blog/other'>
                    <a>
                        <NavbarItem
                            leftIcon={<Other className='text-lg' />}
                            rightIcon={<CounterChip label={String(numberOfPosts.Other)} />}
                        >
                            Other
                        </NavbarItem>
                    </a>
                </Link>
            </NavbarSection>
            <NavbarSection label='Resources' displayLabel>
                <NavbarItem leftIcon={<Frameworks className='text-lg' />}>
                    Libs and Frameworks
                </NavbarItem>
                <NavbarItem leftIcon={<Tools className='text-lg' />}>Tools</NavbarItem>
                <NavbarItem leftIcon={<Practice className='text-lg' />}>Practice</NavbarItem>
            </NavbarSection>
            <NavbarSection label='Roadmap' displayLabel>
                <NavbarItem leftIcon={<Roadmap className='text-lg' />}>Roadmap</NavbarItem>
            </NavbarSection>
            <NavbarSection label='Snippets' displayLabel>
                <Link href='/blog/snippets'>
                    <a>
                        <NavbarItem
                            leftIcon={<Other className='text-lg' />}
                            rightIcon={<CounterChip label={String(numberOfPosts.Other)} />}
                        >
                            Snippets
                        </NavbarItem>
                    </a>
                </Link>
            </NavbarSection>
            <NavbarSection label='Stack' displayLabel>
                <NavbarItem leftIcon={<Programming className='text-lg' />}>Programming</NavbarItem>
                <NavbarItem leftIcon={<DeskSetup className='text-lg' />}>Desk Setup</NavbarItem>
                <NavbarItem leftIcon={<Software className='text-lg' />}>Software</NavbarItem>
                <NavbarItem leftIcon={<Books className='text-lg' />}>Books</NavbarItem>
            </NavbarSection>
        </Navbar>
    );
}
