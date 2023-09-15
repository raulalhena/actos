import mongoose, { Schema } from 'mongoose';
import User from './users';

const eventSchema = new Schema (
    {
        name: String,
        description: String,
        tags: String,
        category: String,
        adress: String,
        date: Date,
        startTime: Date,
        endTime: Date,
        timeZone: String,
        showStartTime: Boolean,
        showEndTime: Boolean,
        confirmed: Boolean,
        type: String,
        mode: String,
        image: String,
        video: String,
        qr: String,
        attendees: [ User ],
        submitted: [ User ],
        capacity: Number,
        price: Number,
        payment: String,
        contact: String,
        language: [ String ],
        web: String,
        visibility: Boolean,
        status: Boolean,
        customForm: String,
        form: Object
    },
    {
        timestamps: true
    }
);

const Event = mongoose.models.Event || mongoose.model('Event', eventSchema);

export default Event;