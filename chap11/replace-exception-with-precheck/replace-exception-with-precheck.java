
// 에러가 날 수 있는 부분에 대해 액션을 취했따.
public Resource get() {
    Resource result = available.isEmpty() ? Resource.create() : available.pop();
    allocated.add(result);
    return result
  }