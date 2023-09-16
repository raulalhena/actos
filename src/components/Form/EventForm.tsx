'use client';
import { useState } from 'react';
import Select from '@/components/Select/Select';
import TextInput from '@/components/TextInput/TextInput';
import categories from '@/data/category.json';
import languages from '@/data/languages.json';
import timeZone from '@/data/timeZone.json';
import ButtonSubmit from '../Button/ButtonSubmit';
import { EventFormProps } from '@/app/interfaces/eventFormProps';
import styles from './EventForm.module.css';
import { ChevronDownIcon } from '../ChevronDownIcon/ChevronDownIcon';
import { TextArea } from '../TextArea/TextArea';
import TextInputWithSubtitle from '../TextInputWithSubtitle/TextInputWithSubtitle';
import TagsInputComponent from '../TagsInput/TagsInput';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';

// Form
const EventForm = () => {
    const [ formData, setFormData ] = useState<EventFormProps>({
        name: '',
        // category: ;
        // tags: [];
        mode:'',
        type:'',
        // address: ;
        // webLink: ;
        date:'',
        startTime:'',
        endTime:'',
        timeZone:'',
        showStartTime: true,
        showEndTime: true,
        // confirmed: boolean,
        description:'',
        // web: ,
        // organizedBy: ;
        // contact: ,
        isPrivate: false,
        language: 'Español',
        // image: ,
        // video: ,
        // capacity: number,
        // qr: [],
        // attendees: [],
        // submitted: [],
        // price: number,
        // payment: ,
        visibility: false,
        status: false
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
    // const handleTagsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const { id, value } = event.target;
    //     console.log(event.target);
    //     setFormData({
    //         ...formData,
    //         [id]: value,
    //     });
    // };
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

    return (
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
                                <TagsInputComponent
                                    id="tags"
                                    value={formData.tags}
                                    label="Etiquetas"
                                    onChange={handleTagsChange}
                                    placeHolder="Digite etiquetas y presione Enter"
                                />
                            </div>
                            <div className={styles.formField}>
                                <TextInput
                                    id="address"
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
                            <div className={styles.formField}>
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
                <ButtonSubmit label="Guardar" />
            </form>
        </div>
    );
};

export default EventForm;
