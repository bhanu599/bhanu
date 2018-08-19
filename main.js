// function loadjson(file,callback) {
// var xhr = new XMLHttpRequest();
// xhr.overrideMimeType("appplication/json");
// xhr.open("GET",file,tuncrue);
// xhr.onreadystatechange=function(){
// 	if (xhr.readyState===4&&xhr.status=="200"){
// 		callback(xhr.responseText);
// 	}
// };
// xhr.send(null);
// }
// loadjson("details.json",function(text){
// 	var data=JSON.parse(text);
// 	console.log(data);
// 	basics(data.details);
// 	careerinfo(data.career);
// 	educationinfo(data.educationalqualification);
// 	skillset(data.skills);
// 	achievement(data.achievements);

// })

function loadjson(file){
	return new Promise((resolve,reject)=>{
	    return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else
			{
				reject(new Error('error'));
			}
		})
	})
}
var newfile=loadjson("details.json");
newfile.then(data=>{
		console.log(data);
	basics(data.details);
	careerinfo(data.career);
	educationinfo(data.educationalqualification);
	skillset(data.skills);
	achievement(data.achievements);

})
var left=document.querySelector(".left");
function basics(det){
	var img=document.createElement("img");
	img.src=det.image;
	left.appendChild(img);
	var name1=document.createElement("h3");
    name1.textContent=det.name;
    left.appendChild(name1);
    var num=document.createElement("h3");
    num.textContent=det.phoneno;
    left.appendChild(num);
    var ema=document.createElement("h3");
    ema.textContent=det.email;
    left.appendChild(ema);
    var add=document.createElement("h2");
    add.textContent="Address";
    left.appendChild(add);
    var hrz=document.createElement("hr");
    left.appendChild(hrz);
    var adddetails=document.createElement("h3");
    adddetails.textContent=det.address;
    left.appendChild(adddetails);

}
var right=document.querySelector(".right");
function careerinfo(det){
	var career1=document.createElement("h3");
	career1.textContent="careerobject";
	right.appendChild(career1);
	var hrz1=document.createElement("hr");
	right.appendChild(hrz1);
	var career2=document.createElement("p");
	career2.textContent=det.careerobject;
	right.appendChild(career2);
}
function educationinfo(edu){
	var table1=document.createElement("h1");
	table1.textContent="educationalqualification";
	right.appendChild(table1);
	var hrz3=document.createElement("hr");
	right.appendChild(hrz3);
	var table2=document.createElement("table");
	table2.border="1";
	right.appendChild(table2);
	tabledata="";
	for(i=0;i<edu.length;i++)
	{
           tabledata+="<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].passingyear+"</td><td>"+edu[i].percentage+"</td></tr>";

    }
        table2.innerHTML=tabledata;
    }
    function skillset(skill){
    	var skill1=document.createElement("h1");
    	skill1.textContent="skills";
    	right.appendChild(skill1);
    	var hrz4=document.createElement("hr");
	    right.appendChild(hrz4);
	    for(i=0;i<skill.length;i++){
	    	var s=document.createElement("h3");
	    	s.textContent=skill[i].title;
	    	right.appendChild(s);
	    	var ul=document.createElement("ul");
	    	var li=document.createElement("li");
	    	li.textContent=skill[i].info;
	    	ul.appendChild(li);
	    	right.appendChild(ul);
	    }
	}
	function achievement(achi){
		var ac=document.createElement("h3");
		ac.textContent="achievements";
		right.appendChild(ac);
		var hrz5=document.createElement("hr");
	    right.appendChild(hrz5);
	    for(i=0;i<achi.length;i++){
	    	var sa=document.createElement("h3");
	    	sa.textContent=achi[i].title;
	    	right.appendChild(sa);
	    	var d=document.createElement("ul");
	    	var l=document.createElement("li");
	    	l.textContent=achi[i].information;
	    	d.appendChild(l);
	    	right.appendChild(l);
	    }

	}
	function openpage(){
		window.open("resume2.html","_self",true)
	}