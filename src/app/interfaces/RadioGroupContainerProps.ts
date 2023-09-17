import { ButtonCardRadioProps } from './buttonCardRadioProps';

export interface RadioGroupContainerProps {
    radioButtons: ButtonCardRadioProps[];
    selectedValue: string ;
    onChange: (value: string) => void;
  }
