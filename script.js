$(document).ready(function(){

  function servidor1(e){
    var server1 = document.getElementById('server12').value;
    var server2 = document.getElementById('server22').value;
    console.log(server1)
    console.log(server2)
    document.getElementById('server11').innerHTML = '<object class="servervid" data="http://'+ server1 +'" type="text/html"></object>';
    /*$.get('http://'+server1,function(data){
      console.log(data);
      document.getElementById('server11').innerHTML = data;
    });
    $.get('http://'+server2,function(data){
      console.log(data);
      document.getElementById('server11').innerHTML = data;
    })*/
  }

  document.getElementById('servidor1').addEventListener('click',servidor1);

});
