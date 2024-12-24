import '@components/about/information.css';

import SocialIcons from '@components/social/Icons';

interface InformationParams {
    children: React.ReactNode,

    announcement: string
    slogan: string,
    title: string,
}

export default function Information({ children, title, slogan, announcement }: InformationParams) {
    return (
        <section id="main">
            <section className="photos">
                <div><img src="images/grid-photo-4.webp" /></div>
                <div><img src="images/grid-photo-2.jpeg" /></div>
                <div><img src="images/grid-photo-3.jpeg" /></div>
                <div><img src="images/grid-photo-1.webp" /></div>
            </section>

            <span>
                <SocialIcons />

                <h1>{title}</h1>

                {children}

                <p>{slogan}</p>
                <p>{announcement}</p>
            </span>
        </section>
    )
}
