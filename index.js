import { dbConnect } from "./lib/db.js";
import { app } from "./src/app.js";
import logger from "./src/config/logger.config.js";

dbConnect()
  .then(() => {
    app.listen(4000, () => {
      console.log("server Runnin on port 4000");
      logger.info(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
      );
    });
  })
  .catch((err) => {
    console.log("error from database connection ", err);
  });
