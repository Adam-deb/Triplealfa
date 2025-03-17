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
                    <div className={styles.teamMemberContainer}>
                        <div className={styles.teamMember}>
                            <div className={styles.teamMemberImage}>
                                <Image src="/cco.png" height={400} width={350}/>
                            </div>
                            <div className={styles.teamMemberInfo} id={styles.imageLeft}>
                                <h2>Samar Rege</h2>
                                <h3>Chief Commercial Officer</h3>
                                <p>Samar is an unregistered Barrister at the England and Wales Bar and a lawyer in India. With an LLM in Climate Change Litigation and International Investment Law, Samar brings experience and expertise in public law and commercial law to the organisation.</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className={styles.teamMemberContainer}>
                        <div className={styles.teamMember}>
                            <div className={styles.teamMemberInfo} id={styles.imageRight}>
                                <h2>Fahad Haris</h2>
                                <h3>Overseas Investment Manager</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada facilisis mattis. Sed at lacus non orci gravida tincidunt. Sed pulvinar pellentesque ex at bibendum. Fusce varius quis est gravida iaculis. Fusce laoreet non erat at posuere. Morbi ligula nulla, vehicula vitae nisi at, vehicula efficitur odio. Pellentesque vitae dui fermentum, malesuada sapien et, fringilla mauris.</p>
                            </div>
                            <div className={styles.teamMemberImage}>
                                <Image src="/fahad.png" height={400} width={350}/>
                            </div>
                        </div>
                    </div> */}
                    <div className={styles.teamMemberContainer}>
                        <div className={styles.teamMember}>
                            <div className={styles.teamMemberInfo} id={styles.imageRight}>
                                <h2>Poushali Majumder</h2>
                                <h3>Overseas Investment Manager</h3>
                                <p>Poushali brings a strong analytical mindset and a strategic approach to global investments. With a background in cyber security and expertise in risk assessment and compliance, she navigates complex markets to identify and optimise overseas investment opportunities while working closely with clients to achieve their investment goals.</p>
                            </div>
                            <div className={styles.teamMemberImage}>
                                <Image src="/poushali.png" height={400} width={350}/>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}