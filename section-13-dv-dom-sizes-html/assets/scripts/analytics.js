const intervalId = setInterval(() => {
  console.log('Sending analytics')
}, 2000); /// can pass in the array as well

document.getElementById("stop-analytics-btn").addEventListener("click", () => {
  clearInterval(intervalId);
});