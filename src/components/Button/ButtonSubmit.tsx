import { ButtonSubmitProps } from '@/app/interfaces/buttonSubmitProps';

const ButtonSubmit = ({ label }:ButtonSubmitProps) => {
    return (
        <button type='submit'>
            {label}
        </button >
    );
};

export default ButtonSubmit;