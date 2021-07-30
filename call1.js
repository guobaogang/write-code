Function.prototype.myCall = function (context) {
    console.log(this);
    var fn = Symbol()
    context[fn] = this;
    console.log(context);
    context[fn]();
    delete context[fn];
}


var obj = {
    a: 1,
    fn: 123
}

function bar(){
    console.log(this.a);
}

bar.myCall(obj)

console.log(obj);