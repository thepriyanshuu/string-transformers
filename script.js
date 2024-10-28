const lowerCaseOutput = document.querySelector('#lower-case span');
const upperCaseOutput = document.querySelector('#upper-case span');
const camelCaseOutput = document.querySelector('#camel-case span');
const pascalCaseOutput = document.querySelector('#pascal-case span');
const snakeCaseOutput = document.querySelector('#snake-case span');
const kebabCaseOutput = document.querySelector('#kebab-case span');
const trimOutput = document.querySelector('#trim span');
const userInput = document.querySelector('input');

function wordCapitalize (str){
    if(!str) {
        return str
    }
    return str[0].toUpperCase() + str.slice(1, str.length)
}

function capitalizeEachWord(strValue){
    const lowerCaseString = strValue.toLocaleLowerCase()
    const wordsArray = lowerCaseString.split(' ')
    const finalWordsArray = wordsArray.map((word)=>{
        return wordCapitalize(word)
    })
    return finalWordsArray
}

function toCamelCase (string){    
    const lowerCaseString = string.toLocaleLowerCase()
    const wordsArray = lowerCaseString.split(' ')
    const finalArray = wordsArray.map((word, i)=>{
        if(i == 0){
            return word
        }
            return wordCapitalize(word)
    })
    return finalArray.join('')
}

function toPascalCase(string){
    return capitalizeEachWord(string).join('')
}


function toSnakeCase(string){
    const wordsArray = string.split(' ')
    return wordsArray.join('_')
}


function toKebabCase(string){
    return string.replaceAll(' ', '-')
}


function toTrim(string){
    return string.replaceAll(' ', '')
}


userInput.addEventListener('input', ()=>{
    upperCaseOutput.innerText = userInput.value.trim().toUpperCase()
    lowerCaseOutput.innerText = userInput.value.trim().toLocaleLowerCase()
    camelCaseOutput.innerText = toCamelCase(userInput.value.trim())
    pascalCaseOutput.innerText = toPascalCase(userInput.value.trim())
    snakeCaseOutput.innerText = toSnakeCase(userInput.value.trim())
    kebabCaseOutput.innerText = toKebabCase(userInput.value.trim())
    trimOutput.innerText = toTrim(userInput.value.trim())
})


toPascalCase('my name IS pirynahdu')