import db from ".";

db.run(`DROP TABLE IF EXISTS users`);
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    apiKey TEXT NOT NULL UNIQUE,
    userId TEXT NOT NULL UNIQUE
  )
`);

db.run(`DROP TABLE IF EXISTS products`);
db.run(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    price REAL NOT NULL,
    stock INTEGER NOT NULL DEFAULT 0,
    userId TEXT NOT NULL,
    FOREIGN KEY (userId) REFERENCES users(userId)
  )
`);
db.run(`
  INSERT INTO products (name, description, price, stock, userId) VALUES
('Laptop Gamer', 'Laptop con GPU dedicada y 16GB RAM', 1200.99, 5, 'user1'),
('Auriculares Bluetooth', 'Auriculares inalámbricos con cancelación de ruido', 89.50, 20, 'user1'),
('Teclado Mecánico', 'Teclado con switches azules retroiluminado', 65.00, 15, 'user2'),
('Silla Ergonómica', 'Silla de oficina con soporte lumbar ajustable', 210.75, 7, 'user2'),
('Mouse Gamer', 'Mouse RGB con 8 botones programables', 45.99, 25, 'user3'),
('Monitor 27"', 'Monitor IPS Full HD 144Hz', 300.00, 10, 'user3'),
('Disco SSD 1TB', 'Almacenamiento rápido NVMe', 130.20, 12, 'user4'),
('Smartwatch', 'Reloj inteligente con monitoreo cardíaco', 199.90, 8, 'user4'),
('Cámara Web HD', 'Webcam 1080p con micrófono incorporado', 55.00, 18, 'user5'),
('Impresora Multifunción', 'Imprime, escanea y copia', 149.99, 6, 'user5'),
('Tablet 10"', 'Pantalla táctil con 64GB de almacenamiento', 249.00, 9, 'user6'),
('Cafetera Automática', 'Cafetera espresso con espumador de leche', 175.50, 4, 'user6'),
('Microondas', 'Microondas digital 700W', 99.00, 11, 'user7'),
('Parlante Portátil', 'Altavoz Bluetooth resistente al agua', 59.95, 14, 'user7'),
('Bicicleta Urbana', 'Bicicleta con cuadro de aluminio liviano', 450.00, 3, 'user8')
  `)

db.run(`DROP TABLE IF EXISTS transactions`);
db.run(`
  CREATE TABLE IF NOT EXISTS transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId TEXT NOT NULL,
    date TEXT NOT NULL,
    FOREIGN KEY (userId) REFERENCES users(userId)
  )
`);

db.run(`DROP TABLE IF EXISTS transaction_products`);
db.run(`
  CREATE TABLE IF NOT EXISTS transaction_products (
    transactionId INTEGER NOT NULL,
    productId INTEGER NOT NULL,
    quantity INTEGER NOT NULL DEFAULT 1,
    PRIMARY KEY (transactionId, productId),
    FOREIGN KEY (transactionId) REFERENCES transactions(id),
    FOREIGN KEY (productId) REFERENCES products(id)
  )
`);

db.close();