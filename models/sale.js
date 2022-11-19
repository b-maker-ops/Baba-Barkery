const mongoose = require('mongoose')

const saleSchema =new mongoose.Schema({
    
    description: {
        type: String,
        reqiured: true,
    },
    qty: {
        type: Number,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    Total: {
        type: Number,
        require: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
},
{timestamps: true}
)

saleSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Sale = mongoose.model('sale',saleSchema)

module.exports = Sale