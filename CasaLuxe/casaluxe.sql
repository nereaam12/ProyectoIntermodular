-- MariaDB dump 10.19  Distrib 10.4.32-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: CasaLuxe
-- ------------------------------------------------------
-- Server version	12.1.2-MariaDB-ubu2404

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `image` longtext NOT NULL,
  `pdf_path` varchar(255) DEFAULT NULL,
  `location` varchar(255) NOT NULL,
  `year` int(11) NOT NULL,
  `state` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_PROJECT_USER` (`user_id`),
  CONSTRAINT `FK_PROJECT_USER` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (1,2,'Vivienda Rafalet','Vivienda unifamiliar de líneas puras diseñada para abrirse completamente al paisaje mediterráneo.','699b55a468f77.png','699b55a46964f.pdf','Jávea',2024,1),(2,1,'Villa Horizonte','Vivienda contemporánea de líneas puras y volúmenes suspendidos...','699b55c1521ea.png','699b55c152958.pdf','Jávea',2023,1),(3,4,'Villa Montecillo','Diseño contemporáneo con estructura en hormigón visto y amplios ventanales panorámicos.','699b561f0e77f.png','699b561f0eeb9.pdf','Valencia',2022,1),(4,1,'Residencial Benaguacil','Edificio plurifamiliar de 12 viviendas con terrazas privadas y eficiencia energética A.','699b566f3beaf.jpg','699b566f3c4df.pdf','Valencia',2021,1),(5,1,'Villa Nocturna Moraira','Vivienda contemporánea de líneas puras y volumetría cúbica...','699b56a83aa97.png','699b56a83b1b0.pdf','Moraira',2020,1),(6,1,'Villa Bosque','Proyecto integrado en entorno natural con fachada ventilada y materiales sostenibles.','699b571b53812.png','699b571b53e97.pdf','Castellón',2019,1);
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(180) NOT NULL,
  `roles` longtext NOT NULL COMMENT '(DC2Type:json)',
  `password` varchar(255) NOT NULL,
  `telephone` varchar(9) NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_IDENTIFIER_EMAIL` (`email`),
  UNIQUE KEY `UNIQ_TELEPHONE` (`telephone`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'marcosrodriguez130805@gmail.com','[\"ROLE_ADMIN\"]','$2y$13$SpI14Xgu1CqHhG6nk/g8O.boNQNs0Oj94mrNeSO8YC6m2xVlEgdMS','652515760','Marcos','Rodriguez'),(2,'paco01@gmail.com','[]','$2y$13$n7t3MNj8PmS/9wA2FnnhpeW6OAkKnjnlGHPQ50Pfpj2YJnK.n01Q6','123456789','Paco','Rodriguez'),(3,'admin@ejemplo.com','[\"ROLE_ADMIN\"]','$2y$13$4ReFBnYgcFE7bM1GL8pz6OgkkkEH9CE6t0w1LpIzYHWDdwbxMsr9a','600000001','Admin','Principal'),(4,'usuario1@ejemplo.com','[\"ROLE_USER\"]','$2y$13$HZIBJQvVCFxdodjD6faT2O8oUI0qN/2IHDCT5oADTJicDLufZ9EUO','600000002','Juan','Pérez'),(7,'pruebas@probando.com','[]','$2y$13$PyvGOixeN2qva3mSfk8yy.4XbhNTVnXIGWXt8V7.SWKH2YLprdFOq','123123123','Hola','Prueba');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-02-25 15:35:37
