import express from "express";
import { MomentsController } from "../controller/moments-controller";

const momentsRoutes = express.Router();

/**
 * @swagger
 * /api/moments/:
 *   post:
 *     tags:
 *       - Moments
 *     description: Returns a ref_id if moment createion is successful
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: "body"
 *         name: "body"
 *         description: "Required"
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *              profile_id:
 *                  type: string
 *              description:
 *                  type: string
 *              date:
 *                  type: string
 *                  format: date
 *              tags:
 *                  type: string
 *     responses:
 *       200:
 *         description: Returns a JSON object if moments created
 *         schema:
 *           type: object
 *           properties:
 *              momentCreated:
 *                  type: boolean
 *              message:
 *                  type: string
 *              data:
 *                  type: object
 *                  properties:
 *                      ref_id:
 *                          type: string
 *       500:
 *         description: Returns 500 for server exception
 *         schema:
 *           type: object
 *           properties:
 *              statusCode:
 *                  type: number
 *                  example: 500
 *              error:
 *                  type: string
 *              message:
 *                  type: string
 */
momentsRoutes.post("/", MomentsController.postMoments);

momentsRoutes.get("/:momentId/", MomentsController.getMoments);

momentsRoutes.post("/image/", MomentsController.postSingleImage);

momentsRoutes.get("/:momentId/getMedia/", MomentsController.momentsGetMedia);

momentsRoutes.get(
  "/image/high-res/image-id",
  MomentsController.getHighResImage
);

momentsRoutes.get("/image/low-res/image-id", MomentsController.getLowResImage);

export default momentsRoutes;
