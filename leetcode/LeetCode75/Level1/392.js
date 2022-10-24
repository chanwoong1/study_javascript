var isSubsequence = function (s, t) {
  var idx = 0;
  for (let i = 0; i < s.length; i++) {
    idx = t.indexOf(s[i]);
    if (idx === -1) return false;
    t = t.slice(idx + 1);
  }
  return true;
};
