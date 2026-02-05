CREATE TABLE IF NOT EXISTS usuarios (
id INTEGER PRIMARY KEY AUTOINCREMENT,
nome TEXT,
email TEXT,
senha TEXT
);


CREATE TABLE IF NOT EXISTS eventos (
id INTEGER PRIMARY KEY AUTOINCREMENT,
nome TEXT,
data_evento TEXT,
local_evento TEXT,
preco REAL
);


CREATE TABLE IF NOT EXISTS ingressos (
id INTEGER PRIMARY KEY AUTOINCREMENT,
usuario_id INTEGER,
evento_id INTEGER,
data_compra TEXT,
FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
FOREIGN KEY (evento_id) REFERENCES eventos(id)
);


INSERT INTO eventos (nome, data_evento, local_evento, preco) VALUES
('Show de Rock', '2026-03-20', 'Arena Central', 80.00),
('Final do Campeonato', '2026-04-10', 'Estádio Municipal', 120.00);