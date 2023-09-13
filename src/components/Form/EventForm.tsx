'use client';
import { useState } from 'react';

import Select from '@/components/Select/Select';
import TextInput from '@/components/TextInput/TextInput';
import categories from '@/data/category.json';
import ButtonSubmit from '../Button/ButtonSubmit';

const EventForm = () => {
    const [ formData, setFormData ] = useState({
        event: '',
        categoryEvent: '', 
        tag: '',
        direction: '',
        webLink: '',
    });

    const handlesubmit = (event:React.FormEvent) => {
        event.preventDefault();
        console.log(formData);
    };

    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    const handleSelectChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
        const { id, value } = event.target;
        setFormData({
            ...formData,
            [id]: value,
        });
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
                <Select
                    id="categoryEvent"
                    label="category" 
                    options={categories}
                    value={formData.categoryEvent}
                    onChange={handleSelectChange}  
                />
                <TextInput 
                    id="tag"
                    label="Etiquetas"
                    placeholder="Tags"
                    minLength={3}
                    maxLength={10}
                    value={formData.tag}
                    onChange={handleInputChange}
                />
                <TextInput 
                    id="direction"
                    label="Añade una dirección"
                    placeholder="Escribe la dirección de tu evento."
                    minLength={3}
                    maxLength={75}
                    value={formData.direction}
                    onChange={handleInputChange}
                />
                <TextInput 
                    id="webLink"
                    label="Añade un enlace"
                    placeholder="Escribe el enlace de tu evento."
                    minLength={3}
                    maxLength={75}
                    value={formData.webLink}
                    onChange={handleInputChange}
                />

                <ButtonSubmit
                    label="Enviar"
                />
            </form>
        </>
    );
};

export default EventForm;
