console.log("hellow javascript")

let heartCount = 0;
    function incrementHeart(){ 
        heartCount++;
        document.getElementById("heart_count").textContent =heartCount;
    }

 
let coins = 100;

const services = [
  { name: "জাতীয় জরুরী সেবা", en: "National Emergency", number: "999" },
  { name: "পুলিশ", en: "Police", number: "999" },
  { name: "ফায়ার সার্ভিস", en: "Fire Service", number: "999" },
  { name: "অ্যাম্বুলেন্স", en: "Ambulance", number: "1994-999999" },
  { name: "নারী ও শিশু সহায়তা", en: "Women & Child Helpline", number: "109" },
  { name: "দুদক", en: "Anti-Corruption", number: "106" },
  { name: "বিদ্যুৎ বিভ্রাট", en: "Electricity Outage", number: "16216" },
  { name: "ব্রাক", en: "Brac", number: "16445" },
  { name: "বাংলাদেশ রেলওয়ে", en: "Bangladesh Railway", number: "163" }
];
   const container = document.getElementById("service-container");

services.forEach(service => {
  const card = document.createElement("div");
  card.className = "div_card max-w-[350px] h-[300px] border-2 border-gray-100 bg-white rounded-lg p-4";
  card.innerHTML = `
    <h3 class="font-bold text-xl">${service.name}</h3>
    <p class="text-gray-400 text-lg mb-2">${service.en}</p>
    <h2 class="font-bold text-xl">${service.number}</h2>
    <button onclick="makeCall('${service.en}', '${service.number}')" class="btn !bg-[#00a63e] !rounded-lg w-[100px] h-[30px] !text-white">Call</button>
  `;
  container.appendChild(card);
});
function makeCall(serviceName, serviceNumber) {
  if (coins < 20) {
    alert("আপনার পর্যাপ্ত কয়েন নেই!");
    return;
  }

  coins -= 20;
  document.getElementById("coin-count").innerText = coins;

  alert(`Calling ${serviceName} at ${serviceNumber}`);


  const history = document.getElementById("call-history");
  const li = document.createElement("li");
  li.innerText = `${serviceName} - ${serviceNumber}`;
  history.appendChild(li);
}
