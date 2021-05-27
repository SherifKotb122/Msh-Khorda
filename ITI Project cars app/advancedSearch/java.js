// List variable that will contain all the objects from the search 


function jsonArray(callback){
	var request = new XMLHttpRequest();

	var y;
	request.addEventListener('readystatechange',()=>{
		{
			if (request.readyState===4 && request.status===200)
			{
			var x=request.responseText;
			 data = JSON.parse(x);
			 callback(undefined,data);
			// var ko = y[9].price;
			// console.log(y);
			// console.log(x);
			// console.log(y);
			
			}
			else if(request.readyState === 4){
				callback("could not fetch data",undefined);
			}
		}
	});
	
		// return y;
	request.open("GET","../advancedSearch/json.json");
	request.send();
	// var x = request.responseText;
	
}



function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
var carType = getParameterByName('car');
var priceX =  getParameterByName('budget');
var shapeX =  getParameterByName('shape');
var transX =  getParameterByName('trans');
// console.log(shapeX);
// console.log(transX);

// console.log(carType);
// console.log(priceX);

// var x =window.location.search;
// var n = x.split("=");
// var ok = n[1];
// var mo = ok.split("&");
// var nam = mo[0];
// console.log(x);
// console.log(n);
// console.log(ok);
// console.log(mo);
// console.log(nam);
// var numbo = n[2];
// console.log(numbo);

//  get the json data and loop through it with the new values

// jsonArray((err,data)=>{
// 	console.log(data);
// 	var listX = document.getElementById("lists");
// 	for(let i =0; i<= data.length; i++){
// 		if(carType == data[i].type && data[i].price < priceX){
// 			listPage.push(data[i]);
// 		}
// 	}
	
// 	});
	
// console.log(listPage);
// var k=  window.location.search;
// console.log(k);

// var goInput = document.getElementById("go")	

// goInput.addEventListener("click",goFunc());