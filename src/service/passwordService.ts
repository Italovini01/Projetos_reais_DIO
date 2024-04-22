export default function generatePass(){
    let password: string = ''
    let characters:string = 'Aa@$#123456789abcdefghijklmnopqrstwvxyz!'
    let passwordLength = 10
    for(let index =0; index < 10; index++){
        password += characters.charAt(
        Math.floor(Math.random() * characters.length)
        )
    }
    return password
}