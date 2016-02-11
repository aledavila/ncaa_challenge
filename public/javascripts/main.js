$(function(){

  var appendCurrentGames = function(current) {
    $('#result').append('<div class="six wide column"><div class="ui card games">' +
        '<div class="score">' + current.awayScore + '</div>' +
        '<div class="header gamehead">' + current.awayTeam.text + '</div>' +
        '<div class="extra content">' + current.awaySpread + '<br>' + current.awayML + '</div></div></div>' +
        '<div class="two wide column"><h3> vs. </h3><h4>' + current.gameStatus + '</h4><button type="submit" class="ui primary button">Submit</button></div>' +
        '<div class="six wide column"><div class="ui card games">' +
        '<div class="score">' + current.homeScore + '</div>' +
        '<div class="header gamehead">' + current.homeTeam.text + '</div>' +
        '<div class="extra content">' + current.homeSpread + '<br>' + current.homeML + '</div></div>' +
        '</div>');
  }

  $.ajax({
    url: 'https://www.kimonolabs.com/api/2mzdpsn2',
    apikey: 'NCAA_API_KEY',
    method: 'GET',
    dataType: 'jsonp',
    data: {

    }
  })
  .done(function(data) {
    var currentGames = data['results']['collection1'];

    $.each(currentGames, function(_, value) {
      appendCurrentGames(value);
    });

    $('.games').on('click', function() {
      $(this).toggleClass('selection');
    });
  });

});
