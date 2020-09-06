import { VendorService } from "./vendor.service";
import { Request, Response } from "express";

export class VendorController{

  private service: VendorService;

  constructor() {
    this.service = new VendorService();
  }

  readAll = async (req: Request, res: Response) => {
    try {
      const elems = await this.service.readAll();
      return res.send({ elems });
    } catch (error) {
      return res.send(error);
    }
  }
    
  findById = async (req: Request, res: Response) => {
    try {
      const elem = await this.service.findById(req.params.id);
      return res.send({ elem });
    } catch (error) {
      return res.send(error);
    }
  }
    
  save = async (req: Request, res: Response) => {
    try {
      const elem = await this.service.save(req.body);
      return res.send({ elem });
    } catch (error) {
      return res.send(error);
    }
  }
    
  deleteById = async (req: Request, res: Response) => {
    try {
      const elem = await this.service.deleteById(req.params.id);
      return res.send({ elem });
    } catch (error) {
      return res.send(error);
    }
  }
}