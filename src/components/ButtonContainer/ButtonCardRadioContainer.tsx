import { ButtonCardRadioProps } from '@/app/interfaces/buttonCardRadioProps';
import ButtonCardRadio from '../Button/ButtonCardRadio';
import { RadioGroupContainerProps } from '@/app/interfaces/RadioGroupContainerProps';

function RadioGroupContainer({ radioButtons,selectedValue,onChange }: RadioGroupContainerProps) {

    return (
        <div>
            {radioButtons.map((radioButton) => (
                <ButtonCardRadio
                    key={radioButton.id}
                    {...radioButton}
                    checked={selectedValue === radioButton.value}
                    onChange={() => onChange(radioButton.value)}
                />
            ))}
        </div>
    );
}

export default RadioGroupContainer;
