function a(){
    b()
    console.log('A')
    return;
}
function b(){
    c();
    setTimeout(()=>{console.log('B');},1000);    
    return;
}
function c(){
    console.log('C')
    return;
}

a();