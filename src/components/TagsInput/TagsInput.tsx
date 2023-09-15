import { TagsInput } from 'react-tag-input-component';
import styles from './TagsInput.module.css';
import { TagsInputProps } from '@/app/interfaces/tagsInputProps';
import { useState } from 'react';

const TagsInputComponent = (props: TagsInputProps) => {
    // const { id, label, placeholder, selected, onChange } = props;
    const { label } = props;
    
    return (
        <div>
            <label className={styles.label}>
                {label}
            </label>
            <br />
            <TagsInput
                name="fruits"
                placeHolder="Escribe tu etiqueta y pulsa enter"
            />
        </div>
    );
};

export default TagsInputComponent;