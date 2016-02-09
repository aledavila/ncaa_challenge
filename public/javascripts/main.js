$(function(){

  $.ajax({
    url: 'https://www.kimonolabs.com/api/9w66kn6i',
    apikey: 'NCAA_API_KEY',
    method: 'GET',
    dataType: 'jsonp',
    data: {

    }
  })
  .done(function(data) {
    console.log(data);
  });

});
