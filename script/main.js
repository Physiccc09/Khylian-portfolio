function updateTime() {
  const time = new Date().toLocaleTimeString("fr-FR", {timeStyle: "medium",hourCycle: "h23",timeZone: "Europe/Paris"});
  document.getElementById("globalTime").textContent = time;
}
updateTime();
setInterval(updateTime, 1000);