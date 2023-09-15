'use client';
import { useState } from 'react';

import Select from '@/components/Select/Select';
import TextInput from '@/components/TextInput/TextInput';
import categories from '@/data/category.json';
import { EventFormProps } from '@/app/interfaces/eventFormProps';
import ButtonSubmit from '../Button/ButtonSubmit';
import TagInput from '../TagInput/TagInput';

// Form
const EventForm = () => {
    const [ formData, setFormData ] = useState<EventFormProps>({
        name: '',
        description: '',
        tags: [],
        category: '',
        adress: '',
        date: '',
        startTime: '',
        endTime: '',
        timeZone: '',
        showStartTime: true,
        showEndTime: true,
        confirmed: false,
        type: '',
        mode: '',
        image: '',
        video: '',
        qr: [],
        attendees: [],
        submitted: [],
        capacity: 0, 
        price: undefined,
        payment: '',
        contact: '',
        language: [],
        web: '',
        visibility: false, 
        status: false,
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
            tags: newTags,
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
                    value={formData.name}
                    onChange={handleInputChange}

                />
                <Select
                    id="categoryEvent"
                    label="Category" 
                    options={categories}
                    value={formData.category}
                    onChange={handleSelectChange}  
                />
                <TagInput
                    label="Tags" 
                    placeholder="tags"
                    value={formData.tags}
                    onChange={handleTagsChange}
                />

                <input
                    type="date" 
                    id='date' 
                    value={formData.date} 
                    onChange={handleInputChange} >
                </input>

                <TextInput 
                    id="direction"
                    label="Añade una dirección"
                    placeholder="Escribe la dirección de tu evento."
                    minLength={3}
                    maxLength={75}
                    value={formData.adress}
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