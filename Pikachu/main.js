! function () {
    var duration = 50

    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        //     let id = setInterval(()=>{
        //         n+=1
        //         container.innerHTML = code.substring(0,n)
        //         styleTag.innerHTML = code.substring(0,n)
        //         container.scrollTop=container.scrollHeight
        //         if(n>=code.length){
        //             window.clearInterval(id)
        //             fn && fn.call()
        //         }
        //     },duration)
        // }
        /* setInterval都可以被setTimeout代替*/
        setTimeout(function run() {
            n += 1
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n < code.length) {
                setTimeout(run, duration);
            } else {
                fn && fn.call()
            }
        }, duration);
    }
    /*
    按钮点击操作 
    */
    $('.actions').on('click', 'button', function (e) {
        let $button = $(e.currentTarget) //获取到关于button的所有信息
        let $speed = $button.attr('data-speed')
        $button.addClass('active').siblings('.active').removeClass('active')
        switch ($speed) {
            case 'slow':
                duration = 100
                break
            case 'normal':
                duration = 30
                break
            case 'fast':
                duration = 1
                break
        }
    })
    let code = `
/*nose*/
.nose{
    width: 0px;
    height: 0px;
    border: 11px solid red;
    border-color: black transparent transparent ;
    border-radius :11px;
    position: absolute;
    top: 28px;
    left: 50%;
    margin-left: -11px;
}
/*eyes*/
.eye{
    width: 49px;
    height: 49px;
    position: absolute;
    background: #2e2e2e;
    border:2px solid #000000;
    border-radius: 50%;
}
.eye::before{
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background: white;
    position: absolute;
    border-radius: 50%;
    left:6px;
    top: -2px;
    border:2px solid #000;
}
.eye.left{
    right: 50%;
    margin-right: 90px;
}
.eye.right{
    left:50%;
    margin-left: 90px;
}
/*face*/
.face{
    position: absolute;
    width: 68px;
    height: 68px;
    border-radius: 50%;
    background: red;
    border: #000 solid 2px;
    top: 50%;
}
.face.left{
    right: 50%;
    margin-right: 113px;
}

.face.right{
    left: 50%;
    margin-left: 113px;
}

/*UpperLip*/

.UpperLip{
    height: 25px;
    width: 80px;
    border: 3px solid black;
    background: #FEE433;
    position: absolute;
    top:47px;
}
.UpperLip.left{
    border-top: none;
    border-right: none;
    border-bottom-left-radius: 40px 20px;
    transform: rotate(-22deg);
    right: 50%;
    z-index:1;
    
}
.UpperLip.right{
    left: 50%;
    border-top: none;
    border-left: none;
    border-bottom-right-radius: 40px 20px;
    transform: rotate(22deg);   
    z-index:1;
}
.LowerLip-wrapper{
    position: absolute;
    left: 50%;
    margin-left: -150px;
    bottom: -53px;
    z-index: 0;
    height: 161px;
    width:300px;
    overflow: hidden;
}
.LowerLip{
    width:300px;
    height: 3500px;
    background: #990513;
    border-radius: 200px/2000px;
    border:4px solid black;
    position: absolute;
    bottom: 0px;
    overflow: hidden;
   
}
.LowerLip::after{
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    margin-left: -71px;
    width: 140px;
    height: 140px;
    background: #FC4A62;
    border-radius: 70px;   
}
`
    writeCode('', code)

}.call()