$(document).ready(function(){

  function servidor1(e){
    var server1 = document.getElementById('server12').value;
    var server2 = document.getElementById('server22').value;
    console.log(server1)
    console.log(server2)
    document.getElementById('server11').innerHTML = '<object class="servervid" data="http://'+ server1 +'/browserfs.html" type="text/html"></object>';
    document.getElementById('server32').innerHTML = '<object class="servervid" data="http://'+ server2 +'/browserfs.html" type="text/html"></object>';
    /*$('#vid').on('click',function(config){
      console.log(config.target.firstElementChild);
      console.log(config);
      //console.log(config.target.firstElementChild.nextSibling.parentNode.lastElementChild.contentDocument.activeElement.attributes.firstElementChild);
    });*/
  }

  document.getElementById('servidor1').addEventListener('click',servidor1);

});
