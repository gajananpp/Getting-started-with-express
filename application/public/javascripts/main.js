$(function() {
  $("#submit").on("click",function(event) {
    event.preventDefault();
    var requestData = $("#input").val();
    console.log(requestData);
    $("#results").html(requestData);
  });
});
