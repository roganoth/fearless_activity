$(document).ready(function(){
    $("#nameInput").on("click", function(){
        console.log("click")
        var name = $("#name").val().trim()
        $("#playerNames").append(name)
    })
    $("#playerReset").on("click", function(){
        console.log("Players have been reset");
        $("#playerNames").empty();
    })
    $("#darkMode").click(function(){
        $("body").toggleClass("darkmode");
        $("table").toggleClass("darkmode");
    })
})