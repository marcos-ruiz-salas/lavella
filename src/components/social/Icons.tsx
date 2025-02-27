
import InstagramIcon from '@/icons/InstagramIcon';
import TiktokIcon from '@/icons/TiktokIcon';
import WhatsappIcon from '@/icons/WhatsappIcon';

import '@components/social/icons.css';

import SocialMedia from '@components/social/SocialMedia';

export default function SocialIcons() {
    return (
        <section className="social-icons">
            <SocialMedia
                href="https://wa.me/34654171031"
                label="WhatsApp"
            >
                <WhatsappIcon />
            </SocialMedia>

            <SocialMedia
                href="https://www.instagram.com/lavella_details/"
                label="Instagram"
            >
                <InstagramIcon />
            </SocialMedia>

            <SocialMedia
                href="https://www.tiktok.com/@lavella_details?lang=es"
                label="TikTok"
            >
                <TiktokIcon />
            </SocialMedia>
        </section>
    )
}
