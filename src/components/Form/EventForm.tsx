'use client';
import { useState } from 'react';
import Select from '@/components/Select/Select';
import TextInput from '@/components/TextInput/TextInput';
import categories from '@/data/category.json';
import languages from '@/data/languages.json';
import ButtonSubmit from '../Button/ButtonSubmit';
import { TagsInput } from 'react-tag-input-component';
import { EventFormProps } from '@/app/interfaces/eventFormProps';
import styles from './EventForm.module.css';
import { ChevronDownIcon } from '../ChevronDownIcon/ChevronDownIcon';
import TextInputXL, { TextArea } from '../TextArea/TextArea';

// Form
const EventForm = () => {
    const [ formData, setFormData ] = useState<EventFormProps>({
        event: '',
        categoryEvent: '',
        languageEvent: '',
        tag: [],
        direction: '',
        webLink: '',
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
            tag: newTags,
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
                                    value={formData.event}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className={styles.formField}>
                                <Select
                                    id="categoryEvent"
                                    label="Categoría"
                                    options={categories}
                                    value={formData.categoryEvent}
                                    onChange={handleSelectChange}
                                />
                            </div>
                            <div className={styles.formField}>
                                <TagsInput
                                    value={formData.tag}
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
                                    value={formData.direction}
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
                            <Select
                                id="languageEvent"
                                label="Idioma del evento"
                                options={languages}
                                value={formData.languageEvent}
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
    );
};

export default EventForm;
