export interface tagsInputProps {
    label: string;
    placeholder: string;
    id: string;
    maxLength: number;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}