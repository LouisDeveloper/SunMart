(function() {
    const NEW_URL = 'https://allgoodtrading.co.nz';
    const COUNTDOWN_SECONDS = 5;
    
    const countdownEl = document.getElementById('countdown');
    const progressCircle = document.getElementById('progress-circle');
    const circumference = 2 * Math.PI * 18; // radius = 18
    
    let timeLeft = COUNTDOWN_SECONDS;
    
    // Initialize progress circle
    progressCircle.style.strokeDasharray = circumference;
    progressCircle.style.strokeDashoffset = 0;
    
    function updateCountdown() {
        countdownEl.textContent = timeLeft;
        
        // Update progress ring
        const progress = (COUNTDOWN_SECONDS - timeLeft) / COUNTDOWN_SECONDS;
        const offset = circumference * progress;
        progressCircle.style.strokeDashoffset = offset;
        
        if (timeLeft <= 0) {
            window.location.href = NEW_URL;
            return;
        }
        
        timeLeft--;
        setTimeout(updateCountdown, 1000);
    }
    
    // Start countdown
    updateCountdown();
})();
