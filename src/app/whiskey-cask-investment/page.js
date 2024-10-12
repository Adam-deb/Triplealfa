import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Link from "next/link";


export default function WhiskeyInvestment() {
    return(
        <>
            <Header/>
            <section className={styles.hero}>
                <div className={styles.heroText}>
                    <h1></h1>
                </div>
            </section>

            <section className={styles.overview}>
                <h2 className={styles.title}>Whisky Cask Investment: A Unique Opportunity</h2>
                <p className={styles.description}>
                    Whisky cask investment represents an innovative and lucrative opportunity for discerning investors seeking diversification in their portfolios. 
                    As the global demand for high-quality, rare Scotch whisky continues to rise, investing in whisky casks has emerged as a compelling asset class with significant growth potential.
                </p>
            </section>

            <section className={styles.benefits}>
                <h3 className={styles.subtitle}>Why Invest in Whisky Casks?</h3>
                <ul className={styles.benefitsList}>
                    <li><strong>Tangible Asset:</strong> Whisky casks are physical, tangible assets that provide a unique alternative to traditional investment vehicles.</li>
                    <li><strong>Increasing Value:</strong> The value of rare and collectible whiskies has historically shown impressive growth.</li>
                    <li><strong>Tax Advantages:</strong> Depending on your location and tax laws, whisky cask investments may offer attractive tax benefits.</li>
                    <li><strong>Diversification:</strong> Adding whisky casks to your investment portfolio can enhance diversification.</li>
                    <li><strong>Passion Meets Profit:</strong> Engaging in whisky cask investment allows you to explore the world of fine spirits.</li>
                </ul>
            </section>

            <section className={styles.process}>
                <h3 className={styles.subtitle}>How It Works</h3>
                <p className={styles.description}>
                    When you invest in whisky casks, you are essentially purchasing the contents of a cask that will mature over time. 
                    Here’s how the process typically unfolds:
                </p>
                <ol className={styles.investmentSteps}>
                    <li><strong>Acquisition:</strong> You select a cask based on its potential value, age, and brand reputation.</li>
                    <li><strong>Maturation:</strong> As the whisky matures, its flavor profile develops, and its value appreciates.</li>
                    <li><strong>Exit Strategy:</strong> Once matured, the whisky can be bottled and sold, or the cask itself can be sold to collectors or investors at a premium price.</li>
                </ol>
            </section>

            <section className={styles.future}>
                <h3 className={styles.subtitle}>The Future of Whisky Cask Investment</h3>
                <p className={styles.description}>
                    The whisky market is evolving, with increasing interest from investors and collectors alike. 
                    As the appreciation of rare whiskies becomes more mainstream, investing in whisky casks offers an opportunity to be part of this exciting landscape.
                </p>
                <p className={styles.description}>
                    At Triple Alfa, we partner with Speyside Capital to provide access to exclusive cask investment opportunities, ensuring that our clients can confidently navigate this unique market.
                </p>
            </section>

        </>
            )
        }
