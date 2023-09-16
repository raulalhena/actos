'use client';
import LogInForm from '@/components/LogInForm/LogInForm';
import styles from './login.module.css';

const page = () => {
    return (
        <div>
            <section className={styles.header}>Aquí va una imagen</section>
            <div className={styles.container}>
                <LogInForm />
            </div>
        </div>
    );
};

export default page;
