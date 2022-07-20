import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";
import { metaData } from "./source/environment/meta-data";
import swaggerUI from "swagger-ui-express";
import swaggerSpec from "./source/environment/swagger-spec";
import momentsRoutes from "./source/api/routes/moments-routes";

const app = express();
const port = metaData.base.apiPort;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// swagger UI
app.use("/api/moments/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

//routes
app.use("/api/moments", momentsRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
