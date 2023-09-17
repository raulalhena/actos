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

export async function DELETE(request: NextRequest, { params }: {params: {id: number}}) {
    await dbConnect();
    await Event.findByIdAndDelete({ _id: params.id });

    return NextResponse.json({
        message: 'Event deleted.'
    });
}

export async function PUT(request: NextRequest, { params }: {params: {id: number}}) {
    await dbConnect();

    const data = await request.json();
    const event = await Event.findByIdAndUpdate({ _id: params.id }, data, { new: true });

    return NextResponse.json(
        {
            data: event,
            message: 'Event updated.'
        }
    );
}