let timer = document.getElementById('timer')

function SetDate()
{
    let date = new Date()
    let formatDate = ""
    formatDate += (date.getMonth() + 1) + '/'
    formatDate += date.getDate() + '/'
    formatDate += date.getFullYear()
    timer.textContent = formatDate
}

window.addEventListener('load', SetDate())

// window.setInterval(() => {
//     let date = new Date()   
//     let suffix = date.getHours() < 12 ? ' AM' : ' PM'
//     let hours = date.getHours()
//     hours = hours < 12 ? hours : hours - 12
//     hours = hours < 1 ? hours + 12 : hours
//     let minutes = date.getMinutes()
//     minutes = minutes < 10 ? '0' + minutes : minutes
//     let seconds = date.getSeconds()
//     seconds = seconds < 10 ? '0' + seconds : seconds
//     timer.textContent = hours + ':' + minutes + ':' + seconds + suffix
// }, 500)


