$(document).ready(function(){

  function servidor1(e){
    var server1 = document.getElementById('server12').value;
    var server2 = document.getElementById('server22').value;
    console.log(server1)
    console.log(server2)
    //document.getElementById('server11').innerHTML = '<object class="servervid" id="01" data="http://'+ server1 +'/browserfs.html" type="text/html"></object>';
    //document.getElementById('server32').innerHTML = '<object class="servervid" id="02" data="http://'+ server2 +'/browserfs.html" type="text/html"></object>';
    /*$('#vid').on('click',function(config){
      console.log(config.target.firstElementChild);
      console.log(config);
      //console.log(config.target.firstElementChild.nextSibling.parentNode.lastElementChild.contentDocument.activeElement.attributes.firstElementChild);
    });*/
  $.ajax('http://'+server1 + '/browserfs.html',{
      success:function(data){
      document.getElementById('server11').innerHTML = data;

      document.getElementById('img1').src = 'http://'+server1+'/video';
      console.log($('#img1'));
    }
  });

    $.ajax('http://'+server2 + '/browserfs.html',{
      success:function(data){
      document.getElementById('server32').innerHTML = data;

      //document.getElementById('img1').src = 'http://'+server2+'/video';
      $('#server32').find('#img1').attr('src','http://'+server2+'/video');
      //console.log($('#img1'));
    }

    });
  }

  document.getElementById('servidor1').addEventListener('click',servidor1);
  var uno=0,
      dos=0;
  document.getElementById('server11').addEventListener('click',function(e){
    if(uno == 0){
      $('#server11').addClass('todo');
      $('#server32').addClass('nada');
      $('#01').addClass('todo');
      $('#02').addClass('nada');
      $('#server32').removeClass('server2');
      $('#server11').removeClass('server');
      uno = 1;
    }else{
      $('#server11').addClass('server');
      $('#server32').addClass('server2');
      $('#server32').removeClass('nada');
      $('#01').removeClass('todo');
      $('#02').removeClass('nada');
      $('#server11').removeClass('todo');
      uno = 0;
    }
    e.preventDefault();
  });

  document.getElementById('server32').addEventListener('click',function(e){
    if(dos == 0){
      $('#server32').addClass('todo');
      $('#server11').addClass('nada');
      $('#02').addClass('todo');
      $('#01').addClass('nada');
      $('#server11').removeClass('server');
      $('#server32').removeClass('server2');
      dos = 1;
    }else{
      $('#server32').addClass('server2');
      $('#server11').addClass('server');
      $('#server11').removeClass('nada');
      $('#02').removeClass('todo');
      $('#01').removeClass('nada');
      $('#server32').removeClass('todo');
      dos = 0;
    }
    e.preventDefault();
  });
});
