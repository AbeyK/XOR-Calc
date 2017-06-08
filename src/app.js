export class App {
  constructor() {
    this.message = 'XOR CALCULATOR';
  }

  xor(str){
    var total;
    var tempDigit='';
    str=str+" ";
    for(var i = 0; i < str.length; i++){
      if(!isNaN(str.charAt(i)) & str.charAt(i)!=" "){
        tempDigit+=str.charAt(i);
      }
      else{
        if(total!=null){
          total^=Number(tempDigit);
        }
        else{
          total=Number(tempDigit);
        }
        tempDigit='';
      }
    }
    alert(total);
  }



}
