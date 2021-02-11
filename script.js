const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject =  mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.onplay();
        }
    } catch (error) {
        // catch Error Here
        console.log('woops, error here:', error);
    }
}

button.addEventListener('click', async () => {
    //  Disable button
    button.disabled = true;
    // start picture in picture
    await videoElement.requestPictureInPicture();
    // reset Button
    button.disable = false;
});

// on Load
selectMediaStream();