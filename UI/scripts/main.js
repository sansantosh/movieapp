document.addEventListener("DOMContentLoaded", function(event) {

  var inputEl;
  var isValid = false;
  var dt = null;
  var curMonth = null;
  var wrapper;

  var displayMovie = function(data){
    var mList = data && typeof(data) ==='string'? JSON.parse(data) : data;
    var wrapEl  = wrapper ? wrapper : document.getElementById('movieDisplay');
    var movieEl;
    if(mList.length > 0){
        mList.forEach(function(itm, idx){
          movieEl = document.createElement('img');
          movieEl.setAttribute('src', 'Images/' + itm.src);
          wrapEl.append(movieEl);
      })
    }

  };

  $('#getMovies').click(function(e){

    e.preventDefault();
    wrapper = document.getElementById('movieDisplay');
    wrapper.innerHTML =""
    inputEl = $("#party")[0];
    isValid = inputEl.validity.valid;
    if(isValid){
      dt = new Date(inputEl.value);
      curMonth = 1 + dt.getUTCMonth();
    }
    
    if(curMonth){
      $.get({
        url: "http://localhost:8081/movieList/"+(curMonth)
      })
      .done(function( data ) {
          displayMovie(data);
      });
    }
  });

});
