import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function WhiskeyInvestment() {
    return (
        <>
            <Header />
            <main>
                <section className={styles.hero}>
                    <div className={styles.heroText}>
                        <h1>Media Fund Investing: Capitalizing on the Entertainment Boom</h1>
                    </div>
                </section>

                <section className={styles.flexContainer}>
                    <div className={styles.textContent}>
                        <div className={styles.benefits}>
                            <h2 className={styles.subtitle}>Why Invest in Media Funds?</h2>
                            <p className={styles.description}>
                                Media fund investing offers a dynamic opportunity for investors looking to capitalize on the rapidly evolving entertainment landscape. 
                                As the demand for diverse content continues to grow, media funds provide a unique avenue for substantial returns.
                            </p>
                            <ul className={styles.benefitsList}>
                                <li><strong>High Growth Potential:</strong> The media and entertainment industry is experiencing unprecedented growth.</li>
                                <li><strong>Diverse Portfolio:</strong> Media funds typically invest in a variety of projects, helping mitigate risk.</li>
                                <li><strong>Structured Financing:</strong> Media funds often employ structured financing solutions to reduce risks.</li>
                                <li><strong>Access to Expertise:</strong> Partnering with established media fund managers provides access to industry expertise.</li>
                                <li><strong>Alignment with Trends:</strong> Investing in media funds presents an opportunity to capitalize on emerging trends.</li>
                            </ul>
                        </div>
                        <div className={styles.process}>
                            <h2 className={styles.subtitle}>How It Works</h2>
                            <p className={styles.description}>
                                Investing in media funds involves pooling capital with other investors to finance a portfolio of media projects. 
                                Here&apos;s how the process typically unfolds:
                            </p>
                            <ol className={styles.investmentSteps}>
                                <li><strong>Capital Commitment:</strong> Investors commit capital to the fund, which is used to finance various media projects.</li>
                                <li><strong>Project Selection:</strong> Experienced fund managers evaluate potential projects.</li>
                                <li><strong>Revenue Generation:</strong> Media funds generate income through various streams, including box office sales and streaming rights.</li>
                            </ol>
                        </div>
                        <div className={styles.future}>
                            <h2 className={styles.subtitle}>The Future of Media Fund Investing</h2>
                            <p className={styles.description}>
                                The media landscape is evolving rapidly, with new distribution channels and content formats emerging. 
                                As the appetite for quality content grows, media fund investing presents an opportunity to capitalize on this momentum.
                            </p>
                            <p className={styles.description}>
                            Triple Alfa acts as an introducer to NV Capital, connecting you with their structured financing solutions for media projects.
                            </p>
                        </div>
                    </div>
                    <aside className={styles.imagesSection}>
                        <div className={styles.imagesContainer}>
                            {/* Add Images */}
                        </div>
                    </aside>
                </section>
            </main>
            <Footer />
        </>
    );
}