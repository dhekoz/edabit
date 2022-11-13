function swap(a, b) {
  let temp = a;
  a = b;
  b = temp;
  return [a, b];
}
console.log(swap(1, 2));

/* OR:

function swap(a,b){
    return [a, b] = [b, a];
}
console.log(swap(1,2));
*/
