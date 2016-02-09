$(function(){

  var appendCurrentGames = function(currentGames) {

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
      $('.list').append('<div class="item"><div class="header"><span class="away">' + value.awayTeam.text + '</span> <span class="notbold">v</span> <span class="home">' + value.homeTeam.text + '</span></div>');
    });

    // // Take results and output to the page
    // for (var i = 0; i < currentGames.length; i++) {
    //   // console.log('Game: ', currentGames[i]);

    //   var games = '<div class="item"><div class="header">' + currentGames[i].away + '</h4>' +
    //     '<img src="' + movies[i].Poster + '">' +
    //     '</li>';

    //     // <div class="item">
    //     //   <div class="header">New York City</div>
    //     //   A lovely city
    //     // </div>

    //   $('.ui.list').append(games);
    // }
  });

});
