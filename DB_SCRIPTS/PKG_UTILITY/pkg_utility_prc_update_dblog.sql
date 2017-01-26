DROP PROCEDURE IF EXISTS mugenjo.`PKG_UTILITY.PRC_UPDATE_DBLOG`;
CREATE PROCEDURE mugenjo.`PKG_UTILITY.PRC_UPDATE_DBLOG`(IN v_objectname VARCHAR(255), 
                                                        IN v_errorcode INT(11),
                                                        IN v_errordescription VARCHAR(255))
BEGIN

 DECLARE i_logid INT(11);
 
 SELECT CASE WHEN MAX(LOGID) is null  THEN 0  ELSE MAX(LOGID) + 1 END
 INTO i_logid
 FROM tbl_db_log;
   
 INSERT INTO mugenjo.tbl_db_log (LOGID, OBJECTNAME, ERRORCODE, ERRORDESCRIPTION, CREATED_DATE)
 VALUES (i_logid, v_objectname, v_errorcode, v_errordescription, now());
	
END;

