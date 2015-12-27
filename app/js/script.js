$(document).ready(function(){
  var uno=0,
      dos=0,
      est = 0;

  function servidor1(e){
    var server1 = document.getElementById('server12').value;
    var server2 = document.getElementById('server22').value;
    console.log(server1)
    console.log(server2)
    if(server1 != '' || server2 != ''){      
      $.ajax('http://'+server1 + '/browserfs.html',{
          success:function(data){
          document.getElementById('server11').innerHTML = data;

          document.getElementById('img1').src = 'http://'+server1+'/video';
        }
      });

        $.ajax('http://'+server2 + '/browserfs.html',{
          success:function(data){
          document.getElementById('server32').innerHTML = data;

          $('#server32').find('#img1').attr('src','http://'+server2+'/video');
        }

        });

        $('#cabecera').addClass('nada');
        est = 1;
    }

  }

  document.getElementById('servidor1').addEventListener('click',servidor1);

  function cDerecho(e){
      if(uno == 0){
        $('#server11').addClass('todo');
        $('#server32').addClass('nada');
        $('#server32').removeClass('server2');
        $('#server11').removeClass('server');
        uno = 1;
      }else{
        $('#server11').addClass('server');
        $('#server32').addClass('server2');
        $('#server32').removeClass('nada');
        $('#server11').removeClass('todo');
        uno = 0;
      }
      e.preventDefault();
  }

  function cIzquierdo(e){
      if(dos == 0){
        $('#server32').addClass('todo');
        $('#server11').addClass('nada');
        $('#server11').removeClass('server');
        $('#server32').removeClass('server2');
        dos = 1;
      }else{
        $('#server32').addClass('server2');
        $('#server11').addClass('server');
        $('#server11').removeClass('nada');
        $('#server32').removeClass('todo');
        dos = 0;
      }
      e.preventDefault();
  }

  document.getElementById('server11').addEventListener('click',cDerecho);

  document.getElementById('server32').addEventListener('click',cIzquierdo);

  function ocul(){
    if(est == 1){
      $('#cabecera').removeClass('nada');
      est = 0;
    }else{
      $('#cabecera').addClass('nada');
      est = 1;
    }
  }

  function cambioImagen(e){
    console.log(e.which);
    if(e.which == 39){
        cIzquierdo();
    }

    if(e.which == 37){
        cDerecho();
      }

    if(e.which == 27){
      ocul();
    }
  }

  $(document).keydown(cambioImagen);
  $('#jw').append('JW<br>\n .ORG');
});
