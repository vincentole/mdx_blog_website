import Link from 'next/link';

interface ButtonProps {
    ariaLabel?: string;
    ariaExpanded?: boolean;
    as: 'button';
    children: React.ReactNode;
    variant?: 'outlined' | 'filled';
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface ButtonLinkProps {
    ariaLabel?: string;
    as: 'a';
    children: React.ReactNode;
    variant?: 'outlined' | 'filled';
    className?: string;
    href: string;
    newTab?: boolean;
}

export default function ButtonDefault(props: ButtonProps | ButtonLinkProps) {
    const className = props.className || '';

    const variants = {
        outlined: 'btnOutlined',
        filled: 'btnFilled',
    };

    if (props.as === 'button') {
        const variant = props.variant || 'outlined';

        return (
            <button
                aria-expanded={props.ariaExpanded}
                aria-label={props.ariaLabel}
                type='button'
                className={`btnBase ${variants[variant]} ${className}`}
                onClick={props.onClick}
            >
                {props.children}
            </button>
        );
    } else {
        const variant = props.variant || 'outlined';

        return (
            <Link href={props.href}>
                <a
                    aria-label={props.ariaLabel}
                    target={props.newTab ? '_blank' : undefined}
                    className={`btnBase ${variants[variant]} ${className}`}
                >
                    {props.children}
                </a>
            </Link>
        );
    }
}
