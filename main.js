function start(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/5fRag6KTX/model.json',modelready);
}

function modelready(){
    classifier.classify(gotresults);
}