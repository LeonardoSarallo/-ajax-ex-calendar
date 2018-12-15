$(document).ready(function() {
  var date = moment('2017-01-01');
  print(date);
  addHolidays(date);

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
      var holidays = data.holidays;
      $('ul li').each(function() {
        var thisDate = $(this).attr('data-original_date');
        thisDate = moment(thisDate, 'YYYY-MM-D');
        console.log(thisDate);
        for (var i = 0; i < holidays.length; i++) {
          var holiday = holidays[i];
          var holidayDate = moment(holiday.date);

          if (holidayDate.isSame(thisDate, 'day'))
          {
            $(this).addClass('active');
            $(this).append(' - ' + holiday.name);
          }
        }
      });
    },
    error: function()
    {
      alert('errore');
    }
  });

  $('#next').click(function() {
    date = date.add(1, 'months');
    print(date);
    addHolidays(date);
  });

  $('#prev').click(function() {
    date = date.subtract(1, 'months');
    print(date);
    addHolidays(date);
  });

  $(document).on('click', '#hamb', function() {
    var menuHamb = $('.month');

    if (menuHamb.hasClass('open')) {
      menuHamb.removeClass('open');
    }
    else {
      
      menuHamb.addClass('open');

    }

  });


  function print(date)
  {
    $('.month h2').text(date.format('MMM YYYY'));
    var days = date.daysInMonth()
    console.log(days);

    $('.monthdisplay ul').html('');

    for (var i = 1; i <= days; i++) {
      var template = $('.template li').clone();
      var liData = date.format('YYYY-MM-') + i;

      template.attr('data-original_date', liData)
      template.text(i + ' ' + date.format('MMM'));

      $('.monthdisplay ul').append(template);
    }

  }

});

function addHolidays(date)
{
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
      var holidays = data.holidays;
      $('ul li').each(function() {
        var thisDate = $(this).attr('data-original_date');
        thisDate = moment(thisDate, 'YYYY-MM-D');
        console.log(thisDate);
        for (var i = 0; i < holidays.length; i++) {
          var holiday = holidays[i];
          var holidayDate = moment(holiday.date);

          if (holidayDate.isSame(thisDate, 'day'))
          {
            $(this).addClass('active');
            $(this).append(' - ' + holiday.name);
          }
        }
      });
    },
    error: function()
    {
      alert('errore');
    }
  });
}
