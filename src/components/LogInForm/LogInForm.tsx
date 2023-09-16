'use client';
import TextInput from '@/components/TextInput/TextInput';
import styles from './LogInForm.module.css';
import ButtonSubmit from '@/components/Button/ButtonSubmit';
import { useState } from 'react';
import { LogInProps } from '@/app/interfaces/logInProps';

const LogInForm = () => {
    const [ logInData, setLogInData ] = useState<LogInProps>({
        email: '',
        password: '' });
        // Input
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setLogInData({
            ...logInData,
            [id]: value,
        });
    };   
    // Submit Button
    const handlesubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(logInData);
    }; 
    return (
        <div className={styles.logInFormContainer}>
            <form onSubmit={handlesubmit}>
                <section className={styles.registerTitle}>
                    <h2>¿No tienes cuenta?</h2>
                    <h2 className={styles.registerLink}>Regístrate</h2>
                </section>
                <section className={styles.logInForm}>
                    <h1>Iniciar sesión</h1>
                    <TextInput
                        id="email"
                        label=""
                        placeholder="Email"
                        minLength={3}
                        maxLength={175}
                        value={logInData.email}
                        onChange={handleInputChange}
                        className={styles.customInput}                   />
                    {/* <TextInput
                        id="email"
                        label=""
                        placeholder="Email"
                        minLength={3}
                        maxLength={175}
                        value={logInData.email}
                        onChange={handleInputChange}
                    /> */}
                    <h3 className={styles.forgotPasswordLink}>¿Has olvidado tu contraseña?</h3>
                </section>
                <ButtonSubmit  label="Iniciar sesión"  />
            </form>
        </div>
    );
};

export default LogInForm;
