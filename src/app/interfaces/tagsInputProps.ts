import { TagsInputProps } from 'react-tag-input-component';

export interface TagsInputsProps extends TagsInputProps {
    label: string;
    id: string;
    maxLength: number;
}