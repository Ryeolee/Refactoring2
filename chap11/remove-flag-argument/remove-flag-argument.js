

aShipment.deliveryDate = rushDeliveryDate(anOrder);

aShipment.deliveryDate = regularDeliveryDate(anOrder);

// 두 가지의 로직을 하나의 함수가 아닌 두 개의 함수로 쪼개서 구현을 한다.

function rushDeliveryDate(anOrder) {
  let deliveryTime;
  if (['MA', 'CT'].includes(anOrder.deliveryState)) deliveryTime = 1;
  else if (['NY', 'NH'].includes(anOrder.deliveryState)) deliveryTime = 2;
  else deliveryTime = 3;

  return anOrder.placedOn.plusDays(1 + deliveryTime);
}

function regularDeliveryDate(anOrder) {
  let deliveryTime;
  if (['MA', 'CT', 'NY'].includes(anOrder.deliveryState)) deliveryTime = 2;
  else if (['ME', 'NH'].includes(anOrder.deliveryState)) deliveryTime = 3;
  else deliveryTime = 4;
  return anOrder.placedOn.plusDays(2 + deliveryTime);
}

// Or


// 해당 로직의 너무 복잡할 경우 함수를 감싸 두 개로 나눠 구현할 수 있다.
function rushDeliveryDate(anOrder) {
  return deliveryDate(anOrder, true);
}
function regularDeliveryDate(anOrder) {
  return deliveryDate(anOrder, false);
}