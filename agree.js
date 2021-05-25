//--------------------이용약관------------------------
var checkFlag=false;//-------------전부체크----------------
function check(){
if(checkFlag==false){
    document.ugreeForm.list[0].checked = true;
    document.ugreeForm.list[1].checked = true;
    document.ugreeForm.list[2].checked = true;
    
    checkFlag=true;
}else {

    document.ugreeForm.list[0].checked = false;
    document.ugreeForm.list[1].checked = false;
    document.ugreeForm.list[2].checked = false;

    checkFlag=false;

}
}


function comPlete(){
var theForm = document.ugreeForm;
theForm.method = "get";
theForm.action = "#";
for(var i=0; i<2; i++){
    if(document.ugreeForm.list[i].checked==false){
        alert("동의항목(필수)는 반드시 체크하셔야 다음 단계로 넘어갑니다.");
        return "#";
    }
}
theForm.submit();
return "./register.html";    
}