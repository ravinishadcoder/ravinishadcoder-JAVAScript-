function searchmovies(){
let name = document.getElementById("name").value;
findMovie(name)
}


function findMovie(q){
    document.getElementById("container").innerHTML = null;
    fetch(`https://www.omdbapi.com/?apikey=fb631683&t=${q}`)
    .then(function(data){
        return data.json();
    })
    .then(function(data){
        if(data.Title!==undefined){
       let box = document.createElement("div");
        let info = document.getElementById("container");
        let img = document.createElement("img");
        img.src = data.Poster;
        let name = document.createElement("p");
        name.innerText = "Title : "+data.Title;
        let releaseDt = document.createElement("p");
        releaseDt.innerText = "Release Date : "+data.Released;
        let Actres = document.createElement("p");
        Actres.innerText = "Star-Cast : "+data.Actors;
        let rating = document.createElement("p");
        rating.innerText = "IMDB Rating : "+data.imdbRating;
        let rec = document.createElement("h2");
        rec.innerText = "RECOMMENDED"
        if(data.imdbRating>8.5){
            box.append(rec,img,name,releaseDt,Actres,rating);
            info.append(box)  
        }
        else{
        box.append(img,name,releaseDt,Actres,rating);
        info.append(box)
        }

        console.log(data)
        }
        else{
            let info = document.getElementById("container");
            let img = document.createElement("img");
            img.style.width = "700px";
            img.src = "https://cdn.searchenginejournal.com/wp-content/uploads/2020/08/killer-404-page-dan-woodger-5f3d610a5d027.png"
            info.append(img)

        }
        
    })
    .catch(function(err){
        console.log("sorry")
    })
}

let url2 = "https://api.themoviedb.org/3/search/movie?api_key=953076d46292d5b9b918b65d89cc9419&language=en-US&page=1&include_adult=false&query=avengers";


