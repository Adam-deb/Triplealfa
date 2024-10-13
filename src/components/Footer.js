import styles from "./Footer.module.css";

export default function Header() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerTextContainer}>
                <h2>&copy; {new Date().getFullYear()} TripleAlfa. All rights reserved.</h2>
                <p>TripleAlfa is acting solely as an introductory partner and does not provide any form of financial, legal, or investment advice. NV Capital is a Category 2 Fund, and any discussions, decisions, or investments related to it must be conducted directly with the Fund Manager, Vivek Menon.</p>
                <p>Speyside Capital, Scotland’s Whisky Asset Manager, specializes in bringing whisky investment opportunities to clients globally by leveraging its Scottish roots to provide access to exclusive casks of Scotch Whisky. However, Speyside Capital also acts as an introductory partner in this context and is not responsible for providing financial advice or making investment recommendations regarding other funds or investments.</p>
                <p>This introduction does not constitute an offer to sell or a solicitation of an offer to buy any securities or financial products. Any investment decisions should be based on independent due diligence and professional advice from licensed financial advisors. All regulatory requirements, including compliance with relevant laws and regulations, are the responsibility of the recipient and the respective fund managers.</p>
                <p>Speyside Capital, NV Capital, and Triplealfa disclaim any liability for losses, damages, or costs arising from reliance on this introduction or subsequent actions taken by the recipient.</p>
            </div>
        </footer>
    )
}