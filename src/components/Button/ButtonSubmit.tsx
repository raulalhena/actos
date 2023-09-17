import { ButtonSubmitProps } from '@/app/interfaces/buttonProps';
import styles from './ButtonSubmit.module.css';

const ButtonSubmit = ({ label }: ButtonSubmitProps) => {
    return (
        <div className={styles.container}>
            <button className={styles.button} type="submit">
                {label}
            </button>
        </div>
    );
};

export default ButtonSubmit;
