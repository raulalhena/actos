export interface TextInputProps {
    label: string;
    placeholder: string;
    id: string;
    maxLength: number;
    minLength: number;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}