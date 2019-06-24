-- MySQL dump 10.17  Distrib 10.3.16-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: challenge_employees_ec
-- ------------------------------------------------------
-- Server version	10.3.16-MariaDB

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
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `employees` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `personal_identification` varchar(13) NOT NULL,
  `names` varchar(255) NOT NULL,
  `surnames` varchar(255) NOT NULL,
  `type_identification` int(1) NOT NULL DEFAULT 1,
  `id_province` varchar(5) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `observation` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `id_working_province` varchar(5) DEFAULT NULL,
  `salary` double(10,2) DEFAULT NULL,
  `part_time` varchar(2) DEFAULT 'N',
  `labor_observation` varchar(255) DEFAULT NULL,
  `registration_date` datetime DEFAULT NULL,
  `status` int(1) DEFAULT 1,
  PRIMARY KEY (`id`,`personal_identification`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` VALUES (1,'1723997811','Edison','Calderon',1,'2',NULL,'','ninguna','','2019-06-18 05:00:00',NULL,'Desarrollador','','',1000.00,'N','NA','2019-06-24 09:12:38',1),(2,'120750120','Liz','Arias',1,'3',NULL,'','','','2019-06-24 05:00:00',NULL,'Maestra','','',1000.00,'N','','2019-06-24 09:27:41',1);
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `province`
--

DROP TABLE IF EXISTS `province`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `province` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `name_province` varchar(255) NOT NULL,
  `province_capital` varchar(255) DEFAULT NULL,
  `province_description` varchar(255) DEFAULT NULL,
  `province_population` varchar(255) DEFAULT NULL,
  `province_surface` double(10,2) DEFAULT NULL,
  `province_latitude` varchar(50) DEFAULT NULL,
  `province_length` varchar(50) DEFAULT NULL,
  `id_region` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `province`
--

LOCK TABLES `province` WRITE;
/*!40000 ALTER TABLE `province` DISABLE KEYS */;
INSERT INTO `province` VALUES (1,'Azuay','Cuenca','Es llamada la Atenas del Ecuador por su arquitectura, su diversidad cultural, su aporte a las artes, ciencias y letras ecuatorianas y por ser el lugar de nacimiento de muchos personajes ilustres de la sociedad\r\necuatoriana','569.42',122.00,'-2.902222','-79.005261','1'),(2,'Bolivar','Guaranda','Bolívar es una provincia del centro de Ecuador, en la cordillera occidental de los Andes. Su capital es la ciudad de Guaranda. La Provincia de Bolívar se llama así en honor al Libertador Simón Bolívar.','183641',3254.00,'-1.6','-79','1'),(3,'Cañar','Azoguez','La provincia destaca como uno de los sitios turísticos más importantes del país, destacándose entre otros la Fortaleza de Ingapirca, la Laguna de Culebrillas y la ciudad de Azogues.','33848.00',3908.00,'-2.733333','-78.833333','1');
/*!40000 ALTER TABLE `province` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
INSERT INTO `status` VALUES (1,'ACTIVO'),(2,'RETIRADO');
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-06-24  4:47:28
