import { response } from "express";
import { db, metaData, tables } from "../../environment/meta-data";

export class MomentService {
  /**
   * postMomentsDetails service method
   * @param bodyContent
   * @param ref_id
   * @returns
   */
  static postMomentsDetails(bodyContent: any, ref_id: string) {
    const { profile_id, description, date, tags } = bodyContent;
    let postMoment = true;
    if (!profile_id) postMoment = false;
    return db.connect().then(async (client) => {
      try {
        const insertedData = await client.query(
          `INSERT INTO ${tables.momentsTable} (ref_id, description, profile_id, date, tags) VALUES ($1, $2, $3, $4, $5) RETURNING ref_id`,
          [ref_id, description, profile_id, date, tags]
        );
        client.release();
        return await new Promise((resolve, reject) => {
          if (postMoment) {
            resolve({
              momentCreated: true,
              message: metaData.message.moments.momentsCreatedSuccess,
              data: {
                ref_id: insertedData.rows[0].ref_id,
              },
            });
          } else {
            resolve({
              momentCreated: false,
              message: metaData.message.moments.momentsCreatedFailure,
              data: {},
            });
          }
        });
      } catch (error) {
        client.release();
        response.status(500).send(metaData.message.serverError);
      }
    });
  }

  static getMomentDetails(ref_id: string) {
    return db.query(`SELECT * FROM ${tables.momentsTable} WHERE ref_id = $1`, [
      ref_id,
    ]);
  }

  // static updateMomentDetails(ref_id: string, data: any) {
  //   const { description } = data;
  //   return db.query(
  //     `UPDATE ${tables.momentsTable} SET description = $1 WHERE ref_id = $2`,
  //     [description, ref_id]
  //   );
  // }

  // static deleteMoments(ref_id: string) {
  //   return db.query(`DELETE FROM ${tables.momentsTable} WHERE ref_id = $1`, [
  //     ref_id,
  //   ]);
  // }
}
