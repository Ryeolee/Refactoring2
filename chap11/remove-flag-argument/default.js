

aShipment.deliveryDate = deliveryDate(anOrder, true);


aShipment.deliveryDate = deliveryDate(anOrder, false);



// 플래그를 통해 두 가지의 로직을 수행한다. 
function deliveryDate(anOrder, isRush) {
  if (isRush) {
    let deliveryTime;
    if (['MA', 'CT'].includes(anOrder.deliveryState)) deliveryTime = 1;
    else if (['NY', 'NH'].includes(anOrder.deliveryState)) deliveryTime = 2;
    else deliveryTime = 3;
    return anOrder.placedOn.plusDays(1 + deliveryTime);
  } else {
    let deliveryTime;
    if (['MA', 'CT', 'NY'].includes(anOrder.deliveryState)) deliveryTime = 2;
    else if (['ME', 'NH'].includes(anOrder.deliveryState)) deliveryTime = 3;
    else deliveryTime = 4;
    return anOrder.placedOn.plusDays(2 + deliveryTime);
  }
}