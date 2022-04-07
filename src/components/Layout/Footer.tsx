import FooterLink from '../shared/FooterLink';

interface FooterProps {}
export default function Footer() {
    return (
        <footer className='px-2 pt-2'>
            <div className='flex gap-4 justify-end'>
                <FooterLink href='/legal/legal-notice'>
                    Legal Notice / Terms and Conditions of Use
                </FooterLink>
                <FooterLink href='/legal/privacy-policy'>Privacy Policy</FooterLink>
            </div>
        </footer>
    );
}
