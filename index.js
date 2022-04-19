$(document).ready(function (){
  if(!$("#myCanvas").tagcanvas({
      textColour: "#fff",
      outlineColour: "transparent",
      reverse: true,
      depth: 0.8,
      maxSpeed: 0.05,
      weight: true,
  }, "tags")){
      // something went wrong hide the canvas container,
      $("#myCanvasContainer");
  }
})
$(document).ready(function(){

  $('#btnSend').click(function(){

      var errores = '';

      // Validado Nombre ==============================
      if( $('#names').val() == '' ){
          errores += '<p>Escriba un nombre</p>';
          $('#names').css("border-bottom-color", "#F14B4B")
      } else{
          $('#names').css("border-bottom-color", "#d1d1d1")
      }

      // Validado Correo ==============================
      if( $('#email').val() == '' ){
          errores += '<p>Ingrese un correo</p>';
          $('#email').css("border-bottom-color", "#F14B4B")
      } else{
          $('#email').css("box-shadow", "#d1d1d1")
      }

      // Validado Mensaje ==============================
      if( $('#mensaje').val() == '' ){
          errores += '<p>Escriba un mensaje</p>';
          $('#mensaje').css("border-bottom-color", "#F14B4B")
      } else{
          $('#mensaje').css("border-bottom-color", "#d1d1d1")
      }

      // ENVIANDO MENSAJE ============================
      if( errores == '' == false){
          var mensajeModal = '<div class="modal_wrap">'+
                                  '<div class="mensaje_modal">'+
                                      '<h3>Errores encontrados</h3>'+
                                      errores+
                                      '<span id="btnClose">Cerrar</span>'+
                                  '</div>'+
                              '</div>'

          $('body').append(mensajeModal);
      }

      // CERRANDO MODAL ==============================
      $('#btnClose').click(function(){
          $('.modal_wrap').remove();
      });
  });

});
const form = document.querySelector('.form_contact');

function btnSend(e){
    e.preventDefault();
    names = document.querySelector('#names');
    email = document.querySelector('#email');
    mensaje = document.querySelector('#mensaje');
Email.send({ 
    SecureToken: "876c7ef1-8921-49a7-8f2f-acc0975a76a7", 
    to: 'arjunafitness@gmail.com', 
    From: email.value, 
    Subject: "Contacto desde la pagina web",
    Body: mensaje.value,  
}).then( 
  mensaje => alerta(mensaje) 
);
 
}
form.addEventListener('submit', btnSend);