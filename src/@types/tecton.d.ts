interface Q2Select extends IntrinsicHTMLElement {
    searchable?: boolean;
    optional?: boolean;
    label?: string;
    children: ReactNode;
    class?: string;
    multiple?: boolean;
    multilineOptions?: boolean;
    onChange?: (e: React.ChangeEvent<Q2Select>) => void;
    onBlur?: (e: React.ChangeEvent<Q2Select>) => void;
    onInput?: (e: React.SyntheticEvent<Q2Select>) => void;
    onClick?: (e: React.MouseEvent<Q2Select, MouseEvent>) => void;
    selectedOptions?: string[];
    errors?: string[];
    options?: object[];
}

interface Q2Option extends IntrinsicHTMLElement {
    value: string;
    display: string;
    disabled?: boolean;
    children: ReactNode | string;
    active?: boolean;
    selected?: boolean;
}