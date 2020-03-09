const xhrGet = (url, callback) => {
  const xhr = new XMLHttpRequest();
  let xhrResponseText = "";
  xhr.open("GET", url);
  xhr.send();
  xhr.onreadystatechange = () => {
    console.log("Ready State:", xhr.readyState);
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        xhrResponseText = xhr.responseText;
        console.log(xhrResponseText)
        callback(xhrResponseText);
        
      } else console.error("Request Failed!!!");
    }
  };
  return xhr;
};

const onDocumentLoad = () => {
    let githubZenEl = document.querySelector("#github-zen-quotes");
    setTimeout( () => {
        let url = "https://api.github.com/zen";
        xhrGet(url, (xhrResponseText)=>{
            githubZenEl.innerHTML = xhrResponseText;
        });
    } ,2000) 
}

const changeImage = () => {
  let imageEl = document.querySelector(".random-dog");

  getImage(xhrResponseText => {
    let imageSrc = JSON.parse(xhrResponseText).message;
    imageEl.src = imageSrc;
  });
};

const getImage = callback => {
  const url = "https://dog.ceo/api/breeds/image/random";
  xhrGet(url, callback);
};




const fetchLatestPrice =() => {
    let priceEl = document.querySelector("#bitcoin-price");

  getPrice(xhrResponseText => {
    let priceData = JSON.parse(xhrResponseText);
    priceEl.innerHTML = `${priceData.bpi.INR.rate} &#8377; ` ;
  });
};

const getPrice = callback => {
    const url = "https://api.coindesk.com/v1/bpi/currentprice/INR.json";
    xhrGet(url, callback);
  };
