
declare type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    variant: 'solid' | 'link' | 'ghost' | 'outline';
    size?: 'small' | 'medium' | 'large'
    className?: string;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
}