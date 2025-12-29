import { dbConnect } from "./lib/db.js";
import { app } from "./src/app.js";

dbConnect()
  .then(() => {
    app.listen(4000, () => {
      console.log("server Runnin on port 4000");
    });
  })
  .catch((err) => {
    console.log("error from database connection ", err);
  });
