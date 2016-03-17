/**
 Fullscreen Class
 */

class Fullscreen {

    constructor() {

        document.cancelFullScreen = document.webkitCancelFullScreen || document.mozCancelFullScreen || document.cancelFullScreen;

        document.body.requestFullScreen = document.body.webkitRequestFullScreen || document.body.mozRequestFullScreen || document.body.requestFullScreen;

        document.addEventListener("fullscreenchange", () => {
            document.onfullscreenchange.call(this);
        }, false);

        document.addEventListener("mozfullscreenchange", () => {
            document.onfullscreenchange.call(this);
        }, false);

        document.addEventListener("webkitfullscreenchange", () => {
            document.onfullscreenchange.call(this);
        }, false);

        document.addEventListener("msfullscreenchange", ()=> {
            document.onfullscreenchange.call(this);
        }, false);
    }

    isFullScreen() {
        return !!(document.webkitIsFullScreen || document.mozFullScreen || document.isFullScreen); // if any defined and true
    }

    fullScreenElement() {
        return document.webkitFullScreenElement ||
            document.webkitCurrentFullScreenElement ||
            document.mozFullScreenElement ||
            document.fullScreenElement;
    }
    
}

export default Fullscreen;

