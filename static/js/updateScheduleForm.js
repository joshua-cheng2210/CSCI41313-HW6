function validateForm() {
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;

    if (startTime >= endTime) {
        alert('your end time is before your start time. please change.');
        return false;
    }
    return true;
}

async function onSubmit(event){
    event.preventDefault(); 
    if (!validateForm()) {
        return; 
    }
    // const form = event.target;
    // const scheduleId = form.dataset.id;
    const scheduleIdElement = document.getElementById('schedule-id-display');
    const scheduleId = scheduleIdElement ? scheduleIdElement.textContent : null;
    
    const eventName = document.getElementById('event').value; 
    const day = document.getElementById('day').value;

    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;

    const phone = document.getElementById('phone').value;
    const location = document.getElementById('location').value; 
    const url = document.getElementById('url').value; 

    const formData = {
        event: eventName,
        day: day,
        start: startTime,
        end: endTime,
        phone: phone,
        location: location,
        url: url
    };

    try {
        console.log(`on client update schedule form :     /updateSchedule/${scheduleId}`)
        const response = await fetch(`/updateSchedule/${scheduleId}`, { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(formData), 
        });

        if (!response.ok) {
            const errorData = await response.json(); 
            throw new Error(`status: ${response.status}`);
        }

        const result = await response.json(); 

        if (result.success) {
            alert('schedule added :) view it in /myschedule.js');
            window.location.href = '/myschedule.html'
        } 

    } catch (err) {
        throw err
    }     
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("updateSchedule-form")
    if (form){
        form.addEventListener("submit", onSubmit)
    }
});
