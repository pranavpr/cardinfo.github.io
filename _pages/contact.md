---
title: 'Contact'
permalink: '/contact'
description: Fill this form to send message to CardInfo. All messages will be replied as soon as possible.
comments: false
---

<script src="https://www.google.com/recaptcha/api.js?render=6LcbsNIUAAAAAJ7XdbC4vxo-WWCan58CxwsEJnYW"></script>
<div style="margin-bottom:50px">
<div id="alert"></div>
<form id="comment_form" onsubmit="submitForm();">    
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
function submitForm() {
    event.preventDefault();
    document.getElementById("alert").innerHTML = "";
    document.getElementById('send').disabled = true;
    document.getElementById('send').innerHTML = 'Sending';
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById("message").value;
    grecaptcha.ready(function() {
        grecaptcha.execute('6LcbsNIUAAAAAJ7XdbC4vxo-WWCan58CxwsEJnYW', {action: 'send_message'}).then(function(token) {
            var input = document.createElement("input");
            input.setAttribute("type", "hidden");
            input.setAttribute("name", "g-recaptcha-response");
            input.setAttribute("value", "token");
            document.getElementById("comment_form").appendChild(input);
            var data = JSON.stringify({name: name, email: email, message: message, token: token});
            var request = new XMLHttpRequest();
            request.open('POST', 'https://api.cardinfo.in/contact', true);
            request.setRequestHeader('Content-Type', 'application/json');
            request.onreadystatechange = function () {
                // In local files, status is 0 upon success in Mozilla Firefox
                if(request.readyState === XMLHttpRequest.DONE) {
                    var status = request.status;
                    if (status === 0 || (status >= 200 && status < 400)) {
                        // The request has been completed successfully
                        var result = JSON.parse(request.responseText);
                        document.getElementById('send').disabled = false;
                        document.getElementById('send').innerHTML = "Send";
                        document.getElementById("alert").innerHTML = '<div class="alert alert-success alert-dismissible fade show" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><span class="iconbox iconsmall fill rounded-circle bg-danger text-white border-0 mr-2"><i class="ci-bullhorn"></i></span>' + result.message + '</div>';
                        if(result.success) {
                            document.getElementById('comment_form').reset();
                        }
                    } else {
                        // Oh no! There has been an error with the request!
                        console.log("Couldn't send email");
                        document.getElementById('comment_form').reset();
                    }
                }
            };
            request.send(data);
        });
    });
};
</script>
</div>
