/**
 * Created by Administrator on 2017/4/15.
 */
$(function () {
    let lis=$('.tuwen>ul>li');
    let xxk=$('.xxk');

    console.log(lis,xxk)
    for (let i=0;i<lis.length;i++){
        lis[i].onmouseover=function () {
            for(let j=0;j<xxk.length;j++){
                xxk[j].style.display='none';
            }
            xxk[i].style.display='block';
        }

    }



})