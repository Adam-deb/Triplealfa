"use client"

import styles from "./page.module.css";
import Header from "@/components/Header3";
import ElisyanDownloadModal from "@/components/ElisyanDownloadModal";
import GembaDownloadModal from "@/components/GembaDownloadModal";
import CustomCarousel from "@/components/ContentCarousel";
import Team from "@/components/Team";
import ContactForm from "@/components/ContactForm";
import Footer2 from "@/components/Footer2"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


export default function Test(){
    const [modalOpen, setModalOpen] = useState(false);
    const [downloadUrl, setDownloadUrl] = useState("");
    const [bankModalOpen, setBankModalOpen] = useState(false);

    const handleElisyanClick = (url) => {
        setDownloadUrl(url);
        setModalOpen(true);
    };

    const handleGembaClick = (url) => {
        setDownloadUrl(url);
        setBankModalOpen(true);
    };

    

    return(
        <>
        <div className={styles.page}>
        <Header/>
        <section className={styles.hero}>
            <div className={styles.heroContainer}>
                <div className={styles.heroTextContainer}>
                    <h1>Invest Beyond the <span className={styles.titleAlternateText}>Ordinary</span></h1>
                </div>
                <div className={styles.propositionContainer}>
                <div className={styles.propositionCard}>
                    <Image src="/speysideLogo.png" height={60} width={150} className={styles.propositionCardIcon}/>
                    <h3 className={styles.propositionCardHeading}>Scotch Whisky Asset Marketplace</h3>
                    <p className={styles.propositionCardDescription}>Discover unique investment opportunities beyond traditional markets. A curated marketplace offers access to high-performing assets.</p>
                    <Link href="https://portal.speysidecapital.com/" target="blank" className={styles.propositionCardCTA}>
                        Explore Marketplace
                    </Link>
                </div>
                <div className={styles.propositionCard}>
                    <Image src="/tripleAlfaLogoOnly.png" height={60} width={60} className={styles.propositionCardIcon}/>
                    <h3 className={styles.propositionCardHeading}>Open a UK bank account</h3>
                    <p className={styles.propositionCardDescription}>
                        Simplify your international investments with a fully compliant UK bank account.  
                        Choose between a personal or corporate account here.
                    </p>
                    <div className={styles.storeButtonsContainer}>
                        <Link className={styles.propositionCardCTA} href="https://banking.triplealfa.com/onboarding/personal" target="_blank">
                            Personal Account
                        </Link>
                        <Link className={styles.propositionCardCTA} href="https://banking.triplealfa.com/onboarding/corporate" target="_blank">
                            Corporate Account
                        </Link>
                    </div>
                        <GembaDownloadModal
                            isOpen={bankModalOpen}
                            onClose={() => setBankModalOpen(false)}
                            downloadUrl={downloadUrl}
                        />
                 
                </div>
                <div className={styles.propositionCard}>
                    <Image src="/elisyanLogo.png" height={60} width={60} className={styles.propositionCardIcon}/>
                    <h3 className={styles.propositionCardHeading}>Wealth Management App</h3>
                    <p className={styles.propositionCardDescription}>Monitor your investments, track performance, and access exclusive insights all in one place. An app which puts you in control of your portfolio, anytime and anywhere.</p>
                    <div className={styles.storeButtonsContainer}>   
                        <button className={styles.storeButton} onClick={() => handleElisyanClick("https://apps.apple.com/us/app/my-private-office/id6504410156")}>
                            <Image height={40} width={135} src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" />
                        </button>
                        <button className={styles.storeButton} onClick={() => handleElisyanClick("https://play.google.com/store/apps/details?id=com.elisyanwealth")}>
                            <Image height={40} width={135} src="/GetItOnGooglePlay_Badge_Web_color_English.png" />
                        </button>
                    </div>

                        <ElisyanDownloadModal
                            isOpen={modalOpen}
                            onClose={() => setModalOpen(false)}
                            downloadUrl={downloadUrl}
                        />
                </div>
                </div>
            </div>
        </section>
        {/* <section className={styles.propositionCarousel}>
            <CustomCarousel/>
        </section> */}
        <section className={styles.whyInvest}>
            <div className={styles.whyInvestContainer}>
                <div className={styles.whyInvestHeading}>
                    <h2>Why invest in the UK?</h2>
                </div>
                <div className={styles.whyInvestTextContent}>
                    <div className={styles.whyInvestContentBlock}>
                        <h3>Hedge Against Currency Depreciation</h3>
                        <p>Safeguard your wealth from local currency volatility by holding assets in stronger, more stable currencies.</p>
                    </div>
                    <div className={styles.whyInvestContentBlock}>
                        <h3>Tax Efficiency</h3>
                        <p>Benefit from zero capital gains tax on Whisky Casks in the UK, enhancing overall returns.</p>
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
        <section className={styles.TeamSection}>
            <h2>Meet Our Team</h2>
            <Team/>
        </section>
        <section id="contact-us" className={styles.contactForm}>
            <div className={styles.contactFormText}>
                <h2>Ready to explore premium alternative investments?</h2>
                <p>Whether you&apos;re just getting started or looking to expand your portfolio, our team is here to help.</p>
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