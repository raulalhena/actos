'use client';

import EventForm from '@/components/EventForm/EventForm';
import styles from './event.module.css';
import { useSession } from 'next-auth/react';

const page = () => {

    const { data: session, status } = useSession();

    console.log(session, status);

    return (
        <>
            <section className={styles.title}>
                <h1 className={styles.dash}>—</h1>
                <h1>Crea tu propio evento</h1>
            </section>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <EventForm />
        </>
    );
};

export default page;