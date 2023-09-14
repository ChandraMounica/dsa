/**
* @param {number[]} ratings
* @return {number}
*/
var candy = function(ratings) {

    let candies = Array(ratings.length).fill(1);
    let totalCandies = ratings.length,someChangeDetected;
    
    
    do{
        someChangeDetected = false
        for(let i=0; i<ratings.length; i++){
        var candiesCount = candies[i];
    
        if(i>0 && ratings[i] > ratings[i-1]){
            while(candiesCount <= candies[i-1]){
                someChangeDetected = true;
                candiesCount++;
            }          
        }
    
        if(i<ratings.length-1 && ratings[i] > ratings[i+1]){
            while(candiesCount <= candies[i+1]){
                someChangeDetected = true;
                candiesCount++;
            }         
        }
    
        totalCandies += candiesCount-candies[i];
        candies[i] = candiesCount;
    } 
    
    }while(someChangeDetected);
    
    return totalCandies;
    
    };

console.log(candy([1,6,10,8,7,3,2]));