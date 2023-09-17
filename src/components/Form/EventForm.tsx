'use client';
import { ChangeEvent, useState } from 'react';
import Select from '@/components/Select/Select';
import TextInput from '@/components/TextInput/TextInput';
import categories from '@/data/category.json';
import languages from '@/data/languages.json';
import ButtonSubmit from '../Button/ButtonSubmit';
import { EventFormProps } from '@/app/interfaces/eventFormProps';
import styles from './EventForm.module.css';
import { TextArea } from '../TextArea/TextArea';
import TextInputWithSubtitle from '../TextInputWithSubtitle/TextInputWithSubtitle';
import TagsInputComponent from '../TagsInput/TagsInput';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import FormField from '../FormField/FormField';
import SectionForm from '../SectionForm/SectionForm';
import { ImageUploader } from '../ImageUploader/ImageUploader';
import ButtonCardRadio from '../Button/ButtonCardRadio';
import RadioGroupContainer from '../ButtonContainer/RadioGroupContainer';
import { ButtonCardRadioProps } from '@/app/interfaces/buttonCardRadioProps';
import radioButtonsContainer from '@/data/radioButtons.json';
import { TagsInput } from 'react-tag-input-component';
import { ChevronDownIcon } from '../ChevronDownIcon/ChevronDownIcon';
import timeZone from '@/data/timeZone.json';

import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import DateInput from '../DateInput/DateInput';
// Form
const EventForm = () => {
    const [ formData, setFormData ] = useState<EventFormProps>({
        name: '',
        description: '',
        tags: [],
        category: '',
        address: '',
        date: '',
        startTime: '',
        endTime: '',
        timeZone:'',
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
        language: '',
        web: '',
        visibility: false,
        status: false,
        organizedBy: '',
    });

    //Visibility
    const [ isSection1Visible, setIsSection1Visible ] = useState(false);
    const [ isSection2Visible, setIsSection2Visible ] = useState(false);
    const [ isSection3Visible, setIsSection3Visible ] = useState(false);
    // Input
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };
    // Select
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
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

    // DateInput
    const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            date: e.target.value,
        });
    };

    // Submit Button
    const handlesubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(formData);
    };

    // Button Radio

    const [ selectedValue, setSelectedValue ] = useState<string>('');

    const handleRadioChange = (value: string) => {
        setSelectedValue(value);
        setFormData({
            ...formData,
            type: value,
        });
    };
    // Radio Group
    const radioButtons: ButtonCardRadioProps[] = radioButtonsContainer.map((container) => ({
        ...container,
        checked: selectedValue === container.value,
        onChange: () => handleRadioChange(container.value),
    })); 

    return (
        <div className={styles.form}>
            <form onSubmit={handlesubmit}>

                <SectionForm 
                    title="1 INFORMACIÓN BÁSICA" 
                    isVisible={isSection1Visible} 
                    toggleVisibility={() => setIsSection1Visible(!isSection1Visible)}>

                    <FormField>
                        <RadioGroupContainer 
                            radioButtons={radioButtons} 
                            selectedValue={selectedValue} 
                            onChange={handleRadioChange} />
                        <TextInput
                            id="event" 
                            label="Nombre del evento*"
                            placeholder="Evento"
                            minLength={3}
                            maxLength={120}
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </FormField>
                    <FormField>
                        <Select
                            id="categoryEvent"
                            label="Categoría"
                            options={categories}
                            value={formData.category}
                            onChange={handleSelectChange}
                        />
                    </FormField>
                    <FormField>
                        <TagsInputComponent
                            id="tags"
                            value={formData.tags}
                            label="Etiquetas"
                            onChange={handleTagsChange}
                            placeHolder="Digite etiquetas y presione Enter"
                        />
                        <DateInput id='date' name='date' value={formData.date} onChange={handleDateChange}/>
                    </FormField>

                    <FormField>
                        !! Modalidad!
                    </FormField>
                    
                    <FormField>
                        !! Colocar Componet para Lugar del evento!

                        <TextInput
                            id="address"
                            label="Añade una dirección"
                            placeholder="Escribe la dirección de tu evento."
                            minLength={3}
                            maxLength={75}
                            value={formData.address}
                            onChange={handleInputChange}
                        />
                    </FormField>
                    <FormField>
                        <TextInput
                            id="webLink"
                            label="Añade un enlace"
                            placeholder="Escribe el enlace de tu evento."
                            minLength={3}
                            maxLength={75}
                            value={formData.webLink}
                            onChange={handleInputChange}
                        />
                    </FormField>
                    <FormField>
                        !! Colocar componente de FEcha confirmada
                        !! Colocar componente fecha - calendario
                        <Select
                            id="timeZone"
                            label="Zona Horária"
                            options={timeZone}
                            value={formData.timeZone}
                            onChange={handleSelectChange}
                        />
                            
                        <ToggleSwitch 
                            id="mySwitch" 
                            label="Cualquiera puede ver los horários del evento" 
                            subtitle="Si se desactiva, las horas quedarán ocultas" />
                    </FormField>
                </SectionForm>

                <SectionForm 
                    title="2 DETALLES" 
                    isVisible={isSection2Visible} 
                    toggleVisibility={() => setIsSection2Visible(!isSection2Visible)}>
                    <FormField>
                        <TextArea
                            id="description"
                            label="Descripción del evento *"
                            placeholder="Añade una descripción a tu evento."
                            minLength={3}
                            maxLength={500}
                            value={formData.description}
                            onChange={handleInputChange}
                        />
                    </FormField>
                    <FormField>
                        <TextInputWithSubtitle
                            id="organizedBy"
                            label="Dinamizadores"
                            subtitle="Entidades que colaboran en el evento."
                            placeholder="Organizadores del evento."
                            minLength={3}
                            maxLength={500}
                            value={formData.organizedBy}
                            onChange={handleInputChange}
                        />
                        <TextInput
                            id="contact"
                            label="Información de contacto de los dinamizadores"
                            placeholder="email@email.com"
                            minLength={3}
                            maxLength={75}
                            value={formData.contact}
                            onChange={handleInputChange}
                        />
                        <ToggleSwitch 
                            id="contactInfo" 
                            label="Mostrar públicamente la información de contacto." 
                            subtitle="Si se desactiva, la información de contacto quedará oculta." />
                    </FormField>
                    <FormField>
                        <Select
                            id="languageEvent"
                            label="Idioma del evento"
                            options={languages}
                            value={formData.language}
                            onChange={handleSelectChange}
                        />
                    </FormField>
                    <FormField>
                        <ImageUploader />
                    </FormField>

                </SectionForm>

                <SectionForm 
                    title="3 INSCRIPCIONES Y ENTRADAS" 
                    isVisible={isSection3Visible} 
                    toggleVisibility={() => setIsSection3Visible(!isSection3Visible)}>
                    <FormField>
                        <p> !! Colocar componente si Hay limite de entradas</p>
                        <TextInputWithSubtitle
                            id="capacity"
                            label="Límite de entradas"
                            subtitle="Escribe el número de entradas disponibles en caso de aforo limitado."
                            placeholder=""
                            minLength={3}
                            maxLength={500}
                            value={formData.capacity}
                            onChange={handleInputChange}
                        />
                    </FormField>
                </SectionForm>
                <p style={{ color: 'red' }}>* Rellena todos los campos obligatorios para poder publicar tu evento.</p>

                <div className={styles.buttonSection}>
                    <ButtonSubmit label="Guardar" />
                </div>
            </form>
        </div>
    );
};

export default EventForm;
