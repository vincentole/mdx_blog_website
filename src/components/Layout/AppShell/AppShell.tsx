interface AppShellProps {
    navbarBreakpoint: string;
    asideBreakpoint: string;
    header: React.ReactElement;
    navbar: React.ReactElement;
    aside: React.ReactElement | undefined;
    footer: React.ReactElement;
    children: React.ReactNode;
}
export default function AppShell({ header, navbar, aside, footer, children }: AppShellProps) {
    return (
        <div className='min-h-screen flex flex-col bg-secondary text-primary'>
            <div className='bg-primary'>{header}</div>
            <div className='flex justify-center grow'>
                <div className='relative flex grow max-w-7xl'>
                    <div className='absolute lg:static inset-0 pointer-events-none lg:inset-auto lg:p-6 lg:pr-0 '>
                        {navbar}
                    </div>

                    <main className='grow p-6 flex flex-col gap-2'>
                        {children}
                        <div className='mt-auto'>{footer}</div>
                    </main>
                    {aside && <div>{aside}</div>}
                </div>
            </div>
        </div>
    );
}
