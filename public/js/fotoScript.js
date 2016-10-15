var video = document.getElementById("video");
var mediaStream;
var width = 1280;
var heigth = 720;
var camera = function camera(){
    navigator.getUserMedia(
         {
            video:{ width: width, height: heigth },
            audio:false
         },
         function(stream) {
             mediaStream =stream;
             video.src = window.URL.createObjectURL(stream);

            video.play();
         },
         function(error) {
            alert('Something went wrong. (error code ' + error.code + ')');
            return;
         }
      );
}

var stopStream = function stopStream(){
    console.log(mediaStream.getTracks());
    mediaStream.getTracks()[0].stop();
}

var takePicture = function takePicture(){
    var canvas = document.getElementById("canvas");
    canvas.width  = width;
    canvas.height = heigth;
    canvas.getContext('2d').drawImage(video, 0, 0, width, heigth);
    var data = canvas.toDataURL('image/png');
    $.ajax({
        type: "post",
        url:"/foto/save",
        data:{
            imgBase64: data
        }
    }).done(function(json){
        console.log("saved");
    })
    stopStream();

}


$(function(){
    camera();
    $('#stop').on('click',stopStream);
    $('#picture').on('click',takePicture);
})
