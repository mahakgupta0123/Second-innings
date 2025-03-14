import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    role: {
        type: String,
        enum: ["admin", "volunteer", "adopter", "user"],
        default: 'user'
    },
    phone: {
        type: String,
    },
    location: {
        type: String,
    },
    profileImage: {
        public_id: {
            type: String,
            default: null
        },
        url: {
            type: String,
            required: true,
            default: null
        }
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verifyToken: {
        type: String,
        default: null
    },
    verifyTokenExpire: {
        type: Date,
        default: null
    },
}, {
    timestamps: true
})

export default mongoose.model('User', userSchema);