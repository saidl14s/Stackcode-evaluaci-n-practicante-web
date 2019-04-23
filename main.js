function sendMail() {
    $.ajax({
        data: {
            'name': $("#txtName").val(),
            'email': $("#txtEmail").val(),
            'message': $("#txtMessage").val()
        },
        url: '/send-mail-php',
        type: 'post',
        beforeSend: function() {
            $("#log").html("Enviado, espere por favor...");
        },
        success: function(data) {
            $("#log").html("Enviado");
        },
        error: function() {
            $("#log").html("Ocurrio un error...");
        }
    });
}