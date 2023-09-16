import { TextInputProps } from '@/app/interfaces/textInputProps';
import styles from './TextInput.module.css';

function TextInput(props: TextInputProps) {
    const { label, placeholder, id, maxLength, minLength, value, onChange } =
    props;

    return (
        <div>
            <label className={styles.label} htmlFor={id}>
                {label}
            </label>
            <br />
            <input
                type="text"
                id={id}
                placeholder={placeholder}
                minLength={minLength}
                maxLength={maxLength}
                value={value}
                onChange={onChange}
                className={styles.input}
            />
        </div>
    );
}

export default TextInput;
