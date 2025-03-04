import styles from "./page.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function GlobalInvestors() {
    return (
        <>
            <Header />
            <main>
                <section className={styles.hero}>
                    <div className={styles.heroText}>
                        <h1>Contact Us</h1>
                    </div>
                </section>
                <section className={styles.ContactForm}>
                    <ContactForm />
                </section>
            </main>
            <Footer />
     </>
    )
}
