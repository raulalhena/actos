interface TextInputProps {
    label: string;
    placeholder: string;
    id: string;
}

function TextInput(props: TextInputProps) {
    const { label, placeholder, id } = props;

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type="text" id={id} placeholder={placeholder} />
        </div>
        
    );
}

export default TextInput;