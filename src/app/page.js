import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";


export default function Home() {
  return (
    <>
    <Header/>
    <main>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Triple Alfa</h1>
          <p>Invest Beyond the Ordinary</p>
          <p>Discover high-growth opportunities in exclusive alternative assets.</p>
        </div>
      </section>
      <section className={styles.whoWeAre}>
        <h2>Who are we?</h2>
        <p>At Triple Alfa, our mission is simple: to simplify investment opportunities and deliver exceptional value. We focus on innovative asset classes, including rare whisky casks and media funds, offering transparent and accessible financial products designed to help you achieve your investment goals.</p>
        <p>Our leadership team combines decades of experience in finance, technology, and business development. With expertise in capital raising, portfolio management, and structured investments, we leverage our deep industry knowledge to identify and curate high-quality investment opportunities. </p>
      </section>
      <section className={styles.alternativeAssets}>
        <h2>Alternative Assets</h2>
        <div className={styles.assetsContainer}>
          <div className={styles.asset}>
            <Image src="/whiskeyCask.jpg" width={340} height={272}/>
            <h3>Whisky Cask Investment</h3>
            <p>Triple Alfa, in collaboration with whisky cask managers, offers unparalleled access to the finest whisky casks in Scotland. Our team of experts, led by industry leaders with decades of experience, carefully curates each cask for maximum growth potential.</p>
            <Link href="/whiskey-cask-investment">Find out more</Link>
          </div>
          <div className={styles.asset}>
            <Image src="/media.jpeg" width={340} height={272}/>
            <h3>Media Fund Investment</h3>
            <p>Media fund investments provide a unique opportunity to tap into the explosive growth of the film, OTT, and digital media industries. Triple Alfa acts as an introducer to media funds, connecting you with their structured financing solutions for media projects, designed to offer secure, high-return investments.</p>
            <Link href="/media-fund-investment">Find out more</Link>
          </div>
        </div>
      </section>
    </main>
    <Footer/>
    </>
  );
}
