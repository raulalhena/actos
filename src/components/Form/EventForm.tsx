import { useState } from 'react';

import Select from '@/components/Select/Select';
import TextInput from '@/components/TextInput/TextInput';
import categories from '@/data/category.json';
import ButtonSubmit from '../Button/ButtonSubmit';

'use client';

const EventForm = () => {
    const [ formData, setFormData ] = useState({});

    const handlesubmit = (event:any) => {
        event.preventDefault();
        console.log(formData);
    };

    const handleInputChange = (event:any) => {
        const {} = event.target;
        setFormData({

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
                    maxLength={75}
                />
                <Select
                    id="categoryEvent"
                    label="category" 
                    options={categories}  
                />
                <TextInput 
                    id="tag"
                    label="Etiquetas"
                    placeholder="Tags"
                    minLength={3}
                    maxLength={75}
                />
                <TextInput 
                    id="direction"
                    label="Añade una dirección"
                    placeholder="Escribe la dirección de tu evento."
                    minLength={3}
                    maxLength={75}
                />
                <TextInput 
                    id="webLink"
                    label="Añade un enlace"
                    placeholder="Escribe el enlace de tu evento."
                    minLength={3}
                    maxLength={75}
                />

                <ButtonSubmit
                    label="Enviar"
                />
            </form>
        </>
    );
};

export default EventForm;
