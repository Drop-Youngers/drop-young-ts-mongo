import mongoose from "mongoose";
import config from "config";
import log from "../logger";

function connect() {
  const dbUri = config.get("dbUri") as string;

  return mongoose.connect(dbUri, {
    /**
     * To prevent deprecation errors
     */
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(()=>{
      log.info("Database connected");
  })
  .catch((error)=>{
      log.error("Db Error", error);
      process.exit(1);
  });
}

export default connect;
