export interface Park {

    id: string;
    name: string;
    description?: string;
    image_url?: string;
    location? : string
    // service?: ThemeparkService;
    enabled: boolean;

}