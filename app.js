// $(function(){

//     var overlay = $('<div></div>');
//         overlay.css({
//           background: 'rgba(0,0,0,0.5)',
//           '-webkit-background-size': 'cover',
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           'z-index': 999,
//           'pointer-events': 'none'
//         });
  
//     var input = $('.panel input, .panel textarea');
  
//     input.focusin(function(){
//       $('body').prepend(overlay)
//       var panel = $(this).parents('.panel');
//       panel.css({
//         'z-index': 1000,
//         position: 'relative'
//       })
//     });
  
//     input.focusout(function(){
//       var panel = $(this).parents('.panel');
//       panel.css({
//         position: 'static'
//       })
//       overlay.detach();
//     });
    
    
//     // esc releases focus from inputs
//     $(document).keyup(function(e){
//       if(e.keyCode === 27){
//         input.blur();
//       };
//     });
  
//   })
  
let save =()=>{
    var items =document.getElementById("page-title").value 
var price =document.getElementById("page-main-content").value
var image =document.getElementById("page-url").files[0]
var imgname = image.name 
// localStorage.setItem("item",items)
// localStorage.setItem("image",image)
// localStorage.setItem("iteghn",price)
// console.log(items,image,price)
// document.write(image,items,price)
var obj={
    itemname : items,
    image:imgname, 
    price:price
 
}
// var image =document.getElementById("page-url").files[0]
// var imgname = image.name 
    // firebase.storage().ref("image").child(imgname).put(image)
    // //   Storage.put(image)
    //   .then((succ)=>{
    //       console.log("success==>",succ)
    //   })
    //   .catch((err)=>{
    //       console.log("error",err)
    //   })
      
      var uploadTask = firebase.storage().ref("Image/"+imgname+".png").put(image)
      uploadTask.on("state_changed",function(snapshot){
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          document.getElementById("upProgress").innerHTML="upload"+progress+"%";
  
          uploadTask.snapshot.ref.getDownloadURL().then(function(url){
              ImgUrl = url;
              obj.link = ImgUrl;
              firebase.database().ref("data").push(obj)

            //  firebase.database().ref("data/"+imgname).set({
            //      Name : ImgName,
            //      link: ImgUrl
            //  })
             alert ("image is added")
             }
                 );
             })

}
// var key = Math.random()*1524;

// firebase.database().ref("data"+key.toFixed()).set(obj)


// let send = ()=>{
//     var image = document.getElementById("file").files[0]
//     var imgname = image.name 
//     var Storage = firebase.Storage().ref("image").child(imgname)
//       Storage.put(image)
//       .then((succ)=>{
//           console/log("success==>",succ)
//       })
//       .catch((err)=>{
//           console.log("error",ree)
//       })
// }





// var ImgName, ImgUrl;
// var files =[]
// var reader ;
// function select(e){
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
// function upload(){
//     // ImgName = document.getElementById("namebox").value
//     var uploadTask = firebase.storage().ref("Image/").put(files[0])
//     uploadTask.on("state_changed",function(snapshot){
//         var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//         document.getElementById("upProgress").innerHTML="upload"+progress+"%";

//         uploadTask.snapshot.ref.getDownloadURL().then(function(url){
//             ImgUrl = url;
           
//            firebase.database().ref("pictures/"+ImgName).set({
//                Name : ImgName,
//                link: ImgUrl
//            })
//         //    alert ("image is added")
//            }
//                );
//            })
// }

// save()


//image working

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
//     // ImgName = document.getElementById("namebox").value
//     var uploadTask = firebase.storage().ref("Image/"+ImgName+".png").put(files[0])
//     uploadTask.on("state_changed",function(snapshot){
//         var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//         document.getElementById("upProgress").innerHTML="upload"+progress+"%";

//     },
//------------------error handling

    // function(){
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


//another code
// let send = ()=>{
//     var image = document.getElementById("file").files[0]
//     var imgname = image.name 
//     var Storage = firebase.Storage().ref("image").child(imgname)
//       Storage.put(image)
//       .then((succ)=>{
//           console/log("success==>",succ)
//       })
//       .catch((err)=>{
//           console.log("error",ree)
//       })
// }
