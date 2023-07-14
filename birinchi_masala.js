function secar_siphier(str = "") 
{
    let alpha = ['a','b','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z',"o'","g'",'sh','ch','ng']
    let result = ""

    for(let i = 0; i<str.length; i++)
    {
        str = str.toLowerCase()
        let index
        if(alpha.includes(str[i]))
        {
            if(str[i] == 's' && str[i+1] == 'h')
            {
                index = 26
            }
            else if(str[i] == 'c' && str[i+1] == 'h')
            {
                index = 27
            }
            else if(str[i] == 'n' && str[i+1] == 'g')
            {
                index = 28
            }
            else if(str[i] == 'o' && str[i+1] == "'")
            {
                index = 24
            }
            else if(str[i] == 'g' && str[i+1] == "'")
            {
                index = 25
            }
            else
            {
                index = alpha.indexOf(str[i])
            }

            index += 5
            if(index > alpha.length-1)
            {
                index -= (alpha.length-1)
                result = result.concat(alpha[index])
            }
            else
            {
                result = result.concat(alpha[index])
            }

        }

        else
        {
            result = result.concat(str[i])
        }
    }

    return result
}

let str = prompt("Sozni kiriting :")
console.log(secar_siphier(str));