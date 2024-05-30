// 
var obj={
    name:'1'
}
function foo(){
    console.log(this.name);
}
var name='abc';
foo();
foo.apply(obj)