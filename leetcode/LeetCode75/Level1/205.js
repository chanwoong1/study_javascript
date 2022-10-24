var check = function (s, t) {
  var dictObj = {}; //딕셔너리 생성
  for (let i = 0; i < t.length; i++) {
    if (s[i] in dictObj === false) dictObj[s[i]] = t[i];
    if (s[i] in dictObj === true) {
      if (dictObj[s[i]] !== t[i]) return false;
    }
  }
  return true;
};

var isIsomorphic = function (s, t) {
  if (check(s, t) && check(t, s)) return true;
  return false;
};
