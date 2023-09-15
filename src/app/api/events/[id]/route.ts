import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Event from '@/models/events';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest, { params }: {params: {id: number}} ) {
    await dbConnect();
    const event = await Event.findOne({ _id: params.id });
    console.log(event);

    return NextResponse.json(event);

}

export function POST(){}

export function DELETE(){}