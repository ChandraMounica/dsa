/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {

    for(let i=0; i<gas.length; i++){
        let j=i, stopCount=0, netGas=0;
        while(stopCount < gas.length){
            netGas += gas[j%gas.length]-cost[j%gas.length];
            if(netGas < 0)
                break;
            stopCount++;
            j++;
        }
        if(netGas >= 0){
            return i;
        }
    }
    return -1;
    
};