function copyEmail(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }

  var iconBlink = setInterval(function () {
    $("#blink").fadeToggle(1500)
}, 1500)