import { ButtonSelectProps } from '@/app/interfaces/butttonSelectProps';

const ButtonSelect = (props : ButtonSelectProps) => {
    const { id, label, value , onChange } = props;
    
    return (

        <button
            id={id}
            value={value}
        >
            {label}
        </button>
    );
};

export default ButtonSelect;