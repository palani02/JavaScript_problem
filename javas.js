// function isleap(num)
// {
//     if(num%4==0 && num%400==0)
//     {
//         return 1;
//     }
//     else if(num%100!=0){
// return 0;
//     }
//     else{
//         return 0;
//     }
// }
function tables(num,upto)
{
    upto = 10;
    for(var i=1; i<=upto; i++)
    {
        console.log(num + "*" + i + "="+ num*i)
    }
}
// function find_color(shape)
// {
//     switch(shape)
//     {
//         case "circle":
//             console.log("circle")
//             break;

//         case "square":
//             console.log("square")
//             break;

//         case "Triangle":
//             console.log("Triangle")
//             break;
//     }
// }
// //find the fibo

// // sum upto n
function sum_element(size)
{
    let tot = 0;
    do
    {
        tot+=size;
        size--;
    }while(size>=0)
    return tot;
}
// // leap or not
// let res = isleap.call(this,2000)
// // console.log(res);
// if(res==1){
//     console.log("YES its a Leap Year")
// }
// else{
//     console.log("NO is not a Leap")
// }
// // switch
// let shape_res = find_color.call(this,"circle");
// let a = 500;
// (a>100)?console.log("Its greater"):console.log("No its less")

tables.call(this,7,10)
let value = sum_element.call(this,5)
console.log("sum of num = " + value)

function find_fibo()
{
    var size = 10;
    let v1,v2,v3;
    v1 = v2 = 1;
    console.log(0);
    console.log(v1);
    console.log(v2);
    for(let i=3; i<=size; i++)
    {
         v3 = v1+v2;
        console.log(v3);
        v1 = v2;
        v2 = v3;
    }
}
find_fibo.call()
function add(a,b)
{
    let c = a+b;
    console.log("sum = "+c);
}
add(5,5);
