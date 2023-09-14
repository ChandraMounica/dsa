/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {

    let netGas=0, start=0, totalGas=0;
    for(let i=0; i<gas.length; i++){
        totalGas+= gas[i]-cost[i];
        netGas+= gas[i]-cost[i];
        if(netGas < 0){
            start=i+1;
            netGas=0;
        }
    }
    if(totalGas >= 0)
        return start;
    return -1;
    
};