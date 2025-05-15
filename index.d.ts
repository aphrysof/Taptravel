
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

declare interface AirportsProp {
    continent: string;
    country_name: string;
    elevation_ft: number;
    gps_code: string;
    home_link: string;
    iata_code: string;
    icao_code: string;
    id: number;
    ident: string;
    iso_country: string;
    iso_region: string;
    keywords: string;
    last_updated: string;
    latitude_deg: number;
    local_code: string;
    local_region: string;
    longitude_deg: number;
    municipality: string;
    name: string;
    region_name: string;
    scheduled_service: number;
    score: number;
    type: string;
    wikipedia_link: string;
}
