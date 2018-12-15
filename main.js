$(document).ready(function() {
  var date = moment('2017-01-01');
  print(date);

  $.ajax({
    url:'https://holidayapi.com/v1/holidays',
    method:'GET',
    data: {
      key: '6d29431d-847d-477b-b426-99c0f38d7a43',
      country: 'IT',
      month: date.format('MM'),
      year: date.format('YYYY')
    },
    success: function(data)
    {
      console.log(data);
    },
    error: function()
    {
      alert('errore');
    }
  });

  $('#next').click(function() {
    date = date.add(1, 'months');
    print(date);
  });

  $('#prev').click(function() {
    date = date.subtract(1, 'months');
    print(date);
  });



  function print(date)
  {
    $('.month h2').text(date.format('MMM YYYY'));
    var days = date.daysInMonth()
    console.log(days);

    $('.monthdisplay ul').html('');

    for (var i = 1; i <= days; i++) {
      var template = $('.template li').clone();
      template.text(i + ' ' + date.format('MMM'));

      $('.monthdisplay ul').append(template);
    }

  }

});


















// var year = moment('2017-01');
// var dayMonth = moment('2017-01').daysInMonth();
// var days = moment(year).format('dddd')
// console.log(dayMonth);
//
//
// for (var i = 0; i < dayMonth; i++) {
//
// }
