let addMarkButton = document.getElementById("addMark");
addMarkButton.addEventListener("mousedown", function addMark() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { mark: "current" },
      function (response) {
        console.log(response.isAdded);
      }
    );
  });
});

let snsButton = document.getElementById("hp");
snsButton.addEventListener("mousedown", function openSNS() {
  chrome.tabs.create({ url: "https://indexnotch.vercel.app/" });
});

let ghButton = document.getElementById("gh");
ghButton.addEventListener("mousedown", function openGH() {
  chrome.tabs.create({ url: "https://github.com/imchell/index-notch" });
});
