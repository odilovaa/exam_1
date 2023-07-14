function currying(a) {
    return (b) => {
        if(b)
        {
            return currying(a+b)
        }
        else
        {
            return a
        }
    }
    
}                                                                                

console.log(currying(1)(2)(3)(4)(5)(6)(7)(8)(9)());