$(document).ready(function () {
  $("body").on("click", "#sign-up-link", function () {
    $("#new-account").show();
    $("#login").hide();
  }).on("click", "#login-link", function () {
    $("#new-account").hide();
    $("#login").show();
  })
});