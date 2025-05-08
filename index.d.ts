
declare type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    variant: 'solid' | 'link' | 'ghost' | 'outline';
    size?: 'small' | 'medium' | 'large'
    className?: string;
    icon?: React.ReactNode;
    role?: string;
    iconPosition?: 'left' | 'right';
}

declare interface Tab {
    id: string;
    label: string;
    content: React.ReactNode;
}

declare interface TabsProps {
    tabs: Tab[];
}
