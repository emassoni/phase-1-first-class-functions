function receivesAFunction(spy){
    spy()
}
function returnsANamedFunction(){
    return function multiply2(num1){
        (num1*2)
 }
}
function returnsAnAnonymousFunction(){
    return function(){
        console.log('Anonymous function')
    }
}