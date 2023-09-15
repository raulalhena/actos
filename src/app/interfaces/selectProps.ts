export interface SelectProps {
    label: string;
    options: string[];
    id: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}