import db from "../../Database";

export const getProductosFromDb = (): Promise<unknown[]> => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM products`;

    try {
      const result = db.prepare(query).all();
      resolve(result);
    } catch {
      reject(new Error("Error al obtener los productos"));
    }
  });
};

export const getProductoById = async (id: number): Promise<unknown> => {
  const query = `SELECT * FROM products WHERE id = ?`;

  try {
    const result = db.prepare(query).get(id);

    return result;
  } catch {
    throw new Error("Error al obtener el producto por ID");
  }
};
