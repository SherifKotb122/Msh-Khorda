var request = new XMLHttpRequest();

	
	request.addEventListener('readystatechange',()=>{
		{
			if (request.readyState===4 && request.status===200)
			{
			var x=request.responseText;
             data = JSON.parse(x);
             console.log(data);
            //  callback(undefined,data);
            var dataL = document.getElementById("cList1"); 
            for(let i=0; i<data.length; i++){
                var carName = data[i].name;
                var nElement = document.createElement("option");
                nElement.setAttribute("value",carName);
                dataL.appendChild(nElement);
            }
            var dataL = document.getElementById("cList2"); 
            for(let i=0; i<data.length; i++){
                var carName2 = data[i].name;
                var nElement2 = document.createElement("option");
                nElement2.setAttribute("value",carName2);
                dataL.appendChild(nElement2);
            }
                
			}
			else if(request.readyState === 4){
				// callback("could not fetch data",undefined);
			}
		}
	});
	
		
	request.open("GET","http://localhost:5501/advancedSearch/json.json");
    request.send();
    
    var carComp1;
    var carComp2;

    
    function comparing(){
        var fCar = document.getElementById("comp1").value;
        var sCar = document.getElementById("comp2").value;
        

        for(let x=0; x<data.length; x++){
            if(fCar == data[x].name){
                // console.log(data[x]);
                carComp1 = data[x];
            }
            if(sCar == data[x].name){
                // console.log(data[x]);
                carComp2 = data[x];
            }
        }
        document.getElementById("cTable").style.display = "block";

        document.getElementById("n1").innerHTML = carComp1.name;
        document.getElementById("n2").innerHTML = carComp2.name;

        document.getElementById("i1").setAttribute("src",carComp1.img[0]);
        document.getElementById("i2").setAttribute("src",carComp2.img[0]);
        localStorage.setItem("firstImage",carComp1.id );
        localStorage.setItem("secondImage",carComp2.id );


        document.getElementById("y1").innerHTML = carComp1.year;
        document.getElementById("y2").innerHTML = carComp2.year;

        document.getElementById("p1").innerHTML = carComp1.price;
        document.getElementById("p2").innerHTML = carComp2.price;

        document.getElementById("s1").innerHTML = carComp1.shape;
        document.getElementById("s2").innerHTML = carComp2.shape;

        document.getElementById("t1").innerHTML = carComp1.transmission;
        document.getElementById("t2").innerHTML = carComp2.transmission;

        
         
    }
    // console.log(link1);
    
    function clicLink1(){
        var x1 = localStorage.getItem("firstImage");
        localStorage.setItem("carId",x1);
    }
    function clicLink2(){
        var x2 = localStorage.getItem("secondImage");
        localStorage.setItem("carId",x2);
    }

    