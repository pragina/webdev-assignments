// Add your code here

let newdiv = document.createElement("div");
newdiv.style.border = "1";
newdiv.style.borderStyle = "solid";
newdiv.style.color = "black";
newdiv.style.height = "400px";
newdiv.style.weight = "400px";
newdiv.style.padding = "30px";
document.body.append(newdiv);

let pic = document.createElement("img");
pic.src = "../hw1/MyPic.jpg";
pic.alt = "Profile Picture";
pic.style.width = "200px";
pic.style.height = "200px";
pic.style.borderRadius = "50%";
pic.style.display = "block";
pic.style.margin = "0 auto";
newdiv.appendChild(pic);

let para = document.createElement("p");
para.textContent = `Hi! My name is Pragina(she/her). I am a graduate student at PSU. I 
  recently moved to Portland to attend classes in person. Before that 
  I was living in Washington State. My hobbies are cooking, gardening, 
  and cycling. In my free time I like to watch movies or go for a walk.`;
para.style.fontWeight = "bold";
newdiv.appendChild(para);
