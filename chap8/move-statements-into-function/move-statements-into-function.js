function renderPerson(outStream, person) {
    const result = [];
  
    result.push(`<p>${person.name}</p>`);
    result.push(renderPhoto(person.photo));
    result.push(emitPhotoData(person.photo));
    return result.join('\n');
  }
  
  function photoDiv(p) {
    return ['<div>', emitPhotoData(p), '</div>'].join('\n');
  }
  
  // 중복 되는 제목 정보를 함수 안에 넣어 중복 코드를 제거한다.
  function emitPhotoData(p) {
    return [`<p>제목: ${p.title}</p>`, `<p>제목: ${aPhoto.location}</p>`, `<p>제목: ${aPhoto.date.toString()}</p>`].join(
      '\n'
    );
  }