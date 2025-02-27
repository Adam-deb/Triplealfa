import styles from "./Footer.module.css";

export default function Header() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerTextContainer}>
                <h2>&copy; {new Date().getFullYear()} TripleAlfa. All rights reserved.</h2>
                <p>TripleAlfa is acting solely as an introductory partner and does not provide any form of financial, legal, or investment advice.</p>
                <p>This introduction does not constitute an offer to sell or a solicitation of an offer to buy any securities or financial products. Any investment decisions should be based on independent due diligence and professional advice from licensed financial advisors. All regulatory requirements, including compliance with relevant laws and regulations, are the responsibility of the recipient and the respective fund managers.</p>
                <p>Triplealfa disclaim any liability for losses, damages, or costs arising from reliance on this introduction or subsequent actions taken by the recipient.</p>
            </div>
        </footer>
    )
}