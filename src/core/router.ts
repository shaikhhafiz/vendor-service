import { Application } from "express";
import { VendorRouter } from "../vendor/vendor.router";

export class Router{
    static routeConfig = (app: Application) => {
        const vendorRouter: VendorRouter = new VendorRouter(app);
        vendorRouter.routesConfig();
    }
}