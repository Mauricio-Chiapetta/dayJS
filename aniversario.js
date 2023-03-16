const dayjs = require("dayjs")

function birthday (date){

    const birthday = dayjs(date)
    const today = dayjs()
    const ageInYears = today.diff(birthday,'year')
    const nextBirthday = birthday.add(ageInYears+1,"year")
    const daysToNextBirthday = nextBirthday.diff(today,'day')
    
    console.log(`Idade: ${ageInYears}`)
    console.log(`próximo aniversário: ${nextBirthday.format("DD/MM/YYYY")}`)
    console.log(`Dias até completar 20 anos: ${daysToNextBirthday} dias`);
}
// dayjs("2003-07-08").format("08/07/2003")
birthday("2003-07-08")