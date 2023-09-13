import { selectProps } from '@/app/interfaces/selectProps';

function Select(props: selectProps) {
    const { label, options, id } = props;

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <select id={id}>
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