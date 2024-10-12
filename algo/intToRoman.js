function intToRoman(num){
  let vals=[[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],[100,'C'],[90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']]
  let ret=''
  for(let i=0;i<vals.length;i++){
    let t=vals[i]
    while(num>=t[0]){ret+=t[1];num-=t[0]}
  }
  return ret
}

console.log(intToRoman(3) === 'III');
console.log(intToRoman(9) === 'IX');
console.log(intToRoman(444) === 'CDXLIV');
console.log(intToRoman(1994) === 'MCMXCIV');
console.log(intToRoman(0) === '');
console.log(intToRoman(4000) === 'MMMM');
