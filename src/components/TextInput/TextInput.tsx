import { textInputProps } from '@/app/interfaces/textInputProps';

function TextInput(props: textInputProps) {
    const { label, placeholder, id, maxLength, minLength } = props;

    return (
        
        <div>
            <label 
                htmlFor={id}>{label}
            </label>
            <input 
                type="text" 
                id={id} 
                placeholder={placeholder}
                minLength={minLength} 
                maxLength={maxLength}
            />
        </div>
        
    );
}

export default TextInput;