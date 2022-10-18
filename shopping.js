window.onload = pageLoad;

function pageLoad()
{
	var xhr = new XMLHttpRequest();
    xhr.open("GET", "cloth.json");
    xhr.onload = function()
    {
        var jsondata = JSON.parse(xhr.responseText);
        console.log(jsondata);

        showData(jsondata);

    };
    xhr.onerror = function()
    {
        alert("error");
    };
    xhr.send();
}

function showData(data)
{
	console.log(Object.keys(data).length);
    var showContainer = document.getElementById("layer");
    var keys = Object.keys(data);
    console.log(keys);
    for(var i = 0 ;i < keys.length; i++) //ตอนแรกพิมพ์ lenght โค้ดเลยไม่รัน
    {
        var blockElement = document.createElement("div");

        var getPic = document.createElement("img");
        getPic.setAttribute("src",data[keys[i]].pic);
        
        var getBrand = document.createElement("h2");
        getBrand.innerHTML=data[keys[i]].brandname;

        var getPrice = document.createElement("h3");
        getPrice.innerHTML="Cost :"+data[keys[i]].price;

        blockElement.appendChild(getPic);
        blockElement.appendChild(getBrand);
        blockElement.appendChild(getPrice);

        showContainer.appendChild(blockElement);
    }
}

