//que me tome todo del form
//convierte en json
//envie en fetch

import { submitProps } from '@/app/interfaces/submitProps';

const ButtonSubmit = ({ label }:submitProps) => {
    return (
        <button type='submit'>
            {label}
        </button >
    );
};

export default ButtonSubmit;