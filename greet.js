let greet = name => {
    let hello = 'Hello,'
    if(name === null) {
        // requirement 2
        return `${hello} my friend.`
    } else if(Array.isArray(name)) {
        
        if(name.length == 2) {
            // requirement 4
            return `${hello} ${name[0]} and ${name[1]}.`
        } else if(name.length >= 2) {

            var AllUpp = []
            var Mixing = []
            name.forEach( value => {
                if(value === value.toUpperCase()){
                    AllUpp.push(value)
                } else {
                    Mixing.push(value)
                }
            })

            var word = `${hello}`

            if(AllUpp.length !== 0) {
                // requirement 6
                for (let index = 0; index < Mixing.length; index++) {
                    const element = Mixing[index];
                    if(Mixing.length - index  == 1) {
                        word += ` and ${element}.`
                    } else {
                        word += ` ${element}`
                    }
                }
                word += ` AND HELLO ${AllUpp[0]}!`
                return word

            } else {
                // requirement 5
                for (let index = 0; index < Mixing.length; index++) {
                    const element = Mixing[index];
                    if(Mixing.length - index  == 1) {

                        word += ` and ${element}.`
                    } else {
                        word += ` ${element},`
                    }
                }

                return word
            }


        }
        
    } else if(name === name.toUpperCase()) {
        // requirement 3
        return `HELLO ${name.toUpperCase()}!`
    } 

    // requirement 1
    return `Hello, ${name}.`
}


module.exports = greet