// // Initialize button with user's preferred color
// let changeColor = document.getElementById("changeColor");

// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color;
// });

// // When the button is clicked, inject setPageBackgroundColor into current page
// changeColor.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//   console.log([tab])


//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: setPageBackgroundColor,
//   });
// });

// // The body of this function will be executed as a content script inside the
// // current page
// function setPageBackgroundColor() {
//   chrome.storage.sync.get("color", ({ color }) => {
//     document.body.style.backgroundColor = color;
//   });
// }



// chrome.tabs.onActivated.addListener(tab => {
//   // chrome.tabs.get(tab.tav=)
// })


var url
chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
  url = tabs[0].url;  // location.reload()
  // use `url` here inside the callback because it's asynchronous!
});

var countDownDate = new Date().getTime() + 900000;

var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  console.log(distance)

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// var popupWindow = window.open(
//   chrome.extension.getURL("normal_popup.html"),
//   "exampleName",
//   "width=400,height=400"
// );
// window.close()

// console.log(window.location.href)

function sendMail() {
  var link = "mailto:raymondhuang2015@gmail.com"
           + "?cc="
           + "&Subject=" + encodeURIComponent(url.split('/').at(-1))
           + "&body=" + encodeURIComponent(document.getElementById('myText').value)
  ;
  window.location.href = link;
}


document.getElementById("myButton").addEventListener("click", sendMail);



// let overlay = document.querySelector('#mouseover_overlay');
// document.addEventListener('mouseover', e => {
  
//   let elem = e.target;
//   let rect = elem.getBoundingClientRect();
//   overlay.style.top = rect.top +'px';
//   overlay.style.left = rect.left +'px';
//   overlay.style.width = rect.width +'px';
//   overlay.style.height = rect.height +'px';
// });