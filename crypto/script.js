var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");
var usdt = document.getElementById("tether");
var sol = document.getElementById("solana");



document.addEventListener("DOMContentLoaded", function() {
    const logoImage = document.getElementById("logo");
  
    logoImage.addEventListener("click", function() {
      window.location.reload(); // Sayfayı tekrar yükle
    });
  });
  



var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Ctether%2Csolana&vs_currencies=usd",
    "method": "GET",
    "headers": {}
}
$.ajax(settings).done(function (response){
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;
    usdt.innerHTML = response.tether.usd;
    sol.innerHTML = response.solana.usd;


   
});