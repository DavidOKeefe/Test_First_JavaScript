function repeat(phrase, num){
    var repeatedPhrase = '';
    for(var i=0; i < num; i++){
        repeatedPhrase += phrase;
    }
    return repeatedPhrase;
}

function join(ary, breaker){
  var repeatedPhrase = '';
  if(ary.length >= 1 && breaker !== undefined){
      for(var i = 0; i < ary.length; i++){
        repeatedPhrase += ary[i];
        if(i < (ary.length - 1)){
          repeatedPhrase += breaker;
        }
      }
  }else if(ary.length >= 1 && breaker === undefined){
      for(var i = 0; i < ary.length; i++){
        repeatedPhrase += ary[i];
      }
  }
  return repeatedPhrase;
}

function sum(ary){
  var sumTotal = 0;
  for(var i=0; i < ary.length; i++){
    sumTotal += ary[i];
  }
  return sumTotal;
}

function paramify(hashObj){
  var phrase = [];
  for(var key in hashObj){
    phrase.push(key + '=' + hashObj[key]);
  }
  return phrase.sort().join('&');
}
