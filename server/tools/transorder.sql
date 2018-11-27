
--
-- Database: `cAuth`
--
-- --------------------------------------------------------


--
-- 表的结构 `transorder`
--
CREATE TABLE `transorder` (
  `order_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `company`varchar(100) NOT NULL,
  `trans_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `truck_license` varchar(100) NOT NULL,
  `truck_source` varchar(100) NOT NULL,
  `freight_unit`int(11) NOT NULL,
  `trans_amount`int(11) NOT NULL,
  `arrival_date` datetime NULL DEFAULT NULL,
  `arrival_amount`int(11) DEFAULT NULL,
  `freight_payed`char(1) DEFAULT '0',
  `sale_unit` int(11) DEFAULT NULL,
  `order_status` int(11) DEFAULT '1',
  `income` int(11) DEFAULT NULL,
  `predict_income` int(11) DEFAULT NULL COMMENT '为添加出库时间+7的时间',
  `income_date` datetime NULL DEFAULT NULL,
  	PRIMARY KEY (`order_id`),
  	KEY `order_id` (`order_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

