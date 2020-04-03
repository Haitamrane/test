document.querySelector('#start').addEventListener('click', function (e) {
 
    navigator.getUserMedia({
        video: true,
        audio: true
    }, function(stream){
        let emitterVideo = document.querySelector('#emitter-video')
        const mediaStream = new MediaStream();
        emitterVideo.srcObject = mediaStream;
        emitterVideo.load()
    }, function() {})

})