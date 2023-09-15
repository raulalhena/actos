import { TagsInput } from 'react-tag-input-component';
import styles from './TagsInput.module.css';
import { TagsInputProps } from '@/app/interfaces/tagsInputProps';

const TagsInputComponent = (props: TagsInputProps) => {

    const { label } = props;
    
    return (
        <div className={styles.tagContainer}>
            <div>
                <label className={styles.label}>
                    {label}
                </label>
            </div>
            <br />
            <div>
                <TagsInput
                    name="tags"
                    placeHolder="Escribe tu etiqueta y pulsa enter"
                />
            </div>
            
        </div>
    );
};

export default TagsInputComponent;