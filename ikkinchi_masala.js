function find_ekub(num1,num2) 
{
    let result
    if (num1 > num2)
    {
        result = num1
    }
    else
    {
        result = num2
    }

    for(let i = result; i>i; i--)
    {
        if(num1%i==0 && num2%i==0)
        {
            return i
        } 
    }
}

let num1 = +prompt("num1 ni kiriting")
let num2 = +prompt("num2 ni kiriting")
console.log(find_ekub(num1,num2));