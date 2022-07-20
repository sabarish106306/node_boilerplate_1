import { Request, Response, NextFunction } from "express";
import { metaData } from "../../environment/meta-data";
import { MomentService } from "../service/moments-service";
import { LogController } from "./log-controller";
import { v4 as uuidv4 } from "uuid";

export class MomentsController {
  /**
   * postMomenst Controller Method
   * @param request
   * @param response
   */
  static postMoments(request: Request, response: Response) {
    try {
      const bodyContent = request.body;
      // const { profileId, momentDescription, date, tags } = bodyContent;
      const ref_id = uuidv4();
      MomentService.postMomentsDetails(bodyContent, ref_id)
        .then((postMomentsData) => {
          if (postMomentsData) {
            response.status(200).json(postMomentsData);
          }
        })
        .catch((error) => {
          LogController.writeLog(
            "Exception in Moments service - post moments ",
            error
          );
          response.status(500).send(metaData.message.serverError);
        });
    } catch (error) {
      LogController.writeLog(
        "Exception in Moments Controller - post moments ",
        error
      );
      response.status(500).send(metaData.message.serverError);
    }
  }

  /**
   * getMoments Controller Method
   * @param request
   * @param response
   */
  static getMoments(request: Request, response: Response) {
    try {
      const bodyContent = request.body;
      const { ref_id } = bodyContent;
      MomentService.getMomentDetails(ref_id).then((getMomentsData) => {
        if (getMomentsData) {
          response.status(200).json(getMomentsData);
        } else {
          response.status(500).send(metaData.message.serverError);
        }
      });
    } catch (error) {
      LogController.writeLog(
        "Exception in Moments Controller - get moments",
        error
      );
      response.status(500).send(metaData.message.serverError);
    }
  }

  /**
   * updateMoments Controller Method
   * @param request
   * @param response
   */
  // static updateMoments(request: Request, response: Response) {
  //   try {
  //     const ref_id = request.params.ref_id;
  //     const bodyContent = request.body;
  //     MomentService.updateMomentDetails(ref_id, bodyContent).then(
  //       (updatedMoments) => {
  //         if (updatedMoments) {
  //           response.status(200).json(updatedMoments);
  //         } else {
  //           response.status(500).send(metaData.message.serverError);
  //         }
  //       }
  //     );
  //   } catch (error) {
  //     LogController.writeLog(
  //       "Exception in Moments Controller - update moments",
  //       error
  //     );
  //     response.status(500).send(metaData.message.serverError);
  //   }
  // }

  /**
   * deleteMoments Controller Method
   * @param request
   * @param response
   */
  // static deleteMoments(request: Request, response: Response) {
  //   try {
  //     const ref_id = request.params.ref_id;
  //     MomentService.deleteMoments(ref_id).then((deletedData) => {
  //       if (deletedData) {
  //         response.status(200).json(deletedData);
  //       } else {
  //         response.status(500).send(metaData.message.serverError);
  //       }
  //     });
  //   } catch (error) {
  //     LogController.writeLog(
  //       "Exception in Moments Controller - delete moments",
  //       error
  //     );
  //     response.status(500).send(metaData.message.serverError);
  //   }
  // }
  /**
   * postSingleImage
   * @param request
   * @param response
   */
  static postSingleImage(request: Request, response: Response) {
    try {
    } catch (error) {
      LogController.writeLog(
        "Exception in Moments Controller - postSingleImage",
        error
      );
    }
  }
  /**
   * momentsGetMedia
   * @param request
   * @param response
   */
  static momentsGetMedia(request: Request, response: Response) {
    try {
    } catch (error) {
      LogController.writeLog(
        "Exception in Moments Controller - momentsGetMedia",
        error
      );
    }
  }
  /**
   * getHighResImage
   * @param request
   * @param response
   */
  static getHighResImage(request: Request, response: Response) {
    try {
    } catch (error) {
      LogController.writeLog(
        "Exception in Moments Controller - getHighResImage",
        error
      );
    }
  }
  /**
   * getLowResImage
   * @param request
   * @param response
   */
  static getLowResImage(request: Request, response: Response) {
    try {
    } catch (error) {
      LogController.writeLog(
        "Exception in Moments Controller - getLowResImage",
        error
      );
    }
  }
}
