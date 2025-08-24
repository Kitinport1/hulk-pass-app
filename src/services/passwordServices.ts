export default function generatePass(){
  let password: string = ''
  let characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*'
  let passwnordLenght = 8

  for(let index = 0; index < passwnordLenght; index++){
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    )
  }

  return password

}

