startButton = document.getElementById("startButton");
reloadButton = document.getElementById("reloadButton");
inputDate = document.getElementById("dateinput");

daysInput = document.getElementById("days");
hoursInput = document.getElementById("hours");
minutesInput = document.getElementById("minutes");
secondsInput = document.getElementById("seconds");

titleInput = document.getElementById("title");
countDownTimer = document.getElementById("countdown");

startButton.addEventListener('click', start);
function start() 
{
    // Checking if the input is valid
    if(!inputDate.value){
        alert('Please, insert a valid date');
    }
    else
    {
        // Update the count down every 1 second
        var x = setInterval(function() {

            // Get today's date and time
            var now = new Date().getTime();

            // Input date and time
            var aux = new Date(inputDate.value).getTime();

            // Find the distance between now and the input date
            var distance = aux - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the elements
            daysInput.innerHTML = days;
            hoursInput.innerHTML = hours;
            minutesInput.innerHTML = minutes;
            secondsInput.innerHTML = seconds;

            // If the count down is finished
            if (distance < 0) {
                clearInterval(x);
                titleInput.innerHTML = "Countdown Expired!";
                countDownTimer.style.display = "none";
                startButton.style.display = "none";
                inputDate.style.display = "none";
                reloadButton.style.display = "";
            }
            
        }, 1000);
    }
}
// Reload the page
reloadButton.addEventListener('click', function reload() 
{
    window.location.reload(); // codepen block this function but it works fine
});

