"use client";
import { FC, useState } from "react";

import styles from "./Calculator.module.scss";
import Input from "@/components/ui/Input/Input";
import { toast } from "react-hot-toast";

const Calculator: FC = () => {
    const [x1, setX1] = useState<string>("");
    const [y1, setY1] = useState<string>("");
    const [z1, setZ1] = useState<string>("");
    const [x2, setX2] = useState<string>("");
    const [y2, setY2] = useState<string>("");
    const [z2, setZ2] = useState<string>("");
    const [answerZ, setAnswerZ] = useState<number>(0);
    const [answerX, setAnswerX] = useState<number>(0);

    const calculateValues = (
        z1: number,
        z2: number,
        x1: number,
        x2: number,
        y1: number,
        y2: number
    ) => {
        const p = Math.PI / 180;

        const cot = (x: number): number => 1 / Math.tan(x);

        if (
            Math.round(z1) === -180 ||
            Math.round(z1) === 0 ||
            Math.round(z1) === 180
        ) {
            setAnswerX(Math.round(x1));
            setAnswerZ(
                Math.round(cot(-z2 * p) * x1 - (x2 * cot(-z2 * p) - y2))
            );
        } else if (Math.round(z1) === -90 || Math.round(z1) === 90) {
            setAnswerZ(Math.round(y1));
            setAnswerX(
                Math.round((x2 * cot(-z2 * p) - y2 + y1) / cot(-z2 * p))
            );
        } else {
            if (
                Math.round(z2) === -180 ||
                Math.round(z2) === 0 ||
                Math.round(z2) === 180
            ) {
                setAnswerX(Math.round(x2));
                setAnswerZ(
                    Math.round(cot(-z1 * p) * x2 - (x1 * cot(-z1 * p) - y1))
                );
            } else if (Math.round(z2) === -90 || Math.round(z2) === 90) {
                setAnswerZ(Math.round(y2));
                setAnswerX(
                    Math.round((x1 * cot(-z1 * p) - y1 + y2) / cot(-z1 * p))
                );
            } else {
                const xValue = Math.round(
                    (x1 * cot(-z1 * p) - y1 - (x2 * cot(-z2 * p) - y2)) /
                        (cot(-z1 * p) - cot(-z2 * p))
                );
                const zValue = Math.round(
                    cot(-z1 * p) * xValue - (x1 * cot(-z1 * p) - y1)
                );
                setAnswerX(xValue);
                setAnswerZ(zValue);
                toast.success("Координаты успешно найдены");
            }
        }
    };

    // Обработчик для запуска расчета
    const handleCalculate = () => {
        if (Math.abs(Number(z1) - Number(z2)) < 1) {
            toast.error("Углы не могут быть равны");
        } else if (Number(z1) > 360 || Number(z2) > 360) {
            toast.error("Углы не могут быть больше 360 градусов");
        } else if (
            x1.length < 1 ||
            x2.length < 1 ||
            y1.length < 1 ||
            y2.length < 1 ||
            z1.length < 1 ||
            z2.length < 1
        ) {
            toast.error("Заполните все поля");
        } else {
            calculateValues(
                Number(z1),
                Number(z2),
                Number(x1),
                Number(x2),
                Number(y1),
                Number(y2)
            );
        }
    };

    return (
        <>
            <h2 className={styles.title}>Бросок №1</h2>
            <div className={styles.inputs}>
                <Input
                    type="text"
                    value={x1}
                    placeholder="X"
                    onChange={(e) => setX1(e.target.value)}
                />
                <Input
                    type="text"
                    value={y1}
                    placeholder="Y"
                    onChange={(e) => setY1(e.target.value)}
                />
                <Input
                    type="text"
                    value={z1}
                    placeholder="Угол"
                    onChange={(e) => setZ1(e.target.value)}
                />
            </div>

            <h2 className={styles.title}>Бросок №2</h2>
            <div className={styles.inputs}>
                <Input
                    type="text"
                    value={x2}
                    placeholder="X"
                    onChange={(e) => setX2(e.target.value)}
                />
                <Input
                    type="text"
                    value={y2}
                    placeholder="Y"
                    onChange={(e) => setY2(e.target.value)}
                />
                <Input
                    type="text"
                    value={z2}
                    placeholder="Угол"
                    onChange={(e) => setZ2(e.target.value)}
                />
            </div>

            <div className={styles.button}>
                <button onClick={handleCalculate}>Узнать результат</button>
            </div>

            <div className={styles.answers}>
                <p>X: {answerX}</p>
                <p>Y: {answerZ}</p>
            </div>
        </>
    );
};

export default Calculator;
