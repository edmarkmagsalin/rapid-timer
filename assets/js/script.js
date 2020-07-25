const colons = document.querySelectorAll('.colon');

const currentH = document.querySelector('.current .hour');
const currentM = document.querySelector('.current .minute');

const readingH = document.querySelector('.reading .hour');
const readingM = document.querySelector('.reading .minute');

const minutesToAdvance = 15;
setInterval(() => {
    const now = new Date(Date.now());
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    updateCurrent (currentHour, currentMinute);

    const nowAdvanced = new Date((Date.now()+(15*60000)));
    const readingHour = nowAdvanced.getHours();
    const readingMinute = nowAdvanced.getMinutes();
    updateReading (readingHour, readingMinute);

    // handle appearance of colon
    colons.forEach(colon => {
        colon.classList.toggle('hide');
    });
}, 1000)

function updateCurrent (hour, minutes) {
    if(hour > 12) {
        hour-=12;
    }
    currentH.innerHTML = `${hour < 10 ? 0 : ''}${hour}`;
    currentM.innerHTML = `${minutes < 10 ? 0 : ''}${minutes}`;
}

function updateReading (hour, minutes) {
    if(hour > 12) {
        hour-=12;
    }
    readingH.innerHTML = `${hour < 10 ? 0 : ''}${hour}`;
    readingM.innerHTML = `${minutes < 10 ? 0 : ''}${minutes}`;
}