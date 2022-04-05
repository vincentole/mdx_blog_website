import Sidebar from '#/src/components/Layout/Sidebar/Sidebar';
import SidebarItem from '#/src/components/Layout/Sidebar/SidebarItem';
import SidebarNav from '#/src/components/Layout/Sidebar/SidebarNav';
import SidebarSection from '#/src/components/Layout/Sidebar/SidebarSection';
import { AiOutlineUnorderedList as TocIcon } from 'react-icons/ai';
import SidebarItemSub from './Sidebar/SidebarItemSub';

interface SidebarTocProps {
    className?: string;
}
export default function SidebarToc({ className = '' }: SidebarTocProps) {
    return (
        <Sidebar className={`w-52 text-gray-800 text-sm `}>
            <div className='flex items-center gap-2 py-4 '>
                <TocIcon className='w-5 h-5 ' />
                TOC
            </div>
            <SidebarNav>
                <SidebarSection label='Test' displayLabel>
                    <SidebarItem>Item 1</SidebarItem>
                    <SidebarItemSub>Item Sub 1</SidebarItemSub>
                    <SidebarItemSub>Item Sub 1</SidebarItemSub>
                    <SidebarItem>Item 1</SidebarItem>
                    <SidebarItemSub>Item Sub 1</SidebarItemSub>
                    <SidebarItemSub>Item Sub 1</SidebarItemSub>
                    <SidebarItem>Item 1</SidebarItem>
                    <SidebarItem>Item 1</SidebarItem>
                </SidebarSection>
                <SidebarSection label='Test 2' displayLabel>
                    <SidebarItem>Item 1</SidebarItem>
                    <SidebarItem>Item 2</SidebarItem>
                    <SidebarItem>Item 3</SidebarItem>
                </SidebarSection>
            </SidebarNav>
        </Sidebar>
    );
}
