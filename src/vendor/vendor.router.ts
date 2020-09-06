import { Application } from "express";
import { VendorController } from "./vendor.controller";

export class VendorRouter {

    private app: Application;
    private controller: VendorController = new VendorController();;
    private endPoint: string = 'vendors';

    constructor(app: Application){
        this.app = app;
    }

    routesConfig() {    
    
        this.app.post('/' + this.endPoint, [
            this.controller.save
        ]);
        
        this.app.get('/' + this.endPoint, [
            this.controller.readAll
        ]);
        
        this.app.get('/' + this.endPoint + '/:id', [
            this.controller.findById
        ]);
        
        this.app.patch('/' + this.endPoint + '/:id', [
        ]);
        
        this.app.delete('/' + this.endPoint + '/:id', [ 
            this.controller.deleteById
        ]);
    }
}