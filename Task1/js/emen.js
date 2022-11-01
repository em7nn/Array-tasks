var  ededler = [-1, 12, 33, 48, 54];
var cem=0;

for (var i=0; i < ededler.length; i++)

  if (ededler [i] > 0 && ededler [i] % 6 ==0)
{
  console.log(ededler[i]);
  cem += ededler [i];
}
console.log("cem:", cem)