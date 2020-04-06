console.log('hello world');

var youtubeKey = '';
var youtubeSearch = '';

// 'https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=skateboarding+dog&type=video&videoDefition=high',

$.ajax({
  url:
    'https://developers.google.com/apis-explorer/#p/youtube/v3/search?part=snippet&order=viewCount&q=skateboarding+dog&type=video&videoDefition=high',
  type: 'GET',
  dataType: 'json',
}).then(function (data) {
  console.log(data);
});
