class VpaidAd {
    constructor() {
        this.slot = null;
        this.videoPlayer = null;
    }

    initAd(width, height, viewMode, desiredBitrate, creativeData) {
        this.slot = document.getElementById("ad-container") || document.body;
        this.videoPlayer = document.createElement("video");
        this.videoPlayer.width = width;
        this.videoPlayer.height = height;
        this.slot.appendChild(this.videoPlayer);

        const adParams = JSON.parse(creativeData.AdParameters);
        this.createButtons(adParams.video1, adParams.video2);
    }

    createButtons(video1, video2) {
        const button1 = document.createElement("button");
        button1.innerText = video1.title;
        button1.onclick = () => this.playVideo(video1.url, video1.title);
        
        const button2 = document.createElement("button");
        button2.innerText = video2.title;
        button2.onclick = () => this.playVideo(video2.url, video2.title);
        
        this.slot.appendChild(button1);
        this.slot.appendChild(button2);
    }

    playVideo(videoUrl, videoTitle) {
        console.log("Вы выбрали:", videoTitle);
        alert("Вы выбрали: " + videoTitle);
        this.videoPlayer.src = videoUrl;
        this.videoPlayer.play();
    }
}

// Экспорт класса для VPAID
window.getVPAIDAd = function() {
    return new VpaidAd();
};
