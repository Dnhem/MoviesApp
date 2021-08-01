$("button").on("click", function(e) {
  e.preventDefault();

  const movie = $("<li></li>");

  movie.append("<p class='movie'>Movie:</p>");
  movie.append($(".movie-title").val());
  movie.append("<p class='score'>Rating:</p>");
  movie.append($(".rating").val());
  movie.append("<p><button class='remove'>X</button></p>");

  $("ul").append(movie);

  $(".movie-title").val("");
  $(".rating").val("");
});

$("ul").on("click", "li", function() {
  $(this).remove();
});
