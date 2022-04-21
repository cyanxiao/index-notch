chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.create({ url: "https://indexnotch.vercel.app/" });
});
