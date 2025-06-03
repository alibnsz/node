const mongoose = require('mongoose');

const auditLogsSchema = mongoose.Schema({
    level: {
        type: String,
        enum: ['info', 'warn', 'error'],
        default: 'info'
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    location: {
        type: String,

    },
    procType: {
        type: String,

    },
    log: {
        type: String,

    },
}, {
    versionKey: false,
    timestampts: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
}
);

class AuditLogs extends mongoose.Model {
 
}

auditLogsSchema.loadClass(AuditLogs);
module.exports = mongoose.model('auditLogs', auditLogsSchema);