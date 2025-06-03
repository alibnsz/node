const mongoose = require('mongoose');

const rolePrivilegesSchema = mongoose.Schema({
   roleId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,

    },
   permission: {
        type: String,
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

class RolePrivileges extends mongoose.Model {
 
}

rolePrivilegesSchema.loadClass(RolePrivileges);
module.exports = mongoose.model('rolePrivileges', rolePrivilegesSchema);