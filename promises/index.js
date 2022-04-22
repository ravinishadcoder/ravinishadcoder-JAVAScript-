// let url = "https://www.meme.net/babubhaiyaa.jpg";

// function download(url) {
//   console.log(`Downloading ${url}`);
// }

// function process(url) {
//   console.log(`Processing ${url}`);
// }

// download(url);

// process(url);

//Step 2:

// let url = "https://www.meme.net/babubhaiyaa.jpg";

// function download(url) {
//   setTimeout(function () {
//     console.log(`Downloading ${url}`);
//   }, 3000);
// }

// function process(url) {
//   console.log(`Processing ${url}`);
// }

// download(url);

//process(url);
//sometimes a function (code) is dependent on other function (code)


//STEP 3:

// let url = "https://www.meme.net/babubhaiyaa.jpg";

// function download(url, callback) {
//   setTimeout(function () {
//     console.log(`Downloading ${url}`);

//     callback(url);
//   }, 3000);
// }

//callback -> process

// function process(url) {
//   console.log(`Processing ${url}`);
// }

// download(url, process);

//we used a callback  to create dependency



//STEP 4:

// let url = "https://www.meme.net/babubhaiyaa.jpg";

// function download(url, callback) {
//   setTimeout(function () {
//     console.log(`Downloading ${url}`);

//     callback(url);
//   }, 3000);
// }

//callback -> process

// download(url, function process(url) {
//   console.log(`Processing ${url}`);
// });



//step 5:

// let url1 = "https://www.meme.net/babubhaiyaa.jpg";
// let url2 = "https://www.meme.net/raju.jpg";
// let url3 = "https://www.meme.net/shyam.jpg";

// function download(url, callback) {
//   setTimeout(function () {
//     console.log(`Downloading ${url}`);

//     callback(url);
//   }, 3000);
// }

//callback -> process

// download(url1, function process(url) {
//   console.log(`Processing ${url1}`);

//   download(url2, function process(url) {
//     console.log(`Processing ${url2}`);

//     download(url3, function process(url) {
//       console.log(`Processing ${url3}`);
//     });
//   });
// });



//STEP 6:

// let url1 = "https://www.meme.net/babubhaiyaa.jpg";
// let url2 = "https://www.meme.net/raju.jpg";
// let url3 = "https://www.meme.net/shyam.jpg";

// function download(url, callback) {
//   setTimeout(function () {
//     console.log(`Downloading ${url}`);

//     callback(url);
//   }, 3000);
// }

//callback -> process

// download(url1, function process(url) {
//   console.log(`Processing ${url1}`);

//   download(url2, function process(url) {
//     console.log(`Processing ${url2}`);

//     download(url3, function process(url) {
//       console.log(`Processing ${url3}`);
//     });
//   });
// });

//STEP 7:

// let url1 = "https://www.meme.net/babubhaiyaa.jpg";
// let url2 = "https://www.meme.net/raju.jpg";
// let url3 = "https://www.meme.net/shyam.jpg";

// function download(url) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log(`Downloading ${url}`);

//       resolve(url);
//     }, 3000);
//   });
// }

// function process(url) {
//   console.log(`Processing ${url}`);
// }

// download(url1).then(function (res) {
//   process(res);

//   download(url2).then(function (res) {
//     process(url2);

//     download(url3).then(function (res) {
//       process(url3);
//     });
//   });
// });



//STEP 8:

// let url1 = "https://www.meme.net/babubhaiyaa.jpg";
// let url2 = "https://www.meme.net/raju.jpg";
// let url3 = "https://www.meme.net/shyam.jpg";

// function download(url) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log(`Downloading ${url}`);

//       resolve(url);
//     }, 3000);
//   });
// }


// function process(url) {
//   console.log(`Processing ${url}`);
// }

// async function main() {
//   let d1 = await download(url1);

//   process(d1);

//   let d2 = await download(url2);

//   process(d2);

//   let d3 = await download(url3);

//   process(d3);
// }
// main()


// Step 9


let img = document.getElementById("image");

function checkTransaction() {
  //...
  return true;
}

const myPromise = new Promise(function (resolve, reject) {
  let transaction_status = false;

  setTimeout(function () {
    transaction_status = checkTransaction();

    if (transaction_status === true) {
      resolve("Payment sucessfull");
    } else {
      reject("Payment failed");
    }
  }, 3000);
});

myPromise
  .then(function (res) {
    console.log("res:", res);
    image.src =
      "https://media3.giphy.com/media/xT0GqssRweIhlz209i/200w.webp?cid=ecf05e47o3nej8dyj6csbg2krzoa4bl6qxj0n5jdph39ul7z&rid=200w.webp&ct=g";
  })
  .catch(function (err) {
    console.log("this is my err:", err);
  });