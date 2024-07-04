const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');
const toggleVideoButton = document.getElementById('toggleVideo');
const toggleAudioButton = document.getElementById('toggleAudio');
const localFullscreenButton = document.getElementById('localFullscreen');
const remoteFullscreenButton = document.getElementById('remoteFullscreen');

let localStream;
let peerConnection;
let isVideoEnabled = true;
let isAudioEnabled = true;

// Set up media constraints
const mediaConstraints = {
    video: true,
    audio: true,
};

// Initialize WebRTC connection
async function init() {
    try {
        localStream = await navigator.mediaDevices.getUserMedia(mediaConstraints);
        localVideo.srcObject = localStream;

        // Simulate a peer connection for demonstration purposes
        peerConnection = new RTCPeerConnection();
        localStream.getTracks().forEach(track => peerConnection.addTrack(track, localStream));

        peerConnection.ontrack = event => {
            if (event.streams && event.streams[0]) {
                remoteVideo.srcObject = event.streams[0];
            }
        };

        // Simulate offer/answer exchange
        const offer = await peerConnection.createOffer();
        await peerConnection.setLocalDescription(offer);

        const answer = await peerConnection.createAnswer();
        await peerConnection.setRemoteDescription(offer);
        await peerConnection.setLocalDescription(answer);
    } catch (error) {
        console.error('Error accessing media devices.', error);
    }
}

toggleVideoButton.addEventListener('click', () => {
    isVideoEnabled = !isVideoEnabled;
    localStream.getVideoTracks()[0].enabled = isVideoEnabled;
    toggleVideoButton.textContent = isVideoEnabled ? 'Turn Video Off' : 'Turn Video On';
});

toggleAudioButton.addEventListener('click', () => {
    isAudioEnabled = !isAudioEnabled;
    localStream.getAudioTracks()[0].enabled = isAudioEnabled;
    toggleAudioButton.textContent = isAudioEnabled ? 'Turn Audio Off' : 'Turn Audio On';
});

localFullscreenButton.addEventListener('click', () => {
    if (localVideo.requestFullscreen) {
        localVideo.requestFullscreen();
    } else if (localVideo.mozRequestFullScreen) { // Firefox
        localVideo.mozRequestFullScreen();
    } else if (localVideo.webkitRequestFullscreen) { // Chrome, Safari and Opera
        localVideo.webkitRequestFullscreen();
    } else if (localVideo.msRequestFullscreen) { // IE/Edge
        localVideo.msRequestFullscreen();
    }
});

remoteFullscreenButton.addEventListener('click', () => {
    if (remoteVideo.requestFullscreen) {
        remoteVideo.requestFullscreen();
    } else if (remoteVideo.mozRequestFullScreen) { // Firefox
        remoteVideo.mozRequestFullScreen();
    } else if (remoteVideo.webkitRequestFullscreen) { // Chrome, Safari and Opera
        remoteVideo.webkitRequestFullscreen();
    } else if (remoteVideo.msRequestFullscreen) { // IE/Edge
        remoteVideo.msRequestFullscreen();
    }
});

// Initialize on page load
init();
