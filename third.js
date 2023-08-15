/*
  In this task we consider interesting patterns that could be observed 
  on a digital clock. Such clock displays current time using the format 
  "HH:MM:SS" where: 

    • "HH" is the hour of the day (00 through 23), as two decimal digits; 
    • "MM" is the minute within the hour (00 through 59), as two decimal 
    digits; 
    • "SS" is the second within the minute (00 through 59), as two decimal 
    digits. 
  
  Note that hour, minute and second are always represented as two digits, 
  so the clock displays leading zeros if needed. 
  
  We say that a point in time is interesting if digital clock needs at 
  most two distinct digits to display it. For example, 13:31:33 and 02:20:22 
  are both interesting, because digital clock can display it using only digits 
  1 and 3 in the first case, or 0 and 2 in the second one. 00:00:00 is 
  interesting too, as it can be displayed using only 0, but 15:45:14 is not, 
  due to the fact that more than two distinct digits are used. 
  
  Note that delimiter character ":" is permanently printed onto clock's display 
  and doesn't count as one of displayed digits. 
  
  Your task is to count interesting points in time in a given period of time. 

  Write a function: 

    function solution(S: string, T: string) 
    
  that, given strings S and T representing time in the format "HH:MM:SS", 
  returns the number of interesting points in time between S and T (inclusive).
  
  For example, given "15:15:00" and "15:15:12", your function should return 1, 
  because there is only one interesting point in time between these points 
  (namely "15:15:11"), Given "22:22:21" and "22:22:23", your function should 
  return 3; interesting points in time are "22:22:21","22:22:22", and "22:22:23". 
  
  Assume that: 
    • strings S and I follow the format "HH:MM:SS" strictly; 
    • string S describes a point in time before T on the same day. 
    
  In your solution, focus on correctness. The performance of your solution 
  will not be the focus of the assessment.
*/

function solution(S, T) {
  // write your code in JavaScript (Node.js 8.9.4)
  function isInteresting(S) {
    let digits = [];
    S.split(":").forEach((el) =>
      el.split("").forEach((el) => digits.push(parseInt(el)))
    );
    return new Set(digits).size <= 2 ? 1 : 0;
  }

  function incrementTime(S) {
    const time = S.split(":").map((el) => parseInt(el));
    let [hour, minute, second] = time;

    second += 1;
    if (second >= 60) {
      second = 0;
      minute += 1;
    }
    if (minute >= 60) {
      minute = 0;
      hour += 1;
    }
    if (hour >= 24) {
      hour = 0;
      minute = 0;
      second = 0;
    }

    return `${hour}:${minute}:${second}`;
  }

  let start = S;
  let end = T;
  let count = 0;
  while (start !== end) {
    start = incrementTime(start);
    count += isInteresting(start);
  }

  return count + isInteresting(end);
}

console.log(solution("22:22:21", "22:22:23"));
