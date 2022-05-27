https://teachablemachine.withgoogle.com/models/LVm-7XKJp/
function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/AWWn8Fr7k/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    console.log("gotResults")
}