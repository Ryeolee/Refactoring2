

function rating(aDriver){
    return aDriver.numberOfLateDeliveries > 5 ? 2 : 1;
}

/**
 * 함수로직 너무 명확할 경우 함수 인라인 진행
 * @param {*} aCustomer 
 * @returns 
 */
function reportLines(aCustomer){
    const lines=[];

    lines.push(['name', aCustomer.name]);
    lines.push(['location', aCustomer.location]);

    return lines;
}



