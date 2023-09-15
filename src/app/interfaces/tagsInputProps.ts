import { TagsInputProps } from 'react-tag-input-component';

export interface tagsInputProps extends TagsInputProps {
    label: string;

    id: string;
    maxLength: number;
   
}