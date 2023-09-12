/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

let memo = Array(prices.length).fill().map(() => Array(2).fill(-1));

return rf(prices,0,1,memo);
    
};

var rf = function(prices, i, isBuy, memo){
    if(i == prices.length)
        return 0;

    if(memo[i][isBuy?0:1] != -1)
        return memo[i][isBuy?0:1];

    if(isBuy) {
        return memo[i][0] = Math.max(-prices[i]+rf(prices,i+1,0,memo), rf(prices,i+1,1,memo));
    }

    //sell case
    return memo[i][1] = Math.max(prices[i]+rf(prices,i+1,1,memo), rf(prices,i+1,0,memo));
}

console.log(maxProfit([7,1,5,3,6,4]));