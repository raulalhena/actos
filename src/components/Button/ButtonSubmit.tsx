<<<<<<< HEAD
import { ButtonSubmitProps } from '@/app/interfaces/buttonSubmitProps';

const ButtonSubmit = ({ label }:ButtonSubmitProps) => {
    return (
        <button type='submit'>
            {label}
        </button >
    );
};

export default ButtonSubmit;
=======
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
>>>>>>> eventpage-teresa
