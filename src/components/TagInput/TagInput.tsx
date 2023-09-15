import React from 'react';
import { TagsInput } from 'react-tag-input-component';
import { TagInputProps } from '@/app/interfaces/tagInputProps';
import styles from './TagInput.module.css';

const TagInput = (props: TagInputProps) => {
    const { label, placeholder, value, onChange } = props;
    
    return (
        <div>
            <label className={styles.label}>
                {label}
            </label>
            <br />
            <TagsInput
                value={value}
                onChange={onChange}
                placeHolder={placeholder}
            />
        </div>
    );
};

export default TagInput;
