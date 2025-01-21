import Image from "next/image";
import styles from "./page.module.scss";
import Header from "@/components/widgets/header/Header";

export default function Home() {
    return (
        <main className={styles.main}>
            <Header />

            <section className={styles.hero}>
                <h1 className={styles.hero__title}>
                    Найди крепость Края в пару кликов
                </h1>

                <div className={styles.hero__image}>
                    <Image
                        src="/Ender_Dragon.webp"
                        alt="Ender Dragon"
                        layout="responsive"
                        width={564}
                        height={488}
                    />
                </div>
            </section>
        </main>
    );
}
