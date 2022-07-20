import "dotenv/config";
import { Pool } from "pg";

export const metaData = {
  base: {
    apiPort: 9002,
  },
  message: {
    serverError: "Server exception!",
    moments: {
      momentsCreatedSuccess: "moment created successfully",
      momentsCreatedFailure: "can't able to create moment",
    },
  },
};

export const tables = {
  momentsTable: "moment_details",
};

export const db = new Pool({
  user: "postgres",
  password: "crud@123",
  database: "manam",
  host: "localhost",
  port: 5432,
});
