import mongoose, { Schema } from 'mongoose';
import User from './users';

const eventSchema = new Schema (
    {
        name: {
            type: String,
            require: [ true, 'El nombre del evento es requerido' ]
        },
        description: {
            type: String,
            require: [ true, 'La descripción del evento es requerida' ]
        },
        tags: String,
        category: String,
        adress: String,
        date: {
            type: Date,
            require: [ true, 'La fecha del evento es requerida' ]
        },
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
        attendees: [ { type: mongoose.Schema.Types.ObjectId, ref: User.modelName } ],
        submitted: [ { type: mongoose.Schema.Types.ObjectId, ref: User.modelName } ],
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