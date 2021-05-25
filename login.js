    


    var loginId;
    var loginPwd;
    var countPwd=1;//비밀번호 시작개수

    function successLogin(){//로그인하기
        var theForm = document.loginForm;
        theForm.method = "get";
        theForm.action = "#";
        
        loginId=document.getElementById("userId").value;
        loginPwd=document.getElementById("userPwd").value;
        if(loginId==""){//입력값이 없을경우
            alert("아이디를 입력해주세요.");
            return "#";

        }else if(loginId!="scott"){//입력값이 scott이 아닐경우
            alert("아이디가 존재하지않거나 틀렸습니다.");
            return "#";
        }else if(loginPwd==""){//입력값이없을경우
            alert("비밀번호를 입력해주세요");
            return "#";
        }else if(loginPwd!="tiger"&&countPwd<5){//비밀번호가 5회미만 틀렸을경우
            alert("비밀번호가"+countPwd+"회 틀렸습니다.\n5회 틀리면 로그인 진행할 수 없습니다.");
            countPwd++
            return "#";
        }else if(loginPwd!="tiger"&&countPwd==5){//비밀번호가 5회 틀렸을경우
            alert("비밀번호가"+countPwd+"회 틀렸습니다.\n관리자에게 문의하세요");
            countPwd++
            return "#";
        }else if(loginId=="scott"&&loginPwd=="tiger"){//아이디와 비밀번호가 일치할경우 로그인 
            alert("scott님께서 로그인 하셨습니다.");
        }
        
        
        if (document.loginForm.saveid.checked == true) { // 아이디 저장을 체크 하였을때
            setCookie("id", document.loginForm.userid.value, 7); //쿠키이름을 id로 아이디입력필드값을 7일동안 저장
        }else { // 아이디 저장을 체크 하지 않았을때
            setCookie("id", document.loginForm.userid.value, 0); //날짜를 0으로 저장하여 쿠키삭제
        }

            
        theForm.submit();
                
    }


  window.onload = function() {//아이디 저장(쿠키)

        if (getCookie("id")) { // getCookie함수로 id라는 이름의 쿠키를 불러와서 있을경우
            document.loginForm.userid.value = getCookie("id"); //input 이름이 id인곳에 getCookie("id")값을 넣어줌
            document.loginForm.saveid.checked = true; // 체크는 체크됨으로
        }

    }

    function setCookie(name, value, expiredays){ //쿠키 저장함수
        var todayDate = new Date();
        todayDate.setDate(todayDate.getDate() + expiredays);
        document.cookie = name + "=" + escape(value) + "; path=/; expires="
                + todayDate.toGMTString() + ";"
    }

    function getCookie(Name) { // 쿠키 불러오는 함수
        var search = Name + "=";
        if (document.cookie.length > 0) { // if there are any cookies
                offset = document.cookie.indexOf(search);
                if (offset != -1) { // if cookie exists
                        offset += search.length; // set index of beginning of value
                        end = document.cookie.indexOf(";", offset); // set index of end of cookie value
                        if (end == -1)
                            end = document.cookie.length;
                            return unescape(document.cookie.substring(offset, end));
                    }
            }
     }   

    
    