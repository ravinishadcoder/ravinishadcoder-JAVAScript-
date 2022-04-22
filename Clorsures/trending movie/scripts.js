

const Trending = async()=>{
    try{
      let res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=500d04caa8401e6ba53b9e9b326575f4&language=en-US&page=1`);
      let data = await res.json();
      //console.log(data)
      append(data.results)
    }catch(err){
        console.log(err)
    }
}
Trending();

const append = (data)=>{
    console.log(data)
    data.forEach(({title,poster_path,release_date,vote_average})=>{
       let box = document.createElement("div");
       let img = document.createElement("img");
       img.src = `https://image.tmdb.org/t/p/original${poster_path}`;
       let name =  document.createElement("p")
        name.innerText = "Name : "+title;
      
       let date = document.createElement("p");
       date.innerText ="Release Date : "+ release_date;
       let rating = document.createElement("p");
       rating.innerText ="IMDB Rating : "+ vote_average
       box.append(img,name,date,rating);
       document.getElementById("container").append(box)
       
    })
}









// forcast url = https://api.openweathermap.org/data/2.5/forecast?q=mumbai&appid=e03bd0603feaf2d93788d91947c8d411