function startApp() {
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('calendar-card').classList.remove('hidden');
    
    // Auto-jump to today's date
    const today = new Date();
    const dateString = today.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }); 
    // Example: "19 Feb"
    
    const todayIndex = ramadanData.findIndex(d => d.eng === dateString);
    if (todayIndex !== -1) {
        currentIndex = todayIndex;
    } else {
        currentIndex = 0;
    }
    
    updateUI();
}