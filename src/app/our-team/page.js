import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function OurTeam() {
    return (
        <>
            <Header />
            <main>
                <section className={styles.hero}>
                    <div className={styles.heroText}>
                        <h1> Meet Our Team</h1>
                    </div>
                </section>
                <section className={styles.ourTeam}>
                    <div className={styles.teamMemberContainer}>
                        <div className={styles.teamMember}>
                            <div className={styles.teamMemberImage} >
                                <Image src="/ceo.png" height={400} width={350}/>
                            </div>
                            <div className={styles.teamMemberInfo} id={styles.imageLeft}>
                                <h2>Sanika Pradhan</h2>
                                <h3>Chief Executive Officer</h3>
                                <p>Sanika is a strategist specialising in data-driven transformation and public policy. With a background in economics, finance, and international public policy from UCL and the University of London, she brings a multidisciplinary approach to developing innovative, streamlined solutions that simplify complex processes and empower global investors.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.teamMemberContainer}>
                        <div className={styles.teamMember}>
                            <div className={styles.teamMemberInfo} id={styles.imageRight}>
                                <h2>Adam Debski</h2>
                                <h3>Chief Technical Officer</h3>
                                <p>Adam brings a blend of technology leadership and strategic expertise to Triple Alfa. With experience leading product development and enhancing customer-focused solutions, he has a proven track record of driving innovation and collaboration. His background in financial analysis and technology equips him to deliver impactful solutions, redefining alternative investments with a forward-thinking approach.</p>
                            </div>
                            <div className={styles.teamMemberImage} id={styles.ctoImage}>
                                <Image src="/cto.png" height={400} width={350}/>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}