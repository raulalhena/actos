import React from 'react';

import ButtonCardRadio from '../Button/ButtonCardRadio';
import { RadioGroupContainerProps } from '@/app/interfaces/RadioGroupContainerProps';
import styles from './RadioGroupContainer.module.css'; 

function RadioGroupContainer({ radioButtons, selectedValue, onChange }: RadioGroupContainerProps) {

    return (
        <div className={styles.radioGroupContainer}> 
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
