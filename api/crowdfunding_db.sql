/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80032 (8.0.32)
 Source Host           : localhost:3306
 Source Schema         : crowdfunding_db6

 Target Server Type    : MySQL
 Target Server Version : 80032 (8.0.32)
 File Encoding         : 65001

 Date: 13/10/2024 10:19:05
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `CATEGORYID` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '类别标识',
  `NAME` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '名称'
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('1', 'social impact');
INSERT INTO `category` VALUES ('2', 'medical');
INSERT INTO `category` VALUES ('3', 'Health');
INSERT INTO `category` VALUES ('4', 'education');

-- ----------------------------
-- Table structure for donation
-- ----------------------------
DROP TABLE IF EXISTS `donation`;
CREATE TABLE `donation`  (
  `DONATION_ID` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '捐赠标识',
  `DATE` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '日期',
  `AMOUNT` int NULL DEFAULT NULL COMMENT '金额',
  `GIVER` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '捐赠人',
  `FUNDRAISERID` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '筹款人标识',
  PRIMARY KEY (`DONATION_ID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of donation
-- ----------------------------
INSERT INTO `donation` VALUES ('1728784430500', '1728784430477', 1000, 'hong', 'James');
INSERT INTO `donation` VALUES ('1728784630283', '1728784630269', 12, 'hong', NULL);
INSERT INTO `donation` VALUES ('1728784677521', '1728784677517', 22, 'hong1', NULL);
INSERT INTO `donation` VALUES ('1728784716661', '1728784716657', 11, 'hong', 'James');
INSERT INTO `donation` VALUES ('1728785010988', '1728784716657', 11, 'hong', 'James');

-- ----------------------------
-- Table structure for fundraiser
-- ----------------------------
DROP TABLE IF EXISTS `fundraiser`;
CREATE TABLE `fundraiser`  (
  `FUNDRAISERID` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '募捐者 ID (PK)',
  `ORGANIZER` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '组织者',
  `CAPTION` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '标题',
  `TARGET_FUNDING` int NULL DEFAULT NULL COMMENT '目标资金',
  `CURRENT_FUNDING` int NULL DEFAULT NULL COMMENT '当前资金',
  `CITY` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '城市',
  `ACTIVE` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '活跃状态',
  `CATEGORYID` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '类别',
  `URL` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of fundraiser
-- ----------------------------
INSERT INTO `fundraiser` VALUES ('James', 'James Foundation', 'Providing temporary housing and psychological counseling services for the homeless, raising funds for the operation of shelters during the cold winter months.', 15000000, 10000000, 'beijing', 'Active', '1', './images/001.png');
INSERT INTO `fundraiser` VALUES ('Emily', 'Animal Rescue Association', 'To raise funds for rescuing stray animals, providing veterinary care, and fostering services.', 30000000, 15000000, 'tianjin', 'Active', '2', './images/002.png');
INSERT INTO `fundraiser` VALUES ('Michael', 'Urban Cleanliness Foundation', 'Carry out urban beautification, garbage cleaning, and tree planting activities to improve the ecological environment of the city.', 15000000, 10000000, 'tianjin', 'Active', '3', './images/003.png');
INSERT INTO `fundraiser` VALUES ('Sarah', 'Education Foundation', 'Provide books and learning materials to children in impoverished areas to support their education.', 20000000, 10000000, 'beijing', 'Active', '4', './images/004.png');
INSERT INTO `fundraiser` VALUES ('David', 'Health and Longevity Project', 'Raising funds to conduct community health checks and health seminars to raise residents\' health awareness and prevent diseases.', 15000000, 10000000, 'tianjin', 'Active', '2', './images/005.png');
INSERT INTO `fundraiser` VALUES ('Jessica', 'Children\'s Charitable Organization', 'Provide educational opportunities and life assistance to children from disadvantaged families, helping them achieve their dreams.', 30000000, 15000000, 'beijing', 'Active', '1', './images/006.png');
INSERT INTO `fundraiser` VALUES ('John', 'Art and Culture Organization', 'Support artists\' creations and activities, protect and inherit local culture.', 20000000, 10000000, 'beijing', 'Active', '4', './images/007.png');
INSERT INTO `fundraiser` VALUES ('Ashley', 'Poverty stricken Rural Foundation', 'To raise funds for improving rural infrastructure and sanitation conditions, and to enhance the quality of life of local residents.', 25000000, 20000000, 'tianjin', 'Completed', '3', './images/008.png');
INSERT INTO `fundraiser` VALUES ('Robert', 'International Disaster Relief Organization', 'Provide food, water, and medical assistance to areas affected by natural disasters.', 30000000, 20000000, 'beijing', 'Completed', '2', './images/009.png');
INSERT INTO `fundraiser` VALUES ('Lauren', 'Mental Health Association', 'To raise funds for providing psychological counseling services, with a special focus on mental health education for young people.', 25000000, 15000000, 'tianjin', 'Completed', '4', './images/010.png');
INSERT INTO `fundraiser` VALUES ('James', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

SET FOREIGN_KEY_CHECKS = 1;
