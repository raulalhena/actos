import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import mongoose from 'mongoose';
import Event from '@/models/events';
import { events } from '@/data/events';

export async function GET() {
    await connectDB();
    return NextResponse.json(await Event.find({}).populate('attendees'));
}

export async function POST(request: NextRequest) {
    await connectDB();
    return NextResponse.json(await Event.create({
        attendees: [ new mongoose.Types.ObjectId('6504479ec27de5fc726cb06a') ],
        name: 'Event3',
        description: 'Event chachi',
        date: Date.now()
    }));
    
}