DROP PROCEDURE IF EXISTS mugenjo.`PKG_MANAGEUSER.PRC_UPDATEUSER`;
CREATE PROCEDURE mugenjo.`PKG_MANAGEUSER.PRC_UPDATEUSER`(
  IN v_json_object VARCHAR(255),
  OUT o_success     VARCHAR(255),
  OUT o_message     VARCHAR(1000)
)
BEGIN

  DECLARE t_uid VARCHAR(255);
  DECLARE v_uid VARCHAR(255);
  DECLARE v_displyid VARCHAR(255);
  DECLARE v_fname VARCHAR(255);
  DECLARE v_lname VARCHAR(255);
  DECLARE v_email VARCHAR(255);
  DECLARE v_password VARCHAR(255);

  DECLARE EXIT HANDLER FOR SQLEXCEPTION
  
    BEGIN
    
    DECLARE e_errorcode CHAR(5) DEFAULT '00000';
    DECLARE e_errordesc VARCHAR(1000);
    DECLARE e_object VARCHAR(225) DEFAULT 'PKG_MANAGEUSER.PRC_UPDATEUSER';
    DECLARE e_state VARCHAR(100);
    
      ROLLBACK;
        
      GET DIAGNOSTICS CONDITION 1
        e_state = RETURNED_SQLSTATE,
        e_errorcode = MYSQL_ERRNO, 
        e_errordesc = MESSAGE_TEXT;
     
     SET o_success = 'false';
     SET o_message = CONCAT("ERROR ", e_errorcode, " (", e_state, "): ", e_errordesc);
     
     CALL mugenjo.`PKG_UTILITY.PRC_UPDATE_DBLOG`(e_object, e_errorcode, e_errordesc);
     
    END;

  SELECT common_schema.get_option(v_json_object, 'uid'),
         common_schema.get_option(v_json_object, 'displyId'),
         common_schema.get_option(v_json_object, 'fname'),
         common_schema.get_option(v_json_object, 'lname'),
         common_schema.get_option(v_json_object, 'email'),
         common_schema.get_option(v_json_object, 'password')
  INTO v_uid, v_displyid, v_fname, v_lname, v_email, v_password;

  IF v_uid IS NULL 
  THEN
    
    SET t_uid = UUID();
    
     INSERT INTO MUGENJO.TBL_USERS(UID, DISPLYID, USR_FNAME, USR_LNAME, EMAIL, ROLEID, CREATED_DATE, LAST_MODIFIED_DATE)
     VALUES (t_uid, v_displyid, v_fname, v_lname, v_email, 1000, now(), now());
     
      IF v_password IS NOT NULL 
      THEN
        INSERT INTO MUGENJO.TBL_USERS_KEY(UID, `PASSWORD`, CREATED_DATE, LAST_MODIFIED_DATE)
        VALUES (t_uid, v_password, now(), now());
      END IF;
   
    COMMIT;
   
    SELECT UID, DISPLYID ,USR_FNAME, USR_LNAME, EMAIL, ROLEID, CREATED_DATE, LAST_MODIFIED_DATE
    FROM MUGENJO.TBL_USERS
    WHERE UID = t_uid;
  
  ELSE
      
    SET t_uid = v_uid;
         
    UPDATE MUGENJO.TBL_USERS
    SET LAST_MODIFIED_DATE = NOW()
    WHERE UID = t_uid;
    
    IF v_password IS NOT NULL 
    THEN 
      UPDATE MUGENJO.TBL_USERS_KEY uk
      SET uk.LAST_MODIFIED_DATE = NOW(), uk.PASSWORD = v_password;
          
    END IF;
    
    COMMIT;
    
    SELECT UID, DISPLYID ,USR_FNAME, USR_LNAME, EMAIL, ROLEID, CREATED_DATE, LAST_MODIFIED_DATE
    FROM MUGENJO.TBL_USERS
    WHERE UID = t_uid;
    
  END IF;
  
  SET o_success = 'true';
  SET o_message = 'User updated successfully';
  	
END;
