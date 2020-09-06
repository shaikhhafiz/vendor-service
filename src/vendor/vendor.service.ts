import { VendorRepository } from "./vendor.repository";
import { IVendor } from "./vendor.model";

export class VendorService {

    repository: VendorRepository;

    constructor() {
        this.repository = new VendorRepository();
    }

    async readAll() {
        return this.repository.findAll();
    }
    
    async findById(rowId: string) {
        return this.repository.findById(rowId);
    };
    
    async save (row: IVendor) {
        return this.repository.save(row);
    }

    async deleteById(rowId: string) {
        return this.repository.findByIdAndDelete(rowId);
    }
}