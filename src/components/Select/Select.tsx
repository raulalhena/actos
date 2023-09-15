import { SelectProps } from '@/app/interfaces/selectProps';

function Select(props: SelectProps) {
    const { label, options, id, value, onChange } = props;

    return (
        <div>
            <label htmlFor={id}> 
                {label} 
            </label>
            <select id={id} value={value} onChange={onChange}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Select;