import '@components/about/about.css';

interface AboutParams {
    children: React.ReactNode,
    paragraph: string
}

export default function About({ children, paragraph }: AboutParams) {
    return (
        <section id="about-me">
            <div><img src="images/andrea.webp" /></div>
            <span>
                <h1>
                    <header>Sobre nosotros🫶</header>
                    <footer>¿Por qué elegirnos?</footer>
                </h1>
                <div className="divider"></div>
                {children}

                <p>{paragraph}</p>
            </span>
        </section>
    )
}
