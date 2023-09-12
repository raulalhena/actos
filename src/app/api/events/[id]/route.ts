import { NextResponse } from 'next/server';

export function GET(request, { params }) {
    console.log(params.id);
    return NextResponse.json({ message: params.id });
}

export function POST(){}

export function DELETE(){}