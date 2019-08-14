function encrypt(text, shift) {
  var result = "";
      //loop through each caharacter in the text
      for (var i = 0; i < text.length; i++) {
            
           //get the character code of each letter
          var c = text.charCodeAt(i);

          if(c == 32 ) {
            result += " "; 
         // preserve whitespace
         }
          // handle uppercase letters
          if(c >= 65 && c <=  90) {
             result += String.fromCharCode((c - 65 + shift) % 26 + 65); 

          // handle lowercase letters
          }else if(c >= 97 && c <= 122){
              result += String.fromCharCode((c - 97 + shift) % 26 + 97);
          }
          //Inputs other than aphabets are discarded 
  }
  return result;
}

function decrypt(text,shift){
  var result = "";
  shift = (26 - shift) % 26;
  result = encrypt(text,shift);
  return result;
} 

$(document).ready( () => {
  $('#encrypt').click((e) => {
    e.preventDefault();
    console.log("Encrypt clicked!");
    let inputstring = $('#inputstring').val();
    var cipherstring = encrypt(inputstring, 13);
    $('#inputstring').val(cipherstring);
  }); 

  $('#decrypt').click((e) => {
    e.preventDefault();
    console.log("Decrypt clicked!");
    let inputstring = $('#inputstring').val();
    var cipherstring = decrypt(inputstring, 13);
    $('#inputstring').val(cipherstring);
  }); 

});




