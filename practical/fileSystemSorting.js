/*
'''
❓ PROMPT
You open up your computer's downloads folder, looking for that cute video of Oliver barking at the doorbell you downloaded a few weeks ago. Of course, it's mixed in with all of the other silly otter videos and other stuff you just had to save. To make it easier to find, you click on the column to sort the view by date to see the most recent first, at the top.

For this problem, we're going to implement that file system sort by date. The files themselves are represented by objects:

{
  "filename": <string>,
  "size": <number>,
  "date": <string>}

and the date itself is in US format:

MM-DD-YYYY HH:MM:SS

Write a function that sorts an array of these file objects, with the most recent at the top.

Follow-up:
- What happens if a date like 2 Feb 2021 is compared with 12 Nov 2021 and the day and month don't have leading zeros: 2-2-2021? How can the code be modified to handle this?
- If the dates are tied down to the second, add a secondary sort by file name in descending order.

Example(s)
Input: sortFiles([
  {"filename": "otter.mpeg", "size": 512, "date": "01-16-2023 14:23:13"},
  {"filename": "oliver.mp4", "size": 1024, "date": "01-18-2023 12:46:57"},
])

Output: [
  {"filename": "oliver.mp4", "size": 1024, "date": "01-18-2023 12:46:57"},
  {"filename": "otter.mpeg", "size": 512, "date": "01-16-2023 14:23:13"},
]
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function sortFiles(files) {
def sortFiles(files: list) -> list:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function _sortFiles(files) {
    return files.sort((a,b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        if(dateA > dateB) return -1;
        if(dateA < dateB) return 1;

        if(a.filename > b.filename) return -1;
        if(a.filename < b.filename) return 1;

        return 0;
    });
}

function __sortFiles(files) {
    
    // create a uniform date format, some months are single/double digits
    function parseDate(dateStr) {
        const [datePart, timePart] = dateStr.split(' ');
        const [month, day, year] = datePart.split('-').map(Number);
        const date = `${year}-${month}-${day} ${timePart}`;
        return new Date(date);
    }
    
    return files.sort((a, b) => {
        const dateA = parseDate(a.date);
        const dateB = parseDate(b.date);

        // sort by descending order for date
        if(dateA > dateB) return -1; // ascending
        if(dateA < dateB) return 1; // descending

        // sort by descending order for filename
        if(a.filename > b.filename) return -1; // ascending
        if(a.filename < b.filename) return 1; // descending

        return 0;
    });
}

function sortFiles(files) {
  const lexicographic = {};
  files.forEach(file => {
    const [date, time] = file.date.split(" ");
    let [m, d, y] = date.split("-");
    
    // need to handle single digit edge case
    m = m.padStart(2, '0');
    d = d.padStart(2, '0');

    lexicographic[file.date] = `${y}:${m}:${d} ${time}`;
  });

  return files.sort((a, b) => {
    if (lexicographic[a.date] === lexicographic[b.date])
      return a.filename > b.filename ? -1 : 1;
    else
      return lexicographic[a.date] > lexicographic[b.date] ? -1 : 1;
  });
}

// single file
let files = [{filename: "file1.txt", size: 10, date: "03-28-2023 12:00:00"}]
let expected = files
console.log(JSON.stringify(sortFiles(files)) == JSON.stringify(expected))

files = [
  {filename: "otter.mpeg", size: 512, date: "01-16-2023 14:23:13"},
  {filename: "oliver.mp4", size: 1024, date: "01-18-2023 12:46:57"},
]
expected = [
  {filename: "oliver.mp4", size: 1024, date: "01-18-2023 12:46:57"},
  {filename: "otter.mpeg", size: 512, date: "01-16-2023 14:23:13"},
]

const resA = sortFiles(files);
console.log(JSON.stringify(sortFiles(files)) == JSON.stringify(expected), '0. Sort by descending date')

// files sorted descending
files = [
  {filename: "file1.txt", size: 10, date: "03-28-2023 12:00:00"},
  {filename: "file2.txt", size: 20, date: "03-27-2023 13:00:00"},
  {filename: "file3.txt", size: 30, date: "03-26-2023 14:00:00"},
]
expected = [
  {filename: "file1.txt", size: 10, date: "03-28-2023 12:00:00"},
  {filename: "file2.txt", size: 20, date: "03-27-2023 13:00:00"},
  {filename: "file3.txt", size: 30, date: "03-26-2023 14:00:00"},
]
let res1 = sortFiles(files);
//console.log(res1);
//console.log(expected);
console.log(JSON.stringify(res1) == JSON.stringify(expected), '1. Sort files by descending order')

// files sorted ascending
files = [
  {filename: "file3.txt", size: 30, date: "03-26-2023 14:00:00"},
  {filename: "file2.txt", size: 20, date: "03-27-2023 13:00:00"},
  {filename: "file1.txt", size: 10, date: "03-28-2023 12:00:00"},
]
expected = [
  {filename: "file1.txt", size: 10, date: "03-28-2023 12:00:00"},
  {filename: "file2.txt", size: 20, date: "03-27-2023 13:00:00"},
  {filename: "file3.txt", size: 30, date: "03-26-2023 14:00:00"},
]
console.log(JSON.stringify(sortFiles(files)) == JSON.stringify(expected))

// same year/month but different day
files = [
  {filename: "file2.txt", size: 20, "date": "03-27-2023 05:00:00"},
  {filename: "file6.txt", size: 10, "date": "03-28-2023 10:00:00"},
  {filename: "file4.txt", size: 30, "date": "03-22-2023 14:00:00"},
  {filename: "file3.txt", size: 30, "date": "03-26-2023 02:00:00"},
]
expected = [
  {filename: "file6.txt", size: 10, "date": "03-28-2023 10:00:00"},
  {filename: "file2.txt", size: 20, "date": "03-27-2023 05:00:00"},
  {filename: "file3.txt", size: 30, "date": "03-26-2023 02:00:00"},
  {filename: "file4.txt", size: 30, "date": "03-22-2023 14:00:00"},
]
console.log(JSON.stringify(sortFiles(files)) == JSON.stringify(expected), '2. Sort for different day but same year and month')

// same year/day but different month
files = [
  {filename: "file2.txt", size: 20, "date": "06-15-2023 05:10:14"},
  {filename: "file6.txt", size: 10, "date": "08-15-2023 12:47:13"},
  {filename: "file4.txt", size: 30, "date": "03-15-2023 11:23:32"},
  {filename: "file3.txt", size: 30, "date": "05-15-2023 18:54:08"},
]
expected = [
  {filename: "file6.txt", size: 10, "date": "08-15-2023 12:47:13"},
  {filename: "file2.txt", size: 20, "date": "06-15-2023 05:10:14"},
  {filename: "file3.txt", size: 30, "date": "05-15-2023 18:54:08"},
  {filename: "file4.txt", size: 30, "date": "03-15-2023 11:23:32"},
]
console.log(JSON.stringify(sortFiles(files)) == JSON.stringify(expected), '3. Sort for different month but same year and day')

// earlier year but later date
files = [
  {filename: "file6.txt", size: 10, "date": "03-28-2019 10:00:00"},
  {filename: "file3.txt", size: 30, "date": "01-16-2023 02:00:00"},
  {filename: "file1.txt", size: 30, "date": "10-05-2022 06:00:00"},
]
expected = [
  {filename: "file3.txt", size: 30, "date": "01-16-2023 02:00:00"},
  {filename: "file1.txt", size: 30, "date": "10-05-2022 06:00:00"},
  {filename: "file6.txt", size: 10, "date": "03-28-2019 10:00:00"},
]
console.log(JSON.stringify(sortFiles(files)) == JSON.stringify(expected))

// same date different times
files = [
  {filename: "file6.txt", size: 10, "date": "03-11-2020 10:59:29"},
  {filename: "file2.txt", size: 30, "date": "03-11-2020 10:23:30"},
  {filename: "file3.txt", size: 30, "date": "03-11-2020 10:59:31"},
  {filename: "file1.txt", size: 30, "date": "03-11-2020 10:46:30"},
]
expected = [
  {filename: "file3.txt", size: 30, "date": "03-11-2020 10:59:31"},
  {filename: "file6.txt", size: 10, "date": "03-11-2020 10:59:29"},
  {filename: "file1.txt", size: 30, "date": "03-11-2020 10:46:30"},
  {filename: "file2.txt", size: 30, "date": "03-11-2020 10:23:30"},
]
console.log(JSON.stringify(sortFiles(files)) == JSON.stringify(expected))

// console.log("Tests for follow-ups...")

// files sorted by date but not file name
files = [
  {filename: "file3.txt", size: 30, "date": "03-27-2023 13:00:00"},
  {filename: "file4.txt", size: 40, "date": "03-27-2023 13:00:00"},
  {filename: "file5.txt", size: 50, "date": "03-27-2023 13:00:00"},
  {filename: "file1.txt", size: 10, "date": "03-27-2023 13:00:00"},
  {filename: "file2.txt", size: 20, "date": "03-27-2023 13:00:00"},
]
expected = [
  {filename: "file5.txt", size: 50, "date": "03-27-2023 13:00:00"},
  {filename: "file4.txt", size: 40, "date": "03-27-2023 13:00:00"},
  {filename: "file3.txt", size: 30, "date": "03-27-2023 13:00:00"},
  {filename: "file2.txt", size: 20, "date": "03-27-2023 13:00:00"},
  {filename: "file1.txt", size: 10, "date": "03-27-2023 13:00:00"},
]
const resB = sortFiles(files);
//console.log(files);
//console.log('*******************');
//console.log(resB);
console.log(JSON.stringify(sortFiles(files)) == JSON.stringify(expected))

// some files with 1 digit dates
files = [
  {filename: "file2.txt", size: 20, "date": "3-27-2023 05:00:00"},
  {filename: "file6.txt", size: 10, "date": "12-28-2023 10:00:00"},
  {filename: "file4.txt", size: 30, "date": "5-2-2023 14:00:00"},
  {filename: "file3.txt", size: 30, "date": "2-26-2023 02:00:00"},
]
expected = [
  {filename: "file6.txt", size: 10, "date": "12-28-2023 10:00:00"},
  {filename: "file4.txt", size: 30, "date": "5-2-2023 14:00:00"},
  {filename: "file2.txt", size: 20, "date": "3-27-2023 05:00:00"},
  {filename: "file3.txt", size: 30, "date": "2-26-2023 02:00:00"},
]
//console.log(files);
//console.log(sortFiles(files));
console.log(JSON.stringify(sortFiles(files)) == JSON.stringify(expected), '4. Sort files with 1 digit dates')
