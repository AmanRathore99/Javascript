-- MySQL dump 10.13  Distrib 8.0.24, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: eshopping
-- ------------------------------------------------------
-- Server version	8.0.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `productRowId` int NOT NULL AUTO_INCREMENT,
  `productId` varchar(30) DEFAULT NULL,
  `productName` varchar(30) DEFAULT NULL,
  `productType` varchar(30) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `manufactureRowId` int NOT NULL,
  `categoryId` varchar(30) DEFAULT NULL,
  `vendorRowId` int DEFAULT NULL,
  `imagePath` varchar(200) DEFAULT NULL,
  `imageName` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`productRowId`),
  UNIQUE KEY `productId` (`productId`),
  KEY `fk_manufactureRowId_in_manufacture_table` (`manufactureRowId`),
  KEY `categoryId` (`categoryId`),
  KEY `vendorRowId` (`vendorRowId`),
  CONSTRAINT `fk_manufactureRowId_in_manufacture_table` FOREIGN KEY (`manufactureRowId`) REFERENCES `manufacture` (`manufactureRowId`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `category` (`categoryId`),
  CONSTRAINT `product_ibfk_2` FOREIGN KEY (`vendorRowId`) REFERENCES `vendor` (`vendorRowId`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (20,'Prd-109','Nokia105','Electronic',1172,2,'cat101',1,'..\\..\\public\\uploads\\IMAGE-1621357762349.jpg','IMAGE-1621357762349.jpg'),(21,'Prd-110','Lenovo-BT105','Electronic',47000,1,'cat-102',1,'..\\..\\public\\uploads\\IMAGE-1621357931706.jpg','IMAGE-1621357931706.jpg'),(22,'Prd-111','AC-Hitachi','Electronic',89000,2,'cat-103',1,'..\\..\\public\\uploads\\IMAGE-1621358019731.png','IMAGE-1621358019731.png'),(23,'Prd-112','Bajaj-Mixer','Electronic',4500,1,'cat101',1,'..\\..\\public\\uploads\\IMAGE-1621358085957.jpg','IMAGE-1621358085957.jpg'),(24,'Prd-113','Macbook192','Electronic',125000,2,'cat-102',1,'..\\..\\public\\uploads\\IMAGE-1621358168091.jpg','IMAGE-1621358168091.jpg'),(25,'Prd-114','OnePlus8Pro','Electronic',70000,2,'cat-103',1,'..\\..\\public\\uploads\\IMAGE-1621358234042.jpg','IMAGE-1621358234042.jpg');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-22 15:22:32
