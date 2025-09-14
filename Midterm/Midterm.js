let timer = document.getElementById('timer')
let currentMode = document.getElementsByTagName('html')[0].getAttribute('data-theme')

function SetDate()
{
    let date = new Date()
    let formatDate = ""
    formatDate += (date.getMonth() + 1) + '/'
    formatDate += date.getDate() + '/'
    formatDate += date.getFullYear()
    timer.textContent = formatDate
}

function SetTheme()
{
    if (currentMode == 'light')
    {
        currentMode = 'dark'
    }
    else
    {
        currentMode = 'light'
    }
    document.getElementsByTagName('html')[0].setAttribute('data-theme', currentMode)
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

// Accordions

document.addEventListener('DOMContentLoaded', () => {

    const accordionBtns = document.querySelectorAll(".accordion-btn")

    const accordionIcons = document.querySelectorAll(".accordion-icon")

    const accordionContents = document.querySelectorAll('.accordion-content')

    accordionBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            toggleAccordion(index)
        })
    })

    function toggleAccordion(index) {
        // accordionIcons.forEach((icon, i) => {
        //     if (i === index) {
        //         icon.classList.toggle("rotate-45");
        //     } else {
        //         icon.classList.remove("rotate-45");
        //     }
        // });
        accordionContents.forEach((content, i) => {
            if (i === index) {
                content.classList.toggle("hidden")
                // content.style.maxHeight = content.scrollHeight + 'px'
                content.classList.toggle('max-h-100')
                content.classList.toggle('max-h-0')
            } else {
                content.classList.add("hidden")
                // content.style.maxHeight = '0'
                content.classList.remove('max-h-100')
                content.classList.add('max-h-0')
            }
        });
    }

})
