DROP PROCEDURE IF EXISTS PRC_UPDATE_USER;
CREATE PROCEDURE PRC_UPATE_USER (IN v_uid VARCHAR(255),
                                 IN v_fname VARCHAR(255),
                                 IN v_lname VARCHAR(255),
                                 IN v_email VARCHAR(255),
                                 IN v_password VARCHAR(255))
                                 

BEGIN

DECLARE t_uid VARCHAR(255);

  IF v_uid IS NULL 
  THEN
  
    SET t_uid = UUID();
   
    INSERT INTO MUGENJO.TBL_USERS(UID, UFNAME, ULNAME, UEMAIL, ROLEID, CREATE_DATE, LAST_MODIFIED_DATE)
     VALUES (t_uid, v_fname, v_lname, v_email, 1000, now(), now());
   
    COMMIT;
   
    SELECT UID, UFNAME, ULNAME, UEMAIL, UROLEID, CREATED_DATE, LAST_MODIFIED_DATE
    FROM MUGENJO.TBL_USERS
    WHERE UID = t_uid;
  
  ELSE
    
    SET t_uid = v_uid;
  
    UPDATE MUGENJO.TBL_USERS
    SET LAST_MODIFIED_DATE = NOW(), UEMAIL = v_email
    WHERE UID = t_uid;
    
    IF v_password IS NOT NULL 
    THEN 
      UPDATE MUGENJO.TBL_USERS_KEY uk
      SET uk.LAST_MODIFIED_DATE = NOW(), uk.PASSWORD = v_password;
    
      SELECT UID, UFNAME, ULNAME, UEMAIL, UROLEID, CREATED_DATE, LAST_MODIFIED_DATE
      FROM MUGENJO.TBL_USERS
      WHERE UID = t_uid;
    END IF;
    
  END IF; 
  	
END;
