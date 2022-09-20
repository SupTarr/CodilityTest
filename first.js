function solution(ranks) {
    // write your code in JavaScript (Node.js 8.9.4)
    let count = 0;
    for (let i = 0; i < ranks.length; i++) {
       for (let j = 0; j < ranks.length; j++) {
           if ((ranks[i] + 1) === ranks[j] && i != j) {
               count++;
               break;
           } 
       }
    }
    return count;
}

console.log(solution([4, 4, 3, 3, 1, 0]));
