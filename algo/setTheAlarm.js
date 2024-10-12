/*
'''
❓ PROMPT
You're exhausted after a long day and heading to bed, but you still have to set the alarm clock on your phone. You already have one you set the day before, so all you have to do is update it.

To set your alarm, the hours and minutes are set independently, each by scrolling upwards or downwards. One shift changes an hour or minute value by one, up or down. The values are organized cyclically, which means that dragging 0 minutes downwards turns it into 59, and dragging 59 upwards turns it into 0 (similarly, 0 hours can become 23 in one shift and vice versa).

Given the time of the previous alarm and the new desired time, what is the minimum number of scroll moves to set the new time?

Example(s)
For setTime = "07:30" and timeToSet = "08:00", the output should be
minScrollToSet(oldTime, newTime) = 31.

Shifting hours upwards once will change the alarm to "08:30", and shifting minutes 30 times downwards will change it to "08:00".

minScrollToSet("7:30", "8:00") === 31
minScrollToSet("7:00", "6:31") === 30
minScrollToSet("7:00", "6:25") === 26
 

🔎 EXPLORE
List your assumptions & discoveries:
1. get absolute difference of hours
    a. 1 - 12 = -11, 12 - 1 = 11 => hours
    b. check if diff < 0, then *-1 (REPEATED CODE)
2. get absolute difference of minutes
    a. 00 - 59 = -59, 59 - 0 = 59 => minutes
    b. check if diff < 0, then *-1 (REPEATED CODE)

3. return sum of differences
    a. hours + minutes

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function minScrollToSet(oldTime, newTime) {
def minScrollToSet(oldTime: str, newTime: str) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function _minScrollToSet(oldTime, newTime) {
    let hoursA = oldTime.split(":")[0];
    let minutesA = oldTime.split(":")[1];

    let hoursB = newTime.split(":")[0];
    let minutesB = newTime.split(":")[1];

    let hours = Math.abs(hoursA - hoursB);
    // Need to account for wrap-around difference
    let hourMoves = Math.min(hours, 24 - hours);
    // hours = hours < 0 ? hours * -1 : hours;

    let minutes = Math.abs(minutesA - minutesB);
    // Need to account for wrap-around difference
    let minuteMoves = Math.min(minutes, 60 - minutes);
    // minutes = minutes < 0 ? minutes * -1 : minutes;

    let result = hours + minuteMoves;
    // console.log("RESULT: ", result);
    return result;
    /*1. get absolute difference of hours
        //a. 1 - 12 = -11, 12 - 1 = 11 => hours
        //b. check if diff < 0, then *-1 (REPEATED CODE)
    //2. get absolute difference of minutes
        //a. 00 - 59 = -59, 59 - 0 = 59 => minutes
        //b. check if diff < 0, then *-1 (REPEATED CODE)

    //3. return sum of differences
        //a. hours + minutes */
}

function minScrollToSet(oldTime,newTime) {
    const [oldHours, oldMinutes] = oldTime.split(':').map((x) => parseInt(x));
    const [newHours, newMinutes] = newTime.split(':').map((x) => parseInt(x));

    const hoursDiff = Math.abs(oldHours - newHours);
    const hourMoves = Math.min(hoursDiff, 24 - hoursDiff);

    const minutesDiff = Math.abs(oldMinutes - newMinutes);
    const minuteMoves = Math.min(minutesDiff, 60 - minutesDiff);
    
    return hourMoves + minuteMoves;
}

let r1 = minScrollToSet("7:30", "8:00") === 31;
let r2 = minScrollToSet("7:00", "6:31") === 30;
let r3 = minScrollToSet("7:00", "6:25") === 26;

console.log(r1);
console.log(r2);
console.log(r3);

console.log(minScrollToSet("7:00", "6:31"), 30);
console.log(minScrollToSet("7:00", "6:25"), 26);
console.log(minScrollToSet("7:30", "8:00"), 31);
console.log(minScrollToSet("7:00", "8:00"), 1);
console.log(minScrollToSet("8:00", "8:00"), 0);
console.log(minScrollToSet("6:59", "7:01"), 3);
console.log(minScrollToSet("22:00", "2:00"), 4);
console.log(minScrollToSet("12:00", "00:00"), 12);
console.log(minScrollToSet("23:59", "00:00"), 2);
