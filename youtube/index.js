const Searchmovie = async()=>{
    try{
        const q = document.getElementById("query").value;
        const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${q}%202&key=AIzaSyBB77ASrAFiOiPFmYjF2JaNqDoy6KhggcU`    
        );
        const data = await res.json();
        append(data.items)
        console.log(data.items)
    }catch(err){
        console.log(err)
    }
}

const append = (videos)=>{
    let show_videos = document.getElementById("show_videos");

    show_videos.innerHTML = null;

    videos.forEach(({id:{videoId},snippet:{title},snippet:{thumbnails}})=>{
     let div = document.createElement("div");
     div.style.cursor = "pointer"
     // console.log(thumbnails.high.url)
     let iframe = document.createElement("img");
     iframe.src = thumbnails.high.url;
    //  iframe.width = "100%";
    //  iframe.height = "100%";
    //  iframe.allow = "fullscreen"
      let name = document.createElement("h4");
      name.innerText = title;
      div.addEventListener("click",()=>{
          Playvideo(videoId,title);
      })
      div.append(iframe,name);

    show_videos.append(div);
    const q = document.getElementById("query").value=null;
    });
}
let arr = [];
function Playvideo(videoId,title){
    let obj = {
        video : videoId,
        name : title,
    }
    arr.push(obj);
    localStorage.setItem("ytvideo",JSON.stringify(arr))
    window.location.href = "video.html"
} 
//https://i.ytimg.com/vi/Qah9sSIXJqk/hqdefault.jpg

fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=$most popular in india%20videos%202&key=AIzaSyBB77ASrAFiOiPFmYjF2JaNqDoy6KhggcU")
.then((data)=>{
    return data.json();
})
.then((data)=>{
    console.log(data)
    popular(data.items)
})
.catch((err)=>{
    console.log(err)
})

function popular(data){
    let show_videos = document.getElementById("show_videos");

    show_videos.innerHTML = null;

    data.forEach(({id:{videoId},snippet:{title},snippet:{thumbnails}})=>{
     let div = document.createElement("div");
     div.style.cursor = "pointer"
     // console.log(thumbnails.high.url)
     let iframe = document.createElement("img");
     iframe.src = thumbnails.high.url;
    //  iframe.width = "100%";
    //  iframe.height = "100%";
    //  iframe.allow = "fullscreen"
      let name = document.createElement("h4");
      name.innerText = title;
      div.addEventListener("click",()=>{
          Playvideo(videoId,title);
      })
      div.append(iframe,name);

    show_videos.append(div);
    });
}



//<a href="https://www.freeiconspng.com/img/46020">Youtube Logo PNG Transparent Image</a>
//https://download.logo.wine/logo/YouTube/YouTube-Logo.wine.png