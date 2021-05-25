//-------아이디 찾기--------
function findId(){
    var emailChk=document.getElementById("e_mail");  //이메일 체크
    var userName=document.getElementsByName("user_name")[0].value;   //이메일로찾기->이름
    var userEmail=document.getElementsByName("user_email")[0].value; //이메일
    var emailSite=document.getElementsByName("email_site")[0].value;

    var userNamep=document.getElementsByName("user_name")[1].value;  //휴대폰으로찾기->성명
    var userPhone1=document.getElementsByName("user_phone1")[0].value; //폰번호 
    var userPhone2=document.getElementsByName("user_phone2")[0].value;
    var userPhone3=document.getElementsByName("user_phone3")[0].value;
                                                                                             
    
  
     if(emailChk.checked==true){ //이메일이 체크 되있때

         if(userName==""){//성명입력
             alert("성명을 입력해주세요");
         }else if(userEmail==""){//이메일입력
             alert("e_mail을 입력해주세요");
         }else if(emailSite==""){//이메일 사이트 입력
             alert("e_mail메일을 입력해주세요");
         }else if(userName=="scott"&&userEmail=="scott1234"&& emailSite=="naver.com"){//모든 조건이 만족할경우
             alert("scott1234님의 비밀번호는 123*** 입니다.");
         }else if(userName!="scott"||userEmail!="scott1234"|| emailSite!="naver.com"){//하나라도 만족하지 않았을경우
             alert("존재하지 않는 계정입니다.");
         }
   
    

     }

     else if(emailChk.checked==false){//이메일이 체크 되있지 않았을경우
       
       if(userNamep==""){//성명입력
             alert("성명을 입력해주세요");
         }else if(userPhone1==""){//전화번호 앞자리 입력
             alert("전화번호를 입력해주세요");
         }else if(userPhone2==""){//전화번호 중간 입력
             alert("전화번호를 입력해주세요");
         }else if(userPhone3==""){//전화번호 뒷자리 입력
             alert("전화번호를 입력해주세요");
         }else if(userNamep=="scott"&& userPhone1=="010"&&userPhone2=="0000"&&userPhone3=="0000"){//모든 조건이 만족할경우
             alert("scott1234님의 비밀번호는 123*** 입니다.");
         }else if(userNamep!="scott"||userPhone1!="010"||userPhone2!="0000"||userPhone3!="0000"){//하나라도 만족하지 않았을경우
             alert("존재하지 않는 계정입니다.");
         }
     }
 
 }

 //-----------비밀번호찾기----------------

 function findPwd(){
    var emailChk=document.getElementById("e_mail");  //이메일 체크
    var userId=document.getElementsByName("user_id")[0].value; //이메일로찾기->아이디
    var userName=document.getElementsByName("user_name")[0].value;   //이메일로찾기->이름
    var userEmail=document.getElementsByName("user_email")[0].value; //이메일
    var emailSite=document.getElementsByName("email_site")[0].value;

    var userIdp=document.getElementsByName("user_id")[1].value;   //휴대폰으로찾기->아이디
    var userNamep=document.getElementsByName("user_name")[1].value;  //휴대폰으로찾기->성명
    var userPhone1=document.getElementsByName("user_phone1")[0].value; //폰번호 
    var userPhone2=document.getElementsByName("user_phone2")[0].value;
    var userPhone3=document.getElementsByName("user_phone3")[0].value;
                                                                                             
    
  
     if(emailChk.checked==true){ //이메일이 체크 되있때

         if(userId==""){//아이디입력
              alert("아이디를 입력해주세요");
         }else if(userName==""){//성명입력
             alert("성명을 입력해주세요");
         }else if(userEmail==""){//이메일입력
             alert("e_mail을 입력해주세요");
         }else if(emailSite==""){//이메일 사이트 입력
             alert("e_mail메일을 입력해주세요");
         }else if(userId=="scott1234"&&userName=="scott"&&userEmail=="scott1234"&& emailSite=="naver.com"){//모든 조건이 만족할경우
             alert("scott1234님의 비밀번호는 123*** 입니다.");
         }else if(userId!="scott1234"||userName!="scott"||userEmail!="scott1234"|| emailSite!="naver.com"){//하나라도 만족하지 않았을경우
             alert("존재하지 않는 계정입니다.");
         }
   
    

     }

     else if(emailChk.checked==false){//이메일이 체크 되있지 않았을경우
         
         if(userIdp==""){//아이디입력
             alert("아이디를 입력해주세요");
         }else if(userNamep==""){//성명입력
             alert("성명을 입력해주세요");
         }else if(userPhone1==""){//전화번호 앞자리 입력
             alert("전화번호를 입력해주세요");
         }else if(userPhone2==""){//전화번호 중간 입력
             alert("전화번호를 입력해주세요");
         }else if(userPhone3==""){//전화번호 뒷자리 입력
             alert("전화번호를 입력해주세요");
         }else if(userIdp=="scott1234"&&userNamep=="scott"&& userPhone1=="010"&&userPhone2=="0000"&&userPhone3=="0000"){//모든 조건이 만족할경우
             alert("scott1234님의 비밀번호는 123*** 입니다.");
         }else if(userIdp!="scott1234"||userNamep!="scott"||userPhone1!="010"||userPhone2!="0000"||userPhone3!="0000"){//하나라도 만족하지 않았을경우
             alert("존재하지 않는 계정입니다.");
         }
     }
 
 }
