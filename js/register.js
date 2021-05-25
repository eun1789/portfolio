var overlap //input 아이디의 입력값
var checkOverlapping_id//중복 확인한 아이디
function checkName(){
    var pattern = /^[A-Za-z0-9]{4,12}$/; //아이디 정규식
    overlap=document.getElementById("userId").value;
    if( overlap==""){
        alert("사용하실 아이디를 입력해주세요.");
        return "#";
    }else if(!(pattern.test(overlap))){
        alert("영문대,소문자 , 숫자 4 ~12 자리로 입력해 주세요.");
        return "#";
    }else{
        alert( overlap+"는(은) 사용가능한 아이디입니다.");
    checkOverlapping_id=overlap; // 중복확인한 아이디=아이디입력값
    
    }
    
}
function complete(){
var regName = /^[가-힣]{2,4}$/; // 이름 정규식
var passwordPatt =  /^.*(?=^.{6,12}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/; //비밀번호 정규식
var pwd = document.getElementById("passWord").value;   //비밀번호입력값을 변수pwd로 넣어줌
var pwdCheck = document.getElementById("passWordCheck").value;
var overlap=document.getElementById("userId").value; // 아이디 입력값에 변수 overlap으로 넣어줌
var userName= document.getElementById("userName").value;
var userEmail= document.getElementById("userEmail").value;
var userEmail= document.getElementById("userEmail2").value;
var userPhone= document.getElementById("userPhone").value;
var userPhone2= document.getElementById("userPhone2").value;
var userPhone3= document.getElementById("userPhone3").value;
var theForm = document.ugreeForm;
theForm.method = "get";
theForm.action = "#";
if(overlap==""){
    alert("아이디를 입력해주세요.");
    return "#";
}else if(checkOverlapping_id!=overlap){
    // 중복확인후 다른 아이디 입력시 한번더 중복확인 시켜주세요
    alert("아이디 중복 확인을 하지 않으셨습니다.\n아이디 중복 확인 후 회원가입이 가능합니다.");
    return "#";
}else if(pwd==""){
    alert("비밀번호를 입력해주세요");
    return "#";
}else if(!passwordPatt.test($("#password").val())){
    alert("6~12자의 영문 대소문자, 숫자 및 특수기호 사용 가능합니다.")
    return "#";
}else if(pwdCheck==""){
    alert("비밀번호확인을 입력해주세요");
    return "#";
}else if(pwd!=pwdCheck){ 
    alert("비밀번호가 일치하지 않습니다.");
    return "#";
}else if(userName==""){
    alert("성명을 입력해주세요.");
    return "#";
}else if(regName.test(userName)==false){
    alert(" 성명은 2글자이상 4글자 이하로 작성해주요.");
    return "#";
}else if(address==""){ 
    alert("주소를 입력해주세요.");
    return "#";
}else if(userEmail==""){ 
    alert("이메일을 입력해주세요.");
    return "#";
}else if(userPhone==""){ 
    alert("휴대폰 앞자리를 입력해주세요.");
    return "#";    
}else if(userPhone2==""){ 
    alert("휴대폰 번호를 입력해주세요.");
    return "#";
}else if(userPhone3==""){ 
    alert("휴대폰 뒷자리를 입력해주세요.");
    return "#";  
}

if(checkOverlapping_id==overlap&&document.getElementById("passWord").value==document.getElementById("passWordCheck").value){  
    theForm.submit();
    alert(overlap+"님 회원가입을 축하합니다.");
}

}