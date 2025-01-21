import { FC } from "react";

import styles from "./Input.module.scss";

interface IProps {
    type: string;
    value: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<IProps> = ({ type, value, placeholder, onChange }) => {
    return (
        <input
            className={styles.input}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};

export default Input;
