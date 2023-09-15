import { ButtonSubmitProps } from '@/app/interfaces/buttonSubmitProps';
import styles from './ButtonSubmit.module.css';

const ButtonSubmit = ({ label }: ButtonSubmitProps) => {
    return (
        <div className={styles.container}>
            <button className={styles.buttonSubmit} type="submit">
                {label}
            </button>
        </div>
    );
};

export default ButtonSubmit;
