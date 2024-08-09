
// 에러가 날 수 있는 곳은 이미 액션을 취해놓자.
public Resource get() {
    Resource result;
  
    try {
      result = available.pop();
      allocated.add(result);
    } catch(NoSuchElementException e) {
      result = Resource.create();
      allocated.add(result);
    }
    return result
  }