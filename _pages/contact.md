---
title: 'Contact'
permalink: '/contact'
description: Fill this form to send message to CardInfo. All messages will be replied as soon as possible.
comments: false
---
<script src="https://www.google.com/recaptcha/api.js?render=6LcbsNIUAAAAAJ7XdbC4vxo-WWCan58CxwsEJnYW"></script>
<div style="margin-bottom:50px">
<div id="alert"></div>
<form id="comment_form" action="http://localhost:8080/contact" method="POST">    
<p class="mb-4">Please send your message to {{site.name}}. We will reply as soon as possible!</p>
<div class="form-group row">
<div class="col-md-6">
<input class="form-control" type="text" name="name" id="name" placeholder="Name*" required>
</div>
<div class="col-md-6">
<input class="form-control" type="email" name="email" id="email" placeholder="E-mail Address*" required>
</div>
</div>
<textarea rows="8" class="form-control mb-3" name="message" id="message" placeholder="Message*" required></textarea>    
<button class="btn btn-success" type="submit" id="send">Send</button>
</form>
<script>
$('#comment_form').submit(function() {
    event.preventDefault();
    $("#alert").html("");
    $('#send').prop("disabled", true);
    $('#send').html('Sending');
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $("#message").val();
    grecaptcha.ready(function() {
        grecaptcha.execute('6LcbsNIUAAAAAJ7XdbC4vxo-WWCan58CxwsEJnYW', {action: 'send_message'}).then(function(token) {
            $('#comment_form').prepend('<input type="hidden" name="g-recaptcha-response" value="' + token + '">');
            $.post("https://api.cardinfo.in/contact",{name: name, email: email, message: message, token: token}, function(result) {
                $('#send').prop("disabled", false);
                $('#send').html("Send");
                $("#alert").html('<div class="alert alert-success" role="alert"><span class="iconbox iconsmall fill rounded-circle bg-danger text-white border-0 mr-2"><i class="ci-bullhorn"></i></span>' + result.message + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button></div>');
                if(result.success) {
                    $('#comment_form')[0].reset();
                }
            });
        });
    });
});
</script>
</div>
