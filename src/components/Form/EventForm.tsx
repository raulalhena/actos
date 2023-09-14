'use client';
import { useState } from 'react';

import Select from '@/components/Select/Select';
import TextInput from '@/components/TextInput/TextInput';
import categories from '@/data/category.json';
import ButtonSubmit from '../Button/ButtonSubmit';
// import { TagsInput } from 'react-tag-input-component';
import { EventFormProps } from '@/app/interfaces/eventFormProps';
import styles from './EventForm.module.css';

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
        <>
            <form onSubmit={handlesubmit}>
                <TextInput
                    id="event"
                    label="Nombre del evento*"
                    placeholder="Evento"
                    minLength={3}
                    maxLength={120}
                    value={formData.event}
                    onChange={handleInputChange}

                />
                <hr className={styles.hrSmall}></hr>
                <Select
                    id="categoryEvent"
                    label="Categoría" 
                    options={categories}
                    value={formData.categoryEvent}
                    onChange={handleSelectChange}  
                />
                <hr className={styles.hrSmall}></hr>
                {/* <TagsInput
                    value={formData.tag}
                    onChange={handleTagsChange}
                    name="tags"
                    placeHolder="tags"
                /> */}
                <TextInput 
                    id="direction"
                    label="Añade una dirección"
                    placeholder="Escribe la dirección de tu evento."
                    minLength={3}
                    maxLength={75}
                    value={formData.direction}
                    onChange={handleInputChange}
                />
                <hr className={styles.hrSmall}></hr>
                <TextInput 
                    id="webLink"
                    label="Añade un enlace"
                    placeholder="Escribe el enlace de tu evento."
                    minLength={3}
                    maxLength={75}
                    value={formData.webLink}
                    onChange={handleInputChange}
                />
                <hr className={styles.hrSmall}></hr>
                <ButtonSubmit
                    label="Enviar"
                />
            </form>
        </>
    );
};

export default EventForm;
