import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

export const db = await open({
  filename: './database.db',
  driver: sqlite3.Database
})

await db.exec(`
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
    data_compra TEXT
  );
`)
