var btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  var eMail = document.getElementById("mail").value;
  //const paragraph = 'madesh.mahi@gmail.com';
   const searchTerm = ".";
  const firstName = eMail.substring(0, eMail.indexOf(searchTerm));
  var store = firstName.length;
//   console.log(store); 
  const SecName = eMail.substring(store + 1, eMail.indexOf("@"));
  console.log(firstName);
  console.log(SecName);  
});
