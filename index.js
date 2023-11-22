
function updateClock(){

    const present_time = new Date();
    const hours = present_time.getHours().toString().padStart(2, '0');
    const minutes = present_time.getMinutes().toString().padStart(2, '0');
    const seconds = present_time.getSeconds().toString().padStart(2, '0');
    const dateString = `${hours}:${minutes}:${seconds}`;
    let timeOfDay = '';

    if (hours >= 0 && hours < 6) {
        timeOfDay = "🌜Good night🌛";
    } else if (hours >= 6 && hours < 12) {
        timeOfDay = "🌞Good morning😎";
    } else if (hours >= 12 && hours < 15) {
        timeOfDay = "🌞Good noon😎";
    }
    else if (hours >= 15 && hours < 16) {
        timeOfDay = "🌞Good After-noon😎";
    } else {
        timeOfDay = "🌘Good evening🌘";
    }

    const displayString = `${timeOfDay}`;

    document.getElementById('time-show').textContent = dateString;
    document.getElementById('message-show').textContent = displayString;
}

updateClock();
setInterval(updateClock, 1000);

function showDate() {
    const today = new Date();
  
    // Get day, month, and year
    const day = today.getDate();
    const month = today.getMonth() + 1; 
    const year = today.getFullYear();
  
    const formattedDate = `${day}/${month}/${year}`;
  

    document.getElementById('date-show').textContent = formattedDate;
  }
  
  showDate();