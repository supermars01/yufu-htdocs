const NUMBER_OF_WHEELS = 16;

function init() {
    var container = document.getElementById('wheelsContainer');
    for (var i = 0; i < NUMBER_OF_WHEELS; i++) {
        container.appendChild(createAWheel());
    }
}

function randomInteger(low, high) {
    return low + Math.floor(Math.random() * (high - low));
}

function randomFloat(low, high) {
    return low + Math.random() * (high - low);
}

function pixelValue(value) {
    return value + 'px';
}

function durationValue(value) {
    return value + 's';
}

function createAWheel() {
    var wheelDiv = document.createElement('div');
    var image = document.createElement('img');
    image.src = './img/setting' + randomInteger(1, 6) + '.png';
    wheelDiv.style.top = "200px";
    wheelDiv.style.left = "48%";
    var spinAnimationName = (Math.random() < 0.5) ? 'clockwiseSpin' : 'counterclockwiseSpinAndFlip';
    wheelDiv.style.webkitAnimationName = 'fade, drop' + randomInteger(1, 5);
    image.style.webkitAnimationName = spinAnimationName;
    var fadeAndDropDuration = durationValue(randomFloat(5, 11));
    var spinDuration = durationValue(randomFloat(4, 2));
    wheelDiv.style.webkitAnimationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration;
    var wheelDelay = durationValue(randomFloat(0, 1));
    wheelDiv.style.webkitAnimationDelay = wheelDelay + ', ' + wheelDelay;
    image.style.webkitAnimationDuration = spinDuration;
    wheelDiv.appendChild(image);
    return wheelDiv;
}
window.addEventListener('load', init, false);