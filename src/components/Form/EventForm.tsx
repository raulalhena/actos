'use client';
import { useState } from 'react';

import Select from '@/components/Select/Select';
import TextInput from '@/components/TextInput/TextInput';
import categories from '@/data/category.json';
import ButtonSubmit from '../Button/ButtonSubmit';
import { TagsInput } from 'react-tag-input-component';
import { EventFormProps } from '@/app/interfaces/eventFormProps';
import styles from './EventForm.module.css';
import { ChevronDownIcon } from '../ChevronDownIcon/ChevronDownIcon';

// Form
const EventForm = () => {
    const [ formData, setFormData ] = useState<EventFormProps>({
        event: '',
        categoryEvent: '', 
        tag: [],
        direction: '',
        webLink: '',
    });
    // Input
    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };
    // Select
    const handleSelectChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
        const { id, value } = event.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };
    // Tags
    const handleTagsChange = (newTags: string[]) => {
        setFormData({
            ...formData,
            tag: newTags,
        });
    };
    // Submit Button
    const handlesubmit = (event:React.FormEvent) => {
        event.preventDefault();
        console.log(formData);

    };

    return (
        <div className={styles.form}>
            <form onSubmit={handlesubmit}>
                <div><section className={styles.title}>
                    <h2>1 INFORMACIÓN BÁSICA</h2>
                    <ChevronDownIcon/>
                </section>
                <section className={styles.formField}>
                    <TextInput
                        id="event"
                        label="Nombre del evento*"
                        placeholder="Evento"
                        minLength={3}
                        maxLength={120}
                        value={formData.event}
                        onChange={handleInputChange}

                    /></section>
                <section className={styles.formField}>
                    <Select
                
                        id="categoryEvent"
                        label="Categoría" 
                        options={categories}
                        value={formData.categoryEvent}
                        onChange={handleSelectChange}  
                    /></section>
                <section className={styles.formField}>
                    <TagsInput
                        value={formData.tag}
                        onChange={handleTagsChange}
                        name="tags"
                        placeHolder="tags"
                    /></section>
                <section className={styles.formField}>
                    <TextInput 
                        id="direction"
                        label="Añade una dirección"
                        placeholder="Escribe la dirección de tu evento."
                        minLength={3}
                        maxLength={75}
                        value={formData.direction}
                        onChange={handleInputChange}
                    /></section>
                <section className={styles.formField}>
                    <TextInput 
                        id="webLink"
                        label="Añade un enlace"
                        placeholder="Escribe el enlace de tu evento."
                        minLength={3}
                        maxLength={75}
                        value={formData.webLink}
                        onChange={handleInputChange}
                    /></section>
                </div>
                <div><section className={styles.title}>
                    <h2>2 DETALLES</h2>
                    <ChevronDownIcon/>
                </section>
                </div>
                <div><section className={styles.title}>
                    <h2>3 INSCRIPCIONES Y ENTRADAS</h2>
                    <ChevronDownIcon />
                </section>
                </div>
                <ButtonSubmit
                    label="Enviar"
                />
            </form>
        </div>
    );
};

export default EventForm;
