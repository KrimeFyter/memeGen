1
let topTextInput, bottomTextInput, topTextSizeInput, bottomTextSizeInput, imageInput, generateBtn, canvas, context;

function genrateMeme (img, topText, bottomText) {
    img.onload = function() {
        genrateMeme(img,topText, bottomText, topTextSize, bottomTextSize);
    }
    canvas.width = img.width;
    canvas.height = img.height;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, 0, 0);

    let fontSize = canvas.width / 9;
    context.textAlign = 'center';
    context.font = fontSize + 'px Arial';
    context.fillStyle = 'white'
    context.lineWidth = fontSize / 22;
  

    
    context.fillText(topText, canvas.width / 2, fontSize, canvas.width);
    context.strokeText(topText, canvas.width / 2, fontSize, canvas.width);

    context.fillText(bottomText, canvas.width / 2, canvas.height, canvas.width);
    context.strokeText(bottomText, canvas.width / 2, canvas.height, canvas.width);
}

function init () {
    topTextInput = document.querySelector("#topText");
    bottomTextInput = document.querySelector("#bottomText");
    imageInput = document.querySelector("#imgInput");
    generateBtn = document.querySelector("#generateBtn");
    canvas = document.querySelector("#memeCanvas");
   

    context = canvas.getContext('2d');

    canvas.width = 0 ; 
    canvas.height = 0;

    generateBtn.addEventListener('click', function() {
        let reader = new FileReader();
        reader.onload = function () {
            let img = new Image;
            img.src = reader.result;
            genrateMeme(img, topText.value, bottomText.value);
        }
        reader.readAsDataURL(imageInput.files[0]);
    });
}

init();