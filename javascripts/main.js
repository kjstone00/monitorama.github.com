
// render view according to hash
var setSection = function(name) {
  console.log(name);
  $('section').css('display', 'none').css('height', '0')
  $('header ul li a').removeClass('active');
  $('section.' + name).css('display', 'block').css('height', 'auto')
  $('header ul li a#' + name).addClass('active');
  window.location.hash = name;
  window.scrollTo(0,0);
}

// load view by click
$('header ul li').on('click', 'a', function() {
  var sid = ($(this).attr('id'));
  setSection(sid);
  return false;
});

// load view by anchor
if (window.location.hash.length !== 0) {
  setSection(window.location.hash.replace('#', ''));
}

// populate speakers
for (var i in speakers) {
  var image = '<img src="http://www.gravatar.com/avatar/' + speakers[i].hash + '" />';
  var name = '<span class="name">' + speakers[i].name + '</span>';
  var github = '<span class="github"><a href="https://github.com/' +
    speakers[i].github + '" target="_new">github</a></span>';
  var twitter = '<span class="twitter"><a href="https://twitter.com/' +
    speakers[i].twitter + '" target="_new">twitter</a></span>';
  var bio = '<p class="bio">' + speakers[i].bio + '</p>';

  $('section.speakers ul').append('<li class="speaker">' + image + name + twitter + github + bio + '</li>');
}
