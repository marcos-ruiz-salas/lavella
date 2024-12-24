import '@components/social/contact.css';

import SocialIcons from '@components/social/Icons';

export default function Contact() {
    return (
        <section id="contact">
            <div className="container">

                <h2>Contáctame</h2>
                <p>¿Tienes alguna pregunta o propuesta? No dudes en contactarme.</p>

                <SocialIcons />

                <form id="contact-form" action="mailto:marcosruizsalas@hotmail.com" method="POST" encType="text/plain">

                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name" name="name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Mensaje</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>

                    <button type="submit">Enviar Mensaje</button>
                </form>
            </div>
        </section>
    )
}
