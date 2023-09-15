export interface EventFormProps  {
    category?: string | undefined;
    tags?: string[] | undefined;
    address: string | undefined;
    webLink?: string | undefined;
    organizedBy: string;
    language: string | undefined;
    name: string,
    description: string;
    adress?: string,
    date: string,
    startTime: string,
    endTime: string,
    timeZone?: string,
    showStartTime?: boolean,
    showEndTime?: boolean,
    confirmed?: boolean,
    type: string,
    mode: string,
    image?: string,
    video?: string,
    qr?: string[],
    attendees: string[],
    submitted: string[],
    capacity: number,
    price?: number,
    payment?: string,
    contact?: string,
    web: string,
    visibility: boolean,
    status: boolean
}