const mongoose = require('mongoose');

const categoriesSchema = mongoose.Schema({
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

class Categories extends mongoose.Model {
 
}

categoriesSchema.loadClass(Categories);
module.exports = mongoose.model('categories', categoriesSchema);