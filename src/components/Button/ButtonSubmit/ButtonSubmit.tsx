//que me tome todo del form
//convierte en json
//envie en fetch
import { SubmitProps } from '@/app/interfaces/submitProps';

const ButtonSubmit = ({ label }:SubmitProps) => {
    return (
        <button type='submit'>
            {label}
        </button >
    );
};

export default ButtonSubmit;