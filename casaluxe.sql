-- Crear base de datos
CREATE DATABASE IF NOT EXISTS CasaLuxe;
USE CasaLuxe;

-- ============================
-- TABLA PROYECTOS
-- ============================

CREATE TABLE proyectos (
                           id INT PRIMARY KEY,
                           titulo VARCHAR(255) NOT NULL,
                           descripcion TEXT NOT NULL,
                           imagen VARCHAR(255) NOT NULL,
                           categoria_id INT NOT NULL,
                           pdf VARCHAR(255) NOT NULL,
                           ubicacion VARCHAR(100) NOT NULL,
                           anio YEAR NOT NULL
);

INSERT INTO proyectos (id, titulo, descripcion, imagen, categoria_id, pdf, ubicacion, anio) VALUES
                                                                                                (1, 'Vivienda Rafalet', 'Vivienda unifamiliar de líneas puras diseñada para abrirse completamente al paisaje mediterráneo.', '699b55a468f77.png', 2, '699b55a46964f.pdf', 'Jávea', 2024),

                                                                                                (2, 'Villa Horizonte', 'Vivienda contemporánea de líneas puras y volúmenes suspendidos, diseñada para potenciar la conexión visual con el entorno natural. La fachada combina planos macizos y grandes superficies acristaladas que permiten una transición fluida entre interior y exterior.', '699b55c1521ea.png', 1, '699b55c152958.pdf', 'Jávea', 2023),

                                                                                                (3, 'Villa Montecillo', 'Diseño contemporáneo con estructura en hormigón visto y amplios ventanales panorámicos.', '699b561f0e77f.png', 4, '699b561f0eeb9.pdf', 'Valencia', 2022),

                                                                                                (4, 'Residencial Benaguacil', 'Edificio plurifamiliar de 12 viviendas con terrazas privadas y eficiencia energética A.', '699b566f3beaf.jpg', 1, '699b566f3c4df.pdf', 'Valencia', 2021),

                                                                                                (5, 'Villa Nocturna Moraira', 'Vivienda contemporánea de líneas puras y volumetría cúbica. El proyecto integra iluminación arquitectónica perimetral, piscina privada y una fuerte conexión entre interior y jardín.', '699b56a83aa97.png', 1, '699b56a83b1b0.pdf', 'Moraira', 2020),

                                                                                                (6, 'Villa Bosque', 'Proyecto integrado en entorno natural con fachada ventilada y materiales sostenibles.', '699b571b53812.png', 1, '699b571b53e97.pdf', 'Castellón', 2019);

-- ============================
-- TABLA USUARIOS
-- ============================

CREATE TABLE usuarios (
                          id INT PRIMARY KEY,
                          email VARCHAR(180) NOT NULL UNIQUE,
                          roles JSON NOT NULL,
                          password VARCHAR(255) NOT NULL,
                          telefono VARCHAR(20),
                          nombre VARCHAR(100),
                          apellidos VARCHAR(150)
);

INSERT INTO usuarios (id, email, roles, password, telefono, nombre, apellidos) VALUES
                                                                                   (1, 'marcosrodriguez130805@gmail.com', '["ROLE_ADMIN"]', '$2y$13$SpI14Xgu1CqHhG6nk/g8O.boNQNs0Oj94mrNeSO8YC6m2xVlEgdMS', '652515760', 'Marcos', 'Rodriguez'),

                                                                                   (2, 'paco01@gmail.com', '[]', '$2y$13$n7t3MNj8PmS/9wA2FnnhpeW6OAkKnjnlGHPQ50Pfpj2YJnK.n01Q6', '123456789', 'Paco', 'Rodriguez'),

                                                                                   (3, 'admin@ejemplo.com', '["ROLE_ADMIN"]', '$2y$13$4ReFBnYgcFE7bM1GL8pz6OgkkkEH9CE6t0w1LpIzYHWDdwbxMsr9a', '600000001', 'Admin', 'Principal'),

                                                                                   (4, 'usuario1@ejemplo.com', '["ROLE_USER"]', '$2y$13$HZIBJQvVCFxdodjD6faT2O8oUI0qN/2IHDCT5oADTJicDLufZ9EUO', '600000002', 'Juan', 'Pérez'),

                                                                                   (7, 'pruebas@probando.com', '[]', '$2y$13$PyvGOixeN2qva3mSfk8yy.4XbhNTVnXIGWXt8V7.SWKH2YLprdFOq', '123123123', 'Hola', 'Prueba');