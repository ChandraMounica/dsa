/**
* @param {number[]} ratings
* @return {number}
*/
var candy = function(ratings) {

    let i=1,count=ratings.length;

    while(i<ratings.length){

        let peak=0,valley=0;

        while(i<ratings.length && ratings[i] == ratings[i-1]){
            i++;
        }

        while(i<ratings.length && ratings[i] > ratings[i-1]){
            peak++;
            count+=peak;
            i++;
        }

        while(i<ratings.length && ratings[i] < ratings[i-1]){
            valley++;
            count+=valley;
            i++;
        }

        count-= Math.min(peak,valley);
    }

    return count;

};

console.log(candy([1,6,10,8,7,3,2]));