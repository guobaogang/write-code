Function.prototype.myApply = function (context, arr) {
    var context = context || window;
    context.fn = this;
    var result;
    if(!arr){
        result = context.fn()
    }else{
        var args = [];
        for (var index = 0; index < arr.length; index++) {
            args.push('arr[' + index + ']')
        }
        var str = 'context.fn(' + args.join() + ')';
        console.log(str);
        result = eval(str);
    }    
    delete context.fn;
    return result;
}

var obj = {
    a: 1
}

function bar(name, age) {
    return {
        name,
        age,
        a: this.a
    }
}

console.log(bar.myApply(obj))