CREATE DATABASE apiempleados;


CREATE TABLE empleados(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    documento VARCHAR(15) UNIQUE,
    correo TEXT UNIQUE,
    rol VARCHAR(20),
    isBoos BOOLEAN DEFAULT FALSE
);

INSERT INTO empleados (nombre,apellido,documento,correo,rol,isBoos) values
    ('empleado1','uno','12345','empleado1@gmail.com','empleado','false'),
    ('empleado2','dos','56789','empleado2@gmail.com','supervisor','false'),
    ('empleado3','tres','01234','empleado3@gmail.com','administrativo','true'),
    ('empleado4','cuatro','54321','empleado4@gmail.com','director','true');