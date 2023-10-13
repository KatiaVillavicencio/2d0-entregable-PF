import mongoose from 'mongoose';

const cartCollection = 'carts';

const cartSchema = new mongoose.Schema({

    description: {type: String, required: true},
    quantity:{type: Number, required:true},
    total: { type: Number, required: true}
});
cartSchema.pre('find', function(next){
    this.populate('products._id');
    next();
});
export const cartModel = mongoose.model(cartCollection, cartSchema)
