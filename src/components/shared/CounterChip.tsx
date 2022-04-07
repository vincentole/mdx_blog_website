interface CounterChipProps {
    label: string;
}

export default function CounterChip({ label }: CounterChipProps) {
    return (
        <span className='w-5 h-5 rounded-full flex items-center justify-center bg-text-color-primary font-bold text-xs'>
            {label}
        </span>
    );
}
