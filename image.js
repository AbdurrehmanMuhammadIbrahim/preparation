
var ImgName, ImgUrl;
var files =[]
var reader ;
function select(e){
    var input = document.createElement('input')
    input.type = "file"

  
    input.onchange  = e =>{
        files = e.target.files
reader = new FileReader()
reader.onload = function (){
    document.getElementById("myimg").src = reader.result;

}
reader.readAsDataURL(files[0]);
    }
    input.click()

}



function upload(){
    ImgName = document.getElementById("namebox").value
    var uploadTask = firebase.storage().ref("Image/"+ImgName+".png").put(files[0])
    uploadTask.on("state_changed",function(snapshot){
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        document.getElementById("upProgress").innerHTML="upload"+progress+"%";

        uploadTask.snapshot.ref.getDownloadURL().then(function(url){
            ImgUrl = url;
           
           firebase.database().ref("pictures/"+ImgName).set({
               Name : ImgName,
               link: ImgUrl
           })
        //    alert ("image is added")
           }
               );
           })
}

function retrieve(){
    ImgName = document.getElementById("namebox").value
    firebase.database().ref("pictures/"+ImgName).once("value",function(snapshot){
        document.getElementById("myimg").src =snapshot.val().link;
   
    });

}





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

//upload image
//------------------upload picture to storage



// document.getElementById("upload").onclick = function(){
//     ImgName = document.getElementById("namebox").value
//     var uploadTask = firebase.storage().ref("Image/"+ImgName+".png").put(files[0])
//     uploadTask.on("state_changed",function(snapshot){
//         var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//         document.getElementById("upProgress").innerHTML="upload"+progress+"%";

    // },
//------------------error handling

    // function(error){
    //     alert('errorrrrrrrrr');
    // },
    //------------------submitting to database

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
//------------------retrieval

// document.getElementById("retrieve").onclick=function(retrieve){
//     ImgName = document.getElementById("namebox").value
//  firebase.database().ref("pictures/"+ImgName).once("value",function(snapshot){
//      document.getElementById("myimg").src =snapshot.val().link;

//  });
// }
// window.Onload(retrieve())



//another code

// let send = ()=>{
//     var image = document.getElementById("file").files[0]
//     var imgname = image.name 
//     var Storage = firebase.storage().ref("image").child(imgname)
//       Storage.put(image)
//       .then((succ)=>{
//           console/log("success==>",succ)
//       })
//       .catch((err)=>{
//           console.log("error",err)
//       })
// }
