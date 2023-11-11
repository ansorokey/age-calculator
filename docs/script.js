let userInput = document.querySelector('#date');
// new Date() is today's date and time
// .toISOString formats it into a time string 2023-11-11T22:32:31.862Z
// .split('T') splits it into date, time
// [0] selects only the date
// the maximum day selectable in the calendar is today
userInput.max = new Date().toISOString().split('T')[0];

function calculateAge() {
    // Add 1 to getMonth because it returns a zero-indexed month (Jan = 0)

    let bDay= new Date(userInput.value);
    let [d1, m1, y1] = [bDay.getDate(), bDay.getMonth() + 1, bDay.getFullYear()];

    let today = new Date();
    let [d2, m2, y2] = [today.getDate(), today.getMonth() + 1, today.getFullYear()];

    let d3, m3, y3;

    // difference in years
    y3 = y2 - y1;

    // difference in months
    // account for if that month has been passed yet
    if(m2 >= m1) {
        m3 = m2- m1;
    } else {
        y3 -= 1;
        m3 = 12 + m2 - m1;
    }

    // difference in date
    // account for if that day has passed or not
    if(d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3 -= 1;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    // if we end up with a negative month,
    // make that month the last index (11) and decrease a year
    if(m3 < 0) {
        m3 = 11;
        y3 -= 1;
    }

    let result = document.querySelector('#result');
    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months, and <span>${d3}</span> days old.`

}

function getDaysInMonth(y, m) {
    return new Date(y, m, 0).getDate();
}
