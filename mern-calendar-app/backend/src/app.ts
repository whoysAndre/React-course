import { envs } from "./config";
import { MongoDatabase } from "./database/mongo/mongo-database";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";


(()=>{

  main();

})();


async function main(){

  //DB
  await MongoDatabase.connect({
    mongoUrl: envs.MONGO_URL,
    dbName: envs.DB_NAME
  });

  const server = new Server({
    port: envs.PORT,
    routes: AppRoutes.routes
  });

  server.start();

};