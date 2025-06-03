const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    firstName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    phoneNumber: {
        type: String,
        trim: true,
    },
}, {
    timestampts: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
}
);

class Users extends mongoose.Model {
    
}

userSchema.loadClass(Users);
module.exports = mongoose.model('users', userSchema);