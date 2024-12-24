import '@components/social/icons.css';

import SocialMedia from '@components/social/SocialMedia';

export default function SocialIcons() {
    return (
        <section className="social-icons">
            <SocialMedia
                href="https://wa.me/34654171031"
                icon="fa-whatsapp"
                label="WhatsApp"
            />

            <SocialMedia
                href="https://www.instagram.com/lavella_details/"
                icon="fa-instagram"
                label="Instagram"
            />

            <SocialMedia
                href="https://www.facebook.com/profile.php?id=100084434105600"
                icon="fa-facebook-f"
                label="Facebook"
            />
        </section>
    )
}
