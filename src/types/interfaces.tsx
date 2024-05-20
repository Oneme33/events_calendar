export interface TicketmasterEvent {
    _embedded: any;
    id: string;
    name: string;
    date: string;
    location: {
        name: string;
    };
    venue: {
        id: number;
        place: string;
    };
    images: string;
}
