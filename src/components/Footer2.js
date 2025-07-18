import styles from "./Footer2.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerMain}>
                <div className={styles.footerLogo}>
                    <Image src='/Triple_Alfa_Logo_WithText.png' height={60} width={140}/>
                    <div className={styles.socialMediaIcons}>
                        <a href="https://www.linkedin.com/company/triple-alfa/">
                            <img src="/icons/linkedIn-white.png" alt="LinkedIn"/>
                        </a>
                        <a href="https://www.instagram.com/triplealfa_uk/">
                            <img src="/icons/instagram-white.png" alt="Instagram"/>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61573655012123">
                            <img src="/icons/facebook-white.png" alt="Facebook"/>
                        </a>
                        <a href="https://x.com/triplealfa_uk">
                            <img src="/icons/X-white.png" alt="Twitter"/>
                        </a>
                    </div>
                </div>
                {/* <div className={styles.links}>
                    <Link href='/'>Home</Link>
                    <Link href='/contact-us'>Contact Us</Link>
                    <Link href='/our-team'>Our Team</Link>
                    <Link href='/indian-investors'>Indian Investors</Link>
                    <Link href='/global-investors'>Global Investors</Link>
                </div> */}
            </div>

            <div className={styles.disclaimers}>
                <p>TripleAlfa is acting solely as an introductory partner and does not provide any form of financial, legal, or investment advice.</p>
                <p>This introduction does not constitute an offer to sell or a solicitation of an offer to buy any securities or financial products. Any investment decisions should be based on independent due diligence and professional advice from licensed financial advisors. All regulatory requirements, including compliance with relevant laws and regulations, are the responsibility of the recipient and the respective fund managers.</p>
                <p>Triplealfa disclaim any liability for losses, damages, or costs arising from reliance on this introduction or subsequent actions taken by the recipient.</p>
                <h2>&copy; {new Date().getFullYear()} TripleAlfa. All rights reserved.</h2>
            </div>
        </footer>
    )
}