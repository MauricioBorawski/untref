import db from "../../Database";

export const getUserByApiKey = (apiKey: string) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT id FROM users WHERE apiKey = ?`;
    try {
      const stmt = db.prepare(query).get(apiKey);

      if (stmt === null || stmt === undefined) {
        reject(false);
      }
      resolve(stmt);
    } catch {
      reject(false);
    }
  });
};
