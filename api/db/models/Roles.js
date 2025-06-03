const mongoose = require('mongoose');

const rolesSchema = mongoose.Schema({
   roleName: {
        type: String,
        required: true,

    },
   isActive: {
        type: Boolean,
        default: true,
    },
   createdBy: {
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

class Roles extends mongoose.Model {
 
}

rolesSchema.loadClass(Roles);
module.exports = mongoose.model('roles', rolesSchema);