export interface ButtonSelectProps {
    id: string;
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLElement>) => void;
}