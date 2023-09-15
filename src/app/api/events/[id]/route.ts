import { NextResponse } from 'next/server';
import { events } from '@/data/events';
import { NextRequest } from 'next/server';

export function GET(request: NextRequest, { params }: {params: {id: number}} ) {
    const event = events.find(event => event.id === params.id);
    console.log(event);

    return NextResponse.json(event);

}

export function POST(){}

export function DELETE(){}