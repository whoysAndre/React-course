import express, { Router } from "express";
import cors from "cors";

interface Options{
  port:number;
  routes:Router
}

export class Server{

  private readonly app = express();
  private readonly port:number;
  private readonly routes:Router;
  
  constructor({port,routes}:Options){
    this.port = port;
    this.routes = routes;
  }


  public start(){


    //Middlewares
    this.app.use(cors({
      methods: ["POST"]
    }));
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended:false}));

    //Routes
    this.app.use(this.routes);

    //Server
    this.app.listen(this.port);

  };

};