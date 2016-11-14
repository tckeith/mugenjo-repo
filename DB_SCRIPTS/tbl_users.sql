USE mugenjo;

CREATE TABLE `tbl_users` (
  `UID` varchar(256) NOT NULL COMMENT 'User Id',
  `UFNAME` varchar(256) NOT NULL,
  `ULNAME` varchar(256) NOT NULL,
  `UEMAIL` varchar(256) NOT NULL,
  `ROLEID` int(4) NOT NULL COMMENT 'User Role Id ',
  `STATUS` int(11) DEFAULT NULL COMMENT 'Online Status',
  `CREATE_DATE` datetime NOT NULL,
  `LAST_MODIFIED_DATE` datetime NOT NULL,
  PRIMARY KEY (`UID`),
  KEY `FK_ROLD_ID` (`ROLEID`),
  CONSTRAINT `FK_ROLD_ID` FOREIGN KEY (`ROLEID`) REFERENCES `tbl_role_master` (`ROLEID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


insert into `tbl_users`(`UID`,`UFNAME`,`ULNAME`,`UEMAIL`,`ROLEID`,`STATUS`,`CREATE_DATE`,`LAST_MODIFIED_DATE`) values ('f12a0fa4-aa89-11e6-b438-5ce0c5c68df0','Tremain','Keith','tckeith7@gmail.com',0,null,'2016-11-14 11:46:51','2016-11-14 11:46:51');
