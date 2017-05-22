var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });

  $('#add').click(function(event) {
    event.preventDefault();
    var num1 = parseFloat($('#num1').val());
    var num2 = parseFloat($('#num2').val());
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.add(num1, num2);
    $('#solution').append("<li>" + output + "</li>");
  });

  $("#subtract").click(function(event) {
    event.preventDefault();
    var num1 = parseFloat($('#num1').val());
    var num2 = parseFloat($('#num2').val());
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.subtract(num1, num2);
    $('#solution').append("<li>" + output + "</li>");
  });

  $('#multiply').click(function(event) {
    event.preventDefault();
    var num1 = parseFloat($('#num1').val());
    var num2 = parseFloat($('#num2').val());
    var simpleCalculator = new Calculator("deep blue");
    var output = simpleCalculator.multiply(num1, num2);
    $('#solution').append("<li>" + output + "</li>");
  });

  $('#divide').click(function(event) {
    event.preventDefault();
    var num1 = parseFloat($('#num1').val());
    var num2 = parseFloat($('#num2').val());
    var simpleCalculator = new Calculator("deep blue");
    var output = simpleCalculator.divide(num1, num2);
    $('#solution').append("<li>" + output + "</li>");
  });



});
