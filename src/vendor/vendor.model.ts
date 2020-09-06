import mongoose, { Schema, Document } from "mongoose";

export interface IVendor extends Document {
  name: string; 
  email: string; 
};

export const VendorSchema = new Schema({
  name: {type:String, required: true},
  email: {type: String},
});

const Vendor = mongoose.model<IVendor>('Vendor', VendorSchema);
export default Vendor;