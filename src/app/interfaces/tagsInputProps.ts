export interface TagsInputProps {
    label: string;
    placeholder: string;
    id: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    tagStyle?: React.CSSProperties;
    inputStyle?: React.CSSProperties;
}