'use client';
import TextInput from '@/components/TextInput/TextInput';
import styles from './login.module.css';
import ButtonSubmit from '@/components/Button/ButtonSubmit';
import { useState } from 'react';
import { LogInProps } from '../interfaces/logInProps';

const page = () => {
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
        <div className={styles.logInPage}>
            <form onSubmit={handlesubmit}>
                <section>
                    <h2>¿No tienes cuenta?</h2>
                    <h2 className={styles.registerLink}>Regístrate</h2>
                </section>
                <h1>Iniciar sesión</h1>
                <section>
                    <TextInput
                        id="email"
                        label=""
                        placeholder="Email"
                        minLength={3}
                        maxLength={175}
                        value={logInData.email}
                        onChange={handleInputChange}
                    />
                    <TextInput
                        id="email"
                        label=""
                        placeholder="Email"
                        minLength={3}
                        maxLength={175}
                        value={logInData.email}
                        onChange={handleInputChange}
                    />
                </section>
                <h3>¿Has olvidado tu contraseña?</h3>
                <ButtonSubmit label="Iniciar sesión"/>
            </form>
        </div>
    );
};

export default page;
