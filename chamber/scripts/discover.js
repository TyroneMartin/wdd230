const LAST_VISIT_DATE_KEY = 'last-visit';
const DAY_IN_MILLIS = 24*60*60*1000;

// Get site visit information
function getDiscoverMessage(){
    let message = "Welcome! Let us know if you have any questions."
    let lastVisitValue = localStorage.getItem(LAST_VISIT_DATE_KEY)
    let today = new Date().getTime();
    if (lastVisitValue != null){
        lastVisit = parseInt(lastVisitValue)
        daysSinceLastVisit = Math.floor((today - lastVisit) / DAY_IN_MILLIS)
        if (daysSinceLastVisit === 0){
            message = "Back so soon? Awesome!"
        }
        else{
            if (daysSinceLastVisit === 1){
                message = "You last visited 1 day ago."
            }
            else{
                message = `You last visited ${daysSinceLastVisit} days ago.`
            }
            
        }
    }
    else{
        localStorage.setItem(LAST_VISIT_DATE_KEY, today);
    }
    localStorage.setItem(LAST_VISIT_DATE_KEY, today);
    return message;
}

// Set the message
let discoverMessage = getDiscoverMessage();
document.getElementById("message").textContent = discoverMessage;
