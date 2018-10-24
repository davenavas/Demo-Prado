var counter = 0;
var responses = ["Hola Produbanco, cúal su pregunta el dia de hoy?","Solo para confirmar, desea conocer qué es deducción de gastos personales?","Perfecto, tenemos toda la informacion que necesita en el siguiente link: <a href='topic.html#subtopic5' class='list-group-item list-group-item-action list-outline-dark'>Deducción de gastos Personales para Personas naturales</a>","De nada, espero haber resuelto su pregunta. Desea hacer alguna otra pregunta?","No tengo una respuesta en mi conocimiento. Desea usar una de sus 3 consultas directas a un experto disponibles este mes?","Por favor, escriba su pregunta lo más clara posible (y en menos de 250 caracteres)","Listo, un experto le responderá en los proximos días. Recuerde que le quedan 2 consultas directas este mes. Que tenga un buen día."];
(function($) {
    $(document).ready(function() {
        var $chatbox = $('.chatbox'),
            $chatboxTitle = $('.chatbox__title'),
			$chatboxInfo = $('.chatbox__info'),
            $chatboxTitleClose = $('.chatbox__title__close'),
            $chatboxCredentials = $('.chatbox__credentials');
        $chatbox.removeClass('chatbox--empty');
        $(".chatbox__body").stop().animate({ scrollTop: $(".chatbox__body")[0].scrollHeight}, 1000);
        $chatboxTitle.on('click', function() {
            $chatbox.toggleClass('chatbox--tray');
        });
		$chatboxInfo.on('click', function() {
            $chatbox.toggleClass('chatbox--tray');
        });
        $chatboxTitleClose.on('click', function(e) {
            e.stopPropagation();
            $chatbox.addClass('chatbox--closed');
        });
        $chatbox.on('transitionend', function() {
            if ($chatbox.hasClass('chatbox--closed')) $chatbox.remove();
        });
        $chatboxCredentials.on('submit', function(e) {
            e.preventDefault();
            $chatbox.removeClass('chatbox--empty');
        });
        $(".chat-form").on('submit', function(e) {
          e.preventDefault();
          $(".chatbox__body").append('<div class="chatbox__body__message chatbox__body__message--right"><img src="img/128.jpg" alt="Picture"><p>'+$(".chatbox__message").val()+'</p></div>');
          $(".chatbox__message").val("");
          $(".chatbox__body").stop().animate({ scrollTop: $(".chatbox__body")[0].scrollHeight}, 1000);
          setTimeout(function(){
            if(responses.length<=counter){
              counter=0;
            }
            $(".chatbox__body").append('<div class="chatbox__body__message chatbox__body__message--left"><img src="img/129.jpg" alt="Picture"><p>'+responses[counter++]+'</p></div>');
            $(".chatbox__body").stop().animate({ scrollTop: $(".chatbox__body")[0].scrollHeight}, 1000);
          }, 2000);
        });
        //$(".portfolio-link").on('click', function(e) {
            //$( ".close-modal" ).trigger( "click" );
        //});
    });
})(jQuery);
