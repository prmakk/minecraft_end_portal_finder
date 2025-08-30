import Image from "next/image";
import styles from "./page.module.scss";
import Header from "@/components/widgets/header/Header";
import Calculator from "@/components/widgets/calculator/Calculator";
import Link from "next/link";

export default function Home() {
    return (
        <main className={styles.main}>
            <Header />

            <section className={styles.hero} id="top">
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

            <section className={styles.calculator} id="calculator">
                <Calculator />
            </section>

            <section className={styles.tutorial} id="tutorial">
                <h2 className={styles.tutorial__title}>Инструкция</h2>
                <hr />

                <div className={styles.tutorial__block}>
                    <div className={styles.tutorial__block_info}>
                        <h3>Шаг 1</h3>
                        <div className={styles.image}>
                            <Image
                                src="/step1.jpg"
                                alt="tutorial_image"
                                width={1085}
                                height={674}
                                layout="responsive"
                            />
                        </div>
                        <p className={styles.subtitle}>
                            Первый бросок можно совершить из любой точки мира.
                            Для начала нажмите F3, чтобы увидеть координаты.
                            Бросьте Эндер-глаз и наведите прицел на него.
                            Запомните координаты X, Z и угол наклона (лучше
                            сделайте скриншот). Введите полученные данные в поля
                            для первого броска.
                        </p>
                    </div>

                    <div className={styles.char__image}>
                        <Image
                            src="/enderman.png"
                            alt="enderman"
                            width={1085}
                            height={674}
                            layout="responsive"
                        />
                    </div>
                </div>

                <div className={styles.tutorial__block}>
                    <div className={styles.tutorial__block_info}>
                        <h3>Шаг 2</h3>
                        <div className={styles.image}>
                            <Image
                                src="/step2.jpg"
                                alt="tutorial_image"
                                width={1085}
                                height={674}
                                layout="responsive"
                            />
                        </div>
                        <p className={styles.subtitle}>
                            Для второго броска отойдите в сторону на 350-500
                            блоков и повторите действия первого шага. Введите
                            полученные координаты второго броска и получите
                            месторасположение крепости Энда.
                        </p>
                    </div>

                    <div className={styles.char__image}>
                        <Image
                            src="/steve.png"
                            alt="steve"
                            width={1085}
                            height={674}
                            layout="responsive"
                        />
                    </div>
                </div>

                <div className={styles.tutorial__block}>
                    <div className={styles.tutorial__block_info}>
                        <h3>Шаг 3</h3>
                        <div className={styles.image}>
                            <Image
                                src="/step3.png"
                                alt="tutorial_image"
                                width={1085}
                                height={674}
                                layout="responsive"
                            />
                        </div>
                        <p className={styles.subtitle}>
                            Приходим на полученные координаты, аккуратно копаем
                            вниз и находим портал в Энд. Радуемся и ВПЕРЁД
                            убивать дракона!
                        </p>
                    </div>

                    <div className={styles.char__image}>
                        <Image
                            src="/steve_warrior.png"
                            alt="steve"
                            width={1085}
                            height={674}
                            layout="responsive"
                        />
                    </div>
                </div>
            </section>

            <footer className={styles.footer}>
                <Link href="https://x.com/prmakk" target="_blank">
                    Разработчик
                </Link>
            </footer>
        </main>
    );
}
