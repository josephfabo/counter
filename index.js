function btnin() {
     var num = document.getElementById('quote').innerHTML;
	   document.getElementById('quote').innerHTML = parseFloat(num) + 1;
	}
  function btnde() {
     var num = document.getElementById('quote').innerHTML;
     document.getElementById('quote').innerHTML = parseFloat(num) - 1;
  }
  function save(){
    var quote = document.getElementById('quote').innerHTML;
    var num = document.getElementById('num').innerHTML;
    document.getElementById('num').innerHTML = num + ',' + quote;
  }
  function reset(){
    document.getElementById('num').innerHTML = 0 ;
  }
