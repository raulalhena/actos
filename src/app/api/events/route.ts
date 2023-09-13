import { NextResponse } from 'next/server';
import { events } from '@/data/events';

export function GET() {
    return NextResponse.json(events);
}

export async function POST(request) {
    const data = await request.json();
    console.log(data);

    return NextResponse.json({
        message: 'Event created.'
    });
}