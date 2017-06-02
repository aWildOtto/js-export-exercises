function isPalindrome(s) {
  var stringReverse = s.split("").reverse();
  console.log(typeof stringReverse);
  stringReverse = stringReverse.filter(cb).join();
  console.log("original: "+s);
  console.log("reversed: "+stringReverse);
  return s.split("").filter(cb).join() == stringReverse;
}

function cb(e){
    if (e==" ") {
      return false;
    }
    return true;
  }
module.exports = isPalindrome;
