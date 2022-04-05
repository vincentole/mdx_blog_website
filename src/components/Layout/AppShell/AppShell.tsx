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
        <div className='min-h-screen flex flex-col'>
            <div>{header}</div>
            <div className='flex grow'>
                <div>{navbar}</div>

                <main className='grow p-4'>{children}</main>
                {aside && <div>{aside}</div>}
            </div>
            <div>{footer}</div>
        </div>
    );
}
