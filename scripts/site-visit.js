const SITE_VISITS_KEY = "site-visits"

// Function checks local storage for the site visits key and initialized it if necessary
// Then returns the current visit count
function getVisitCount() {
    let visitCountValue = localStorage.getItem(SITE_VISITS_KEY)
    let visitCount = 1
    if (visitCountValue != null) {
        visitCount = parseInt(visitCountValue)
        visitCount++
    }
    localStorage.setItem(SITE_VISITS_KEY, `${visitCount}`)
    return visitCount
}

// Update the visit counter on the home page
document.getElementById("visitcount").textContent = `${getVisitCount()}`
