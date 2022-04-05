import { AiFillCode as LogoIcon } from 'react-icons/ai';

export default function Logo() {
    return (
        <div className={`flex items-center justify-center `}>
            <LogoIcon className='w-8 h-8' aria-label='Logo' />
        </div>
    );
}
