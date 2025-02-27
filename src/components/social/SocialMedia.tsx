import '@components/social/socialMedia.css';

interface SocialMediaParams {
    href: string,
    label: string,
    children: JSX.Element | JSX.Element[],
}

export default function SocialMedia({ href, label, children }: SocialMediaParams) {
    return (
        <a
            href={href}
            className='social-icon'
            aria-label={label}
            target='blank'
        >
            {children}
        </a>
    )
}
