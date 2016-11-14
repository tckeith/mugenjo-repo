USE mugenjo;

CREATE TABLE `tbl_role_master` (
  `ROLEID` int(11) NOT NULL,
  `ROLE_NAME` varchar(100) NOT NULL,
  `CODE` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`ROLEID`,`ROLE_NAME`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


insert into `tbl_role_master`(`ROLEID`,`ROLE_NAME`,`CODE`) values (0,'Administrator','ADMIN');
insert into `tbl_role_master`(`ROLEID`,`ROLE_NAME`,`CODE`) values (1000,'General','GEN');
