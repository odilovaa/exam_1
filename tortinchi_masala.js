function name(a) 
{
    return +a+1
}


String = function mapInStr(callback) 
{
    let result = ""
    for(let i=0; i<str.length; i++)
    {
        result = result.concat(callback(str[i],i))
    }
    return result
}

let str = "12345678"
str.mapInStr(name)
