$(document).ready(function() {
    $("#hello-div").html("Hello from JQuery from a separate file")
})

$(document).ready( separateHello )

function separateHello() {
    $("#separate-hello-div").html("Hello from JQuery from a separate file and a separate function")
}