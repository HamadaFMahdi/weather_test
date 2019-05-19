function getRandomArticle() {

  let city = document.getElementById('search_query').value
  
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=d4af0fcc024edf1384ddbf2684bd2740")
    .then(function(response) {
      console.log(response);
      return response.json();
    })
    .then(function(data) {
      console.log(data)
     // var ayah = data['Text']
      // var surah = data.['ChapterName']
      // var verseNo = data.['Id']
      // var surahNo = data.['Chapter']
      // document.getElementById("txt2").textContent = ayah;
      // document.getElementById("txt1").textContent = '';
      // document.getElementById("txt3").textContent = '';
      // document.getElementById("txt4").textContent = '';
    })
    .catch(function(err) {
      console.log(err);
    });
}
  document.getElementById("button").addEventListener("click", getRandomArticle);