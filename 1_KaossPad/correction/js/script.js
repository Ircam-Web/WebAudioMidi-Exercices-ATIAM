// declare frequency max
let freqMax = 20000

// use microphone as audio input
let voice = new Pizzicato.Sound({ source: 'input' })

// declare ping pong delay
let pingPongDelay = new Pizzicato.Effects.PingPongDelay({
    feedback: 0.6,
    time: 0.4,
    mix: 0.5
})

// declare low pass filter
let lowPassFilter = new Pizzicato.Effects.LowPassFilter({
    frequency: 200,
    peak: 10
})

// declare high pass filter
let highPassFilter = new Pizzicato.Effects.HighPassFilter({
    frequency: 10,
    peak: 10
});

// add effect to microphone source
voice.addEffect(pingPongDelay);
voice.addEffect(lowPassFilter);
voice.addEffect(highPassFilter);


// play event listener
document.getElementById('play-button').addEventListener('click', function (event) {
    voice.play();
}, false);
// stop event listener
document.getElementById('stop-button').addEventListener('click', function (event) {
    voice.stop();
}, false);
// on mouse move, vary effects parameters functions of X / Y mouse position
document.body.addEventListener('mousemove', function (event) {
    // vary ping pong delay
    pingPongDelay.feedback = event.pageX / document.body.clientWidth;
    // vary low pass filter 
    lowPassFilter.frequency = event.pageY / document.body.clientHeight * freqMax;
    // vary high pass filter    
    highPassFilter.frequency = event.pageY / document.body.clientHeight * freqMax;
}, false);
