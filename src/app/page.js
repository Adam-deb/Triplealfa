import styles from "./page.module.css";
import Header from "@/components/Header3";
import ContactForm from "@/components/ContactForm";
import Footer2 from "@/components/Footer2"

import Link from "next/link";
import Image from "next/image";

export default function Test(){
    return(
        <>
        <div className={styles.page}>
        <Header/>
        <section className={styles.hero}>
            <div className={styles.heroContainer}>
                <div className={styles.heroTextContainer}>
                    <h1>Invest Beyond the <span className={styles.titleAlternateText}>Ordinary</span></h1>
                    <h2>Discover high-growth opportunities in exclusive alternative assets.</h2>
                </div>
                <div className={styles.heroCTA}>
                    <Link href="#contact-us">
                        Get in Touch
                    </Link>
                </div>
            </div>
        </section>
        <section className={styles.proposition}>
            <h2>Services we offer</h2>
            <div className={styles.propositionContainer}>
                <div className={styles.propositionCard}>
                    <Image src="/marketplaceIcon.png" height={60} width={60} className={styles.propositionCardIcon}/>
                    <h3 className={styles.propositionCardHeading}>Alternative Asset Marketplace</h3>
                    <p className={styles.propositionCardDescription}>Discover unique investment opportunities beyond traditional markets. Our curated marketplace offers access to high-performing assets like whisky casks and media funds, vetted for quality, transparency, and growth potential.</p>
                    {/* <Link href="/" className={styles.propositionCardCTA}>
                        Explore Marketplace
                    </Link> */}
                </div>
                <div className={styles.propositionCard}>
                    <Image src="/bankIcon.png" height={60} width={60} className={styles.propositionCardIcon}/>
                    <h3 className={styles.propositionCardHeading}>Open a foreign bank account</h3>
                    <p className={styles.propositionCardDescription}>Simplify international investing by opening a fully compliant foreign bank account. We guide you through the process, ensuring seamless onboarding and access to global financial services.</p>
                    {/* <Link href="/" className={styles.propositionCardCTA}>
                        Explore Bank Opening
                    </Link> */}
                </div>
                <div className={styles.propositionCard}>
                    <Image src="/wealthmanagementIcon.png" height={60} width={60} className={styles.propositionCardIcon}/>
                    <h3 className={styles.propositionCardHeading}>Wealth Management App</h3>
                    <p className={styles.propositionCardDescription}>Monitor your alternative investments, track performance, and access exclusive insights—all in one place. Our intuitive app puts you in control of your portfolio, anytime and anywhere.</p>
                    {/* <Link href="/" className={styles.propositionCardCTA}>
                        Explore Wealth Management App
                    </Link> */}
                </div>
                
            </div>
        </section>
        <section className={styles.whyInvest}>
            <div className={styles.whyInvestContainer}>
                <div className={styles.whyInvestHeading}>
                    <h2>Why invest Overseas?</h2>
                </div>
                <div className={styles.whyInvestTextContent}>
                    <div className={styles.whyInvestContentBlock}>
                        <h3>Hedge Against Currency Depreciation</h3>
                        <p>Safeguard your wealth from local currency volatility by holding assets in stronger, more stable currencies.</p>
                    </div>
                    <div className={styles.whyInvestContentBlock}>
                        <h3>Tax Efficiency</h3>
                        <p>Benefit from zero capital gains tax on select alternative assets in certain jurisdictions, enhancing overall returns.</p>
                    </div>
                    <div className={styles.whyInvestContentBlock}>
                        <h3>Global Diversification</h3>
                        <p>Access global markets and reduce risk by spreading your investments across geographies, asset classes, and economies.</p>
                    </div>
                    <div className={styles.whyInvestContentBlock}>
                        <h3>Achieve Life Goals</h3>
                        <p>Fund long-term aspirations like international education or destination weddings, by building wealth in globally liquid assets.</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="contact-us" className={styles.contactForm}>
            <div className={styles.contactFormText}>
                <h2>Ready to explore premium alternative investments?</h2>
                <p>Whether you're just getting started or looking to expand your portfolio, our team is here to help.</p>
                <p>Reach out today to discover curated opportunities and bespoke solutions tailored to your goals.</p>
            </div>
            <div className={styles.form}>                
                <ContactForm/>
            </div>
        </section>
        <Footer2/>
        </div>
        </>
    )
}