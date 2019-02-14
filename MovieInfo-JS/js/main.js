$(document).ready(() => {
  $("#searchForm").on("submit", e => {
    let searchText = $("#searchForm").val();
    getMovies(searchText);
    e.preventDefault();
  });
});

function getMovies(searchText) {
  axios
    .get("http://www.omdbapi.com?s=" + searchText + "&apikey=66c8a010")
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
}
