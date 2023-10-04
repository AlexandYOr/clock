const renderTitle = (now) => { 
    const hours = now.getHours()
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
const getDayOfWeek = (now) => {
    const dayOfWeek = now.getDay() + 1
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
const getTime = (now) => {
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    let timeText
    if (hours >= 0 && hours < 12) {
        timeText = `Текущее время: ${hours}:${minutes}:${seconds} AM`
    } else if (hours >= 12) {
        timeText = `Текущее время: ${Math.floor(hours / 2)}:${minutes}:${seconds} PM`
    }
    return timeText
}
const newYearRemaining = (now) => {
    const deadline = new Date('01 january 2024')
    let timeRemaining = (deadline - now.getTime()) / 1000
    return daysText = `До нового года осталось ${Math.floor(timeRemaining / 60 / 60 / 24)} дней` 

}
const render = () => {
    const title = document.createElement('h1')
    const today = document.createElement('h1')
    const time = document.createElement('h1')
    const newYear = document.createElement('h1')
    
    title.classList.add('title')
    today.classList.add('today')
    time.classList.add('time')
    newYear.classList.add('newYear')

    document.querySelector('body').append(title)
    document.querySelector('body').append(today)
    document.querySelector('body').append(time)
    document.querySelector('body').append(newYear)
    

}
render()
const updateClock = () => {
    const now = new Date
    const title = document.querySelector('.title')
    const today = document.querySelector('.today')
    const time = document.querySelector('.time')
    const newYear = document.querySelector('.newYear')
    title.textContent = renderTitle(now)
    today.textContent = getDayOfWeek(now)
    time.textContent = getTime(now)
    newYear.textContent = newYearRemaining(now)
}
setInterval(updateClock, 1000)
// Добрый день (утро, вечер, ночь в зависимости от времени суток)
// Сегодня: Понедельник
// Текущее время: 12:05:15 PM
// До нового года осталось 175 дней