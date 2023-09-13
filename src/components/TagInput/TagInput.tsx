import { tagsInputProps } from '@/app/interfaces/tagsInputProps';
import { useState } from 'react';
import { TagsInput } from 'react-tag-input-component'; 

const TagInput = (props: tagsInputProps) => {
    const { label, placeholder, id, maxLength } = props;

    const [ tags, setTags ] = useState([]);

    return (
            
        <div>
            <label 
                htmlFor={id}>{label}
            </label>

            <pre>{JSON.stringify(tags)}</pre>
            <TagsInput
                type="text" 
                id={id} 
                placeholder={placeholder}
                maxLength={maxLength}
                value={tags}
                onChange={setTags}
                
            />
            <em>Enter tags</em>
        </div>
        
    );
};

export default TagInput;