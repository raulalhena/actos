'use client';
import LogInForm from '@/components/LogInForm/LogInForm';
import styles from './login.module.css';

const page = () => {
    return (
        <div className={styles.logInPage}>
            <section className={styles.header}>Aquí va una imagen</section>
            <LogInForm />
        </div>
    );
};

export default page;
