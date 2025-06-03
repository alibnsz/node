const mongoose = require('mongoose');

const userRoleSchema = mongoose.Schema({
    roleId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,

    },
    userId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
     },
}, {
    versionKey: false,
    timestampts: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
}
);

class UserRoles extends mongoose.Model {
 
}

userRoleSchema.loadClass(UserRoles);
module.exports = mongoose.model('userRoles', userRoleSchema);