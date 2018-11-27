
--
-- Database: `cAuth`
--
-- --------------------------------------------------------


--
-- 表的结构 `company`
--
CREATE TABLE `company` (
	`company_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '客户id（主键）',
	`company_name`varchar(255) NOT NULL,
	`user_openid` varchar(255) NOT NULL,
	`create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  	PRIMARY KEY (`company_id`),
  	KEY `company_id` (`company_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 表的结构 `truck_source`
--
CREATE TABLE `truck_source` (
	`ts_id` int(11) NOT NULL AUTO_INCREMENT,
	`tsn`varchar(255) NOT NULL,
	`tsp` varchar(255) NOT NULL,
	`user_openid` varchar(255) NOT NULL,
	`create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  	PRIMARY KEY (`ts_id`),
  	KEY `ts_id` (`ts_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

