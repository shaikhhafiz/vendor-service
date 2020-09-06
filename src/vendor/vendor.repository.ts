import Vendor, { IVendor } from './vendor.model';
import mongoose from 'mongoose';

export class VendorRepository {

    async save(row: IVendor){
        const Vendor = mongoose.model( "Vendor" );
        const vendor = new Vendor( row );
        return vendor.save();
    }

    async findAll(){
        const rows = await Vendor.find({});
        return rows;
    }

    async findById(id: string) {
        const row = await Vendor.findById(id);
        return row;
    }

    async findByIdAndDelete(id: string) {
        return Vendor.findByIdAndDelete(id);
    }
}