
--
-- Database: `cAuth`
--
-- --------------------------------------------------------

--
-- 表的结构 `user`
--
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_openid` varchar(255) NOT NULL,
  `nick_name` varchar(255) NOT NULL,
  `user_phone` varchar(255) DEFAULT NULL,
  `login_count` int(11) NOT NULL,
  `latitude` varchar(50) DEFAULT NULL,
  `longitude` varchar(50) DEFAULT NULL,
  `province` varchar(50) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `area` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
-- --------------------------------------------------------

--
-- 表的结构 `auction`
--
DROP TABLE IF EXISTS `auction`;
CREATE TABLE `auction` (
  `auction_id` int(11) NOT NULL,
  `create_year` varchar(255) NOT NULL,
  `create_month` varchar(255) NOT NULL,
  `create_day` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `trans_all` int(11) NOT NULL,
  `trans_now` int(11) NOT NULL,
  `waterin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 表的结构 `auction_user`
--
DROP TABLE IF EXISTS `auction_user`;
CREATE TABLE `auction_user` (
  `auction_id` int(11) NOT NULL,
  `user_openid` varchar(100) NOT NULL,
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
















--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_openid`);

--
-- Indexes for table `auction`
--
ALTER TABLE `auction`
  ADD PRIMARY KEY (`auction_id`);

--
-- Indexes for table `auction_user`
--
ALTER TABLE `auction_user`
  ADD PRIMARY KEY (`auction_id`) USING BTREE,
  ADD KEY `user_link` (`user_openid`);


--
-- 使用表AUTO_INCREMENT `auction_user`
--
ALTER TABLE `auction_user`
  MODIFY `auction_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

