'use client';
import { ChangeEvent, useState } from 'react';
import Select from '@/components/Select/Select';
import TextInput from '@/components/TextInput/TextInput';
import categories from '@/data/category.json';
import languages from '@/data/languages.json';
import timeZone from '@/data/timeZone.json';
import ButtonSubmit from '../Button/ButtonSubmit';
import { EventFormProps } from '@/app/interfaces/eventFormProps';
import styles from './EventForm.module.css';
import { TextArea } from '../TextArea/TextArea';
import TextInputWithSubtitle from '../TextInputWithSubtitle/TextInputWithSubtitle';
import TagsInputComponent from '../TagsInput/TagsInput';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import FormField from '../FormField/FormField';
import SectionForm from '../SectionForm/SectionForm';
<<<<<<< HEAD
import { ImageUploader } from '../ImageUploader/ImageUploader';

=======
import ButtonCardRadio from '../Button/ButtonCardRadio';
import RadioGroupContainer from '../ButtonContainer/ButtonCardRadioContainer';
import { ButtonCardRadioProps } from '@/app/interfaces/buttonCardRadioProps';
import radioButtonsContainer from '@/data/radioButtons.json';
import { TagsInput } from 'react-tag-input-component';
import { ChevronDownIcon } from '../ChevronDownIcon/ChevronDownIcon';
>>>>>>> 14541b9f0612e430e37ef917e3fffaa5d4eccaf3
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
<<<<<<< HEAD
        <div className={styles.form}>
            <form onSubmit={handlesubmit}>

                <SectionForm 
                    title="1 INFORMACIÓN BÁSICA" 
                    isVisible={isSection1Visible} 
                    toggleVisibility={() => setIsSection1Visible(!isSection1Visible)}>

                    <FormField>
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
=======
        <>
            <div className={styles.form}>
                <form onSubmit={handlesubmit}>
                    <div>
                        <section>
                            <div className={styles.title}>
                                <h2>1 INFORMACIÓN BÁSICA</h2>
                                <span onClick={() => setIsSection1Visible(!isSection1Visible)}>
                                    <ChevronDownIcon />
                                </span>
                            </div>
                        </section>
                        {isSection1Visible && (
                            <section>
                                <div className={styles.formField}>
                                    <TextInput
                                        id="event"
                                        label="Nombre del evento*"
                                        placeholder="Evento"
                                        minLength={3}
                                        maxLength={120}
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className={styles.formField}>
                                    <Select
                                        id="categoryEvent"
                                        label="Categoría"
                                        options={categories}
                                        value={formData.category}
                                        onChange={handleSelectChange}
                                    />
                                </div>
                                <div className={styles.formField}>
                                    <TagsInput
                                        value={formData.tags}
                                        onChange={handleTagsChange}
                                        name="tags"
                                        placeHolder="tags"
                                    />
                                </div>
                                <div className={styles.formField}>
                                    <TextInput
                                        id="direction"
                                        label="Añade una dirección"
                                        placeholder="Escribe la dirección de tu evento."
                                        minLength={3}
                                        maxLength={75}
                                        value={formData.address}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className={styles.formField}>
                                    <TextInput
                                        id="webLink"
                                        label="Añade un enlace"
                                        placeholder="Escribe el enlace de tu evento."
                                        minLength={3}
                                        maxLength={75}
                                        value={formData.webLink}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </section>
                        )}
                    </div>
                    <div>
                        <section>
                            <div className={styles.title}>
                                <h2>2 DETALLES</h2>
                                <span onClick={() => setIsSection2Visible(!isSection2Visible)}>
                                    <ChevronDownIcon />
                                </span>
                            </div>
                        </section>
                        {isSection2Visible && <section>
                            <div className={styles.formField}>
                                <RadioGroupContainer
                                    radioButtons={radioButtons}
                                    selectedValue={selectedValue}
                                    onChange={handleRadioChange}
                                />
                                <TextArea
                                    id="description"
                                    label="Descripción del evento *"
                                    placeholder="Añade una descripción a tu evento."
                                    minLength={3}
                                    maxLength={500}
                                    value={formData.description}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className={styles.formField}>
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
                            </div>
                            <div className={styles.formField}>
                                <Select
                                    id="languageEvent"
                                    label="Idioma del evento"
                                    options={languages}
                                    value={formData.language}
                                    onChange={handleSelectChange}
                                />
                            </div></section>}
                    </div>
                    <div>
                        <section>
                            <div className={styles.title}>
                                <h2>3 INSCRIPCIONES Y ENTRADAS</h2>
                                <span onClick={() => setIsSection3Visible(!isSection3Visible)}>
                                    <ChevronDownIcon />
                                </span>
                            </div>
                        </section>
                        {isSection3Visible && <section>
                            <p>This is the content to show/hide.</p></section>}
                    </div>
                    <ButtonSubmit label="Enviar" />
                </form>
            </div>
        </>
>>>>>>> 14541b9f0612e430e37ef917e3fffaa5d4eccaf3
    );
};

export default EventForm;
