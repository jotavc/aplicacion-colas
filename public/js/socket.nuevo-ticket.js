// Comando para establecer la comunicacion

var socket = io();

var lable = $('#lblNuevoTicket');

socket.on('connect', () => {
    console.log('Conectado al servidor');
});

socket.on('disconnect', () => {
    console.log('Desconectado del servidor');
});

socket.on('estadoActual', function(resp) {
    console.log(resp);
    lable.text(resp.actual);
});

//on 'estadoActual'

$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        lable.text(siguienteTicket);
    });

});