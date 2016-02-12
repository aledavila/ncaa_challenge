$(function(){

  var appendCurrentGames = function(current) {
    $('#result').append('<div class="six wide column"><div class="ui card games">' +
        '<div class="score">' + current.awayScore + '</div>' +
        '<div class="header gamehead">' + current.awayTeam.text + '</div>' +
        '<div class="extra content">' + current.awaySpread + '<br>' + current.awayML +
        '<br><button class="ui button choice" data-game-id="' + current.index + '" data-team-name="' + current.awayTeam.text + '" data-team-score="' + current.awayScore +'">Choose</button>' +
        '</div></div></div>' +
        '<div class="two wide column"><h3> vs. </h3><h4 class="time">' + current.gameTime + '</h4><h4 class="status">' + current.gameStatus + '</h4></div>' +
        '<div class="six wide column"><div class="ui card games" data-game-id="' + current.index + '">' +
        '<div class="score">' + current.homeScore + '</div>' +
        '<div class="header gamehead">' + current.homeTeam.text + '</div>' +
        '<div class="extra content">' + current.homeSpread + '<br>' + current.homeML +
        '<br><button class="ui button choice" data-game-id="' + current.index + '" data-team-name="' + current.homeTeam.text + '" data-team-score="' + current.homeScore +'">Choose</button>' +
        '</div></div></div>');
  }

  $.ajax({
    url: 'https://www.kimonolabs.com/api/25vlc84c',
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

    $('.choice').on('click', function() {
      var id = $(this).data('game-id');
      var team = $(this).data('team-name');
      var score = $(this).data('team-score');
      console.log(id, team, score);
      $(this).addClass('selected');

      $.ajax({
        url: 'users/add/pick',
        method: 'POST',
        data: {
          picks: {
            id: id,
            team: team,
            score: score
          }
        }
      })
      .done(function(data){
        console.log(data);
      })
    });
  });

});
