import '@components/social/socialMedia.css';

interface SocialMediaParams {
    href: string,
    label: string,
    icon: string
}

export default function SocialMedia({ href, label, icon }: SocialMediaParams) {
    const iconClasses = `fab ${icon}`

    return (
        <a
            href={href}
            className='social-icon'
            aria-label={label}
            target='blank'
        >
            <i className={iconClasses}></i>
        </a>
    )
}
