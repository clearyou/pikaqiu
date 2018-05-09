!function(){
    function writeCode(prefix, code, fn){
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id =setInterval (()=>{
            n+=1
            container.innerHTML = code.substring(0,n)
            styleTag.innerHTML = code.substring(0,n)
            container.scrollTop = container.scrollHeight
            if(n >= code.length){
                window.clearInterval(id)
                fn && fn.call()
            }
        },20)
    }
    let code=`
    带你们画一只皮卡丘
    *{
        margin:0px;
        padding:0px;
        box-sizing: border-box;
    
    }
    *::before{
        box-sizing: border-box;
    }
    *::after{
        box-sizing: border-box;
    }
    .preview{
        height: 50vh;
        /* border: 1px solid green; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #fee433;
    
    }
    /* .preview-wrapper{
        background: white;
        flex-grow: 1;
        height: 50%;
    }*/
    .code-wrapper{
        
        height: 50vh; 
    } 
    #code{
        height:100%;
        overflow:hidden;
    }
    .wrapper{
        width:100%;
        height:165px;
        /* border: 1px solid red; */
        position: relative;
    }
    .nose{
        width: 0px;
        height: 0px;
        /* background: black; */
        border-style: solid;
        border-width: 12px;
        border-color: black transparent transparent;
        position: absolute;
        border-radius: 12px;
        left: 50%;
        top: 28px;
        margin-left: -12px;
    }
    .eye{
        width: 49px;
        height: 49px;
        background: #2e2e2e;
        position: absolute;
        border-radius: 50%;
        border: 2px solid #000000;
    
    }
    .eye::before{
        content: "";
        display: block;
        width: 24px;
        height: 24px;
        background: white;
        position: absolute;
        border-radius: 50%;
        left: 6px;
        top: 2px;
    }
    .eye.left{
        right: 50%;
        margin-right: 90px;
    }
    .eye.right{
        left: 50%;
        margin-left: 90px;
    }
    .face{
        width: 68px;
        height:68px;
        background: #fc0d1c;
        border: 2px solid black;
        border-radius: 50%;
        position: absolute;
    }
    .face.left{
        right:50%;
        top: 85px;
        margin-right: 116px;
        /* background: black; */
    
    }
    .face.right{
        left:50%;
        top: 85px;
        margin-left: 116px; 
    }
    .upperlip{
        border: 1px solid red;
        height: 20px;
        width: 80px;
        border: 3px solid black;
        position: absolute;
        top:50px;
        background: #fee433;
    
    }
    .upperlip.left{
        right: 50%;
        border-bottom-left-radius: 45px 20px;/*属性的长度值和百分比值定义四分之一椭圆（定义外部边框边缘的边角形状）的半径（radii）。第一个值是水平半径，第二个值是垂直半径。如果省略第二个值，则复制第一个值。如果长度为零，则边角为方形，而不是圆形。水平半径的百分比值参考边框盒的宽度，而垂直半径的百分比值参考边框盒的高度。*/
        border-top:none;
        border-right: none;
        transform: rotate(-20deg);
        
    }
    .upperlip.right{
        left: 50%;
        border-bottom-right-radius: 45px 20px;
        border-top:none;
        border-left: none;
        transform: rotate(20deg);
        
    }
    .lowerlip-wrapper{
        height: 109px;
        width: 300px;
        bottom: 0;
        position: absolute;
        left: 50%;
        margin-left: -150px;
        /* z-index: -1; */
        overflow: hidden;
    
    }
    .lowerlip{
        width:300px;
        height: 3500px;
        background: #990513;
        border-radius: 200px/2000px;
        border: 2px solid black;
        position: absolute;
        bottom: 0;
        overflow: hidden;
        
    }
    .lowerlip::after{
        content: "";
        position: absolute;
        width: 100px;
        height: 100px;
        background: #fc4a62;
        bottom: -20px;
        left: 50%;
        margin-left: -50px;
        border-radius: 50%;
    }
    p{
         position: absolute;
         top: 400px;
         left: 50%;
         margin-left:-50px;
    }
    皮卡丘画完了`
    writeCode('',code)
} .call()


