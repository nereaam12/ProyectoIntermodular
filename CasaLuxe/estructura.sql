-- =========================
-- Inserts en tabla: user
-- =========================

INSERT INTO user (email, roles, password, telephone, name, surname) VALUES
                                                                        (
                                                                            'admin@ejemplo.com',
                                                                            '["ROLE_ADMIN"]',
                                                                            '$2y$10$Z9H1xq5HkQy6MZqP8Qe7tOe3RZyqH9H6qkXn9lH5cFz1xZr7x8P2e',
                                                                            '600000001',
                                                                            'Admin',
                                                                            'Principal'
                                                                        ),
                                                                        (
                                                                            'usuario1@ejemplo.com',
                                                                            '["ROLE_USER"]',
                                                                            '$2y$10$K8mHcPZ0pQ9PZrXH6MZJHeH1R7RkZK1GxN9xP9H6PZ5H8k9H7F6K2',
                                                                            '600000002',
                                                                            'Juan',
                                                                            'Pérez'
                                                                        ),
                                                                        (
                                                                            'usuario2@ejemplo.com',
                                                                            '["ROLE_USER"]',
                                                                            '$2y$10$F7ZxP8H6MZP9KQyRZ0H1xH5Z9HcPZrK8M9H6xP9Gx1R7RkZK1Gx',
                                                                            '600000003',
                                                                            'Laura',
                                                                            'Gómez'
                                                                        );
