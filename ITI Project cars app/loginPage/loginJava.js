function loginArray(callback){
	var request = new XMLHttpRequest();

	
	request.addEventListener('readystatechange',()=>{
		{
			if (request.readyState===4 && request.status===200)
			{
			var x=request.responseText;
			 data = JSON.parse(x);
			 callback(undefined,data);
			
			}
			else if(request.readyState === 4){
				callback("could not fetch data",undefined);
			}
		}
	});
	
		
	request.open("GET","http://localhost:5500/loginPage/login.json",false);
	request.send();

	
}


function log(){
    var userName = document.getElementById("user").value;
    var passWord = document.getElementById("pass").value;
    var correct = false;
    loginArray((err,data)=>{
        for(let i=0; i<data.length; i++){
            if(userName == data[i].user && passWord == data[i].pass){
                correct = true;
            }
        }
    });

  if(correct == false){
    alert("Wrong username or password")
    var fo = document.getElementById("formk");
    fo.addEventListener('submit', function(e) {
        e.preventDefault();
        
      });
  }else{
    console.log("hello " + userName);
  }
       
    

}