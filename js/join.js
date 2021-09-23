window.onload = function(){
    
$('#login-btn').click(e => {
    // console.log('로컬 스토리지에서 비교하여 검사하기')
    const $id = $('#input-id');
    const $pwd = $('#input-pw');

    // console.log($id.val())
    // console.log($pwd.val())
    if($id.val() == '') return;

    const userArr = JSON.parse(localStorage.getItem('users'));
    console.log(userArr);


    let flag=false;

    for (let i = 0; i < userArr.length; i++) {
        if ($id.val() == userArr[i]['id']) {
            flag=true;
            if ($pwd.val() == userArr[i]['pwd']) {
                alert('로그인 성공');
                $id.val('')
                $pwd.val('')
                break;
            } else {
                alert('비밀번호가 일치하지 않습니다.')
                $pwd.select();
                break;
            }
        } else {
            $id.select();

        }
    }
   
    if(!flag){
        alert('미등록 아이디입니다.')
    }
});

};