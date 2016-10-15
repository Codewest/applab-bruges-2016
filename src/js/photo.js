var video = document.getElementById("video");
var mediaStream;
var width = 1280;
var height = 720;
var data;
var camera = function camera(){
    navigator.getUserMedia(
         {
            video:{ width: width, height: height},
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
    mediaStream.getTracks()[0].stop();
}

var takePicture = function takePicture(cb){
    var canvas = document.getElementById("canvas");
    canvas.width  = width;
    canvas.height = height;
    canvas.getContext('2d').drawImage(video, 0, 0, width, height);
    data = canvas.toDataURL('image/png');
    stopStream();
    $('.hidden').removeClass("hidden");
    $('.picture').addClass("hidden");
    sendPicture();
    cb();
}

var sendPicture = function sendPicture(){
    $.ajax({
        type: "post",
        url:"/foto/save",
        data:{
            imgBase64: data
        }
    });
}

export { camera, takePicture };

/*$(function(){
    camera();
    $('.picture').on('click',takePicture);
    $('#send').on('click',sendPicture)
})*/
