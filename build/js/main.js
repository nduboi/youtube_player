var position = '0';


function play(){
    var input_youtube = document.getElementById("youtube_adress").value;
    console.log(input_youtube);
    if (!empty(input_youtube)){
        //Traitement de L'id de la video
        position = input_youtube.search(/youtu.be/);

        if (position != -1){
            var id_youtube = input_youtube.replace("https://youtu.be/", "");
        }else{
            position = 0;
            position = input_youtube.search(/watch\?v=/);
            if (position != -1){
                var id_youtube = input_youtube.replace("https://www.youtube.com/watch?v=", "")
            }else{
                // Le format n'est pas comptatible avec le site
                stop();
            }
        }
        // Quand le traitement de l'url est terminé, on lance la video
        var player;
        function onYouTubeIframeAPIReady() {
            player = new YT.Player('player', {
                height: '360',
                width: '640',
                videoId: id_youtube,
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
        }
    }else{
        // Le programe ne détecte pas d'url
        stop();
    }
    
}
// let a = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
// console.log(a.replace("https://www.youtube.com/watch?v=", ""))
// let b ='https://youtu.be/QN0u0q6d4HA'
// console.log(b.replace("https://youtu.be/", ""))
// let position = a.search(/youtu.be/);
// console.log(position);
// document.getElementById('affichagesl');
// affichageaddition.innerHTML = "Additions";
// document.getElementById('four').disabled = false;





function test(){
    console.log("test");
}

