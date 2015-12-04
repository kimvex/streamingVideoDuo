$(document).ready(function(){

  function servidor1(e){
    var server1 = document.getElementById('server12').value;
    var server2 = document.getElementById('server22').value;
    console.log(server1)
    console.log(server2)
    document.getElementById('server11').innerHTML = '<object class="servervid" data="http://'+ server1 +'/jsfs.html" type="text/html"></object>';
    document.getElementById('server32').innerHTML = '<object class="servervid" data="http://'+ server2 +'/jsfs.html" type="text/html"></object>';
    document.getElementById('server11').addEventListener('click',function(config){
      console.log(config);
    });
  }

  document.getElementById('servidor1').addEventListener('click',servidor1);

});
