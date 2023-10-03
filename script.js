const today = new Date
const renderTitle = () => { 
    const hours = today.getHours()
    let titleText
    if (hours < 5) {
        titleText = "Доброй ночи."
    } else if (hours >= 5 && hours <= 11) {
        titleText = "Доброе утро."
    } else if (hours >= 12 && hours <= 16) {
        titleText = "Добрый день"
    } else if (hours >= 17 && hours <= 23) {
        titleText = "Добрый вечер"
    }
    return titleText
};
const getDayOfWeek = () => {
    const dayOfWeek = today.getDay() + 1
    const week = {
        1: 'Понедельник',
        2: 'Вторник',
        3: 'Среда',
        4: 'Четверг',
        5: 'Пятница',
        6: 'Суббота',
        7: 'Воскресенье',
    }
    let dayOfWeekText
    return dayOfWeekText = `Сегодня: ${week[dayOfWeek]}`
    
}
const getTime = () => {
    const hours = today.getHours()
    const minutes = today.getMinutes()
    const seconds = today.getSeconds()
    let timeText
    if (hours >= 0 && hours < 12) {
        timeText = `Текущее время: ${Math.floor(hours / 2)}:${minutes}:${seconds} AM`
    } else if (hours >= 12) {
        timeText = `Текущее время: ${Math.floor(hours / 2)}:${minutes}:${seconds} PM`
    }
    return timeText
}

const newYearRemaining = () => {
    const deadline = new Date('01 january 2024')
    let timeRemaining = (deadline - today.getTime()) / 1000
    return daysText = `До нового года осталось ${Math.floor(timeRemaining / 60 / 60 / 24)} дней` 

}
const render = () => {
    const title = document.createElement('p')
    const today = document.createElement('p')
    const time = document.createElement('p')
    const newYear = document.createElement('p')
    
    title.textContent = renderTitle()
    today.textContent = getDayOfWeek()
    time.textContent = getTime()
    newYear.textContent = newYearRemaining()

    document.querySelector('body').append(title)
    document.querySelector('body').append(today)
    document.querySelector('body').append(time)
    document.querySelector('body').append(newYear)
    

}
render()
// Добрый день (утро, вечер, ночь в зависимости от времени суток)
// Сегодня: Понедельник
// Текущее время: 12:05:15 PM
// До нового года осталось 175 дней