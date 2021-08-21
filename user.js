 


    //  var key = Math.random()*1524;



// firebase.database().ref("data" ).on('child_added',function(data){
//     document.getElementById("data").innerHTML = data.val().key.value;

//     console.log(data.val())
//     document.write(data.val().  itemname ,'<br>')
//     document.write(data.val().  price ,'<br>')
//     document.write(data.val().  image ,'<br>')
//     window.location.href="./user.html"
//     var items = document(data.val())
// document.write(items)
// var image =document.getElementById("page-url").value
// var price =document.getElementById("page-main-content").value
// })

// var userDataRef = firebase.database().ref("UserData").orderByKey();
// userDataRef.once("value").then(function(snapshot) {
// snapshot.forEach(function(childSnapshot) {
//   var key = childSnapshot.key;
//   var childData = childSnapshot.val();              

//   var name_val = childSnapshot.val().Name;
//   var id_val = childSnapshot.val().AssignedID;

//   $("#name").append(name_val);
//   $("#id").append(id_val);

//   });
// });


// document.getElementById("data").innerHTML = data.val().key.value;


function addlist(item,image,price, link){
    var data = document.getElementById("data")
    var items = document.getElementById("data")
    // var header = document.createElement("h1")
    var _itemname = document.createElement("p")
    var _image = document.createElement("img")
    var _price = document.createElement("h1")

    // header.innerHTML=
    _itemname.innerHTML = "itemName =" +"  "+item;
    // _image.innerHTML = "image"+"  "+link;
    _image.src = link;
     // ImgName = document.getElementById("namebox").value
 
  _price.innerHTML = "price"+"  "+price +"<hr>";

  items.appendChild(_itemname)
  data.appendChild(_image)
  data.appendChild(_price)


}
function FetchAllData(){
firebase.database().ref("data").on("value",function(snapshot){
 snapshot.forEach(
     function(childSnapshot) {
   var item = childSnapshot.val().itemname;
  var image = childSnapshot.val().image;  
      var link = childSnapshot.val().link;

  var price = childSnapshot.val().price;  

     addlist(item,image,price, link)          
 }
 )
})
}
window.onload(FetchAllData())


// function retrieve(){
//   // ImgName = document.getElementById("namebox").value
//   firebase.database().ref("pictures/").once("value",function(snapshot){
//       document.getElementById("myimg").src =snapshot.val().link;
 
//   });

// }
// window.onload(retrieve())



// var ImgName, ImgUrl;
// var files =[]
// var reader ;

// document.getElementById("select").onclick = function(e){
//     var input = document.createElement('input')
//     input.type = "file"

  
//     input.onchange  = e =>{
//         files = e.target.files
// reader = new FileReader()
// reader.onload = function (){
//     document.getElementById("myimg").src = reader.result;

// }
// reader.readAsDataURL(files[0]);
//     }
//     input.click()
// }

// //upload image
// //------------------upload picture to storage
// document.getElementById("upload").onclick = function(){
//     ImgName = document.getElementById("namebox").value
//     var uploadTask = firebase.storage().ref("Image/"+ImgName+".png").put(files[0])
//     uploadTask.on("state_changed",function(snapshot){
//         var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//         document.getElementById("upProgress").innerHTML="upload"+progress+"%";

//     },
// //------------------error handling

//     function(error){
//         alert('errorrrrrrrrr');
//     },
//     //------------------submitting to database

// function(){
//     uploadTask.snapshot.ref.getDownloadURL().then(function(url){
//  ImgUrl = url;

// firebase.database().ref("pictures/"+ImgName).set({
//     Name : ImgName,
//     link: ImgUrl
// })
// alert ("image is added")
// }
//     );
// })
// }
// //------------------retrieval
// document.getElementById("retrieve").onclick=function(){
//     ImgName = document.getElementById("namebox").value
//  firebase.database().ref("pictures/"+ImgName).on("value",function(snapshot){
//      document.getElementById("myimg").src =snapshot.val().link

//  })
// }