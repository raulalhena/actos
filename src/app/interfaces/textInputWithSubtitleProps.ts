export interface textInputWithSubtitleProps {
    label: string;
    subtitle: string;
    placeholder: string;
    id: string;
    maxLength: number;
    minLength: number;
    value: string | undefined;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}