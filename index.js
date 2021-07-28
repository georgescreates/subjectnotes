//Calling elements on the DOM
var subjectInputs = document.getElementsByClassName('subject-input');
var averagesParag = document.getElementsByClassName('averages-p');

var averagesFields = document.getElementsByClassName('average-field');
var globalAverageFields = document.getElementsByClassName("average-glob-field");

var subjectItems = document.getElementsByClassName('subject-item');

//About subjects
//Economie Intra 1
if(subj1IntraS1Vals == null){
    subjectInputs[0].value = "00";
}else{
    subjectInputs[0].value = subj1IntraS1Vals.subj1IntraS1Result;
}

//Economie Final 1
if(subj1FinalS1Vals == null){
    subjectInputs[7].value = "00";
}else{
    subjectInputs[7].value = subj1FinalS1Vals.subj1FinalS1Result;
}

//Economie Semester 1
if(subj1S1Note == null){
    averagesFields[0].innerHTML = "00";
}else{
    averagesFields[0].innerHTML = subj1S1Note;
}

//Economie Intra 2
if(subj1IntraS2Vals == null){
    subjectInputs[21].value = "00";
}else{
    subjectInputs[21].value = subj1IntraS2Vals.subj1IntraS2Result;
}

//Economie Final 2
if(subj1FinalS2Vals == null){
    subjectInputs[28].value = "00";
}else{
    subjectInputs[28].value = subj1FinalS2Vals.subj1FinalS2Result;
}

//Economie Semester 2
if(subj1S2Note == null){
    averagesFields[8].innerHTML = "00";
}else{
    averagesFields[8].innerHTML = subj1S2Note;
}

//Economie Year Average
if(subj1GenNote == null){
    averagesFields[16].innerHTML = '00';
}else{
    averagesFields[16].innerHTML = subj1GenNote;
}








//Algebre Intra 1
if(subj2IntraS1Vals == null){
    subjectInputs[1].value = "00";
}else{
    subjectInputs[1].value = subj2IntraS1Vals.subj2IntraS1Result;
}

//Algebre Final 1
if(subj2FinalS1Vals == null){
    subjectInputs[8].value = "00";
}else{
    subjectInputs[8].value = subj2FinalS1Vals.subj2FinalS1Result;
}

//Algebre Work 1
if(subj2WorkS1Vals == null){
    subjectInputs[15].value = "00";
}else{
    subjectInputs[15].value = subj2WorkS1Vals.subj2WorkS1Result;
}

//Algebre Semestre 1
if(subj2S1Note == null){
    averagesFields[1].innerHTML = '00';
}else{
    averagesFields[1].innerHTML = subj2S1Note;
}

//Algebre Intra 2
if(subj2IntraS2Vals == null){
    subjectInputs[22].value = "00";
}else{
    subjectInputs[22].value = subj2IntraS2Vals.subj2IntraS2Result;
}

//Algebre Final 2
if(subj2FinalS2Vals == null){
    subjectInputs[29].value = "00";
}else{
    subjectInputs[29].value = subj2FinalS2Vals.subj2FinalS2Result;
}

//Algebre Work 2
if(subj2WorkS2Vals == null){
    subjectInputs[36].value = "00";
}else{
    subjectInputs[36].value = subj2WorkS2Vals.subj2WorkS2Result;
}

//Algebre Semestre 2
if(subj2S2Note == null){
    averagesFields[9].innerHTML = '00';
}else{
    averagesFields[9].innerHTML = subj2S2Note;
}

//Algebre Year Average
if(subj2GenNote == null){
    averagesFields[17].innerHTML = '00';
}else{
    averagesFields[17].innerHTML = subj2GenNote;
}




//Statistique Descriptive Intra 1
if(subj3IntraS1Vals == null){
    subjectInputs[2].value = "00";
}else{
    subjectInputs[2].value = subj3IntraS1Vals.subj3IntraS1Result;
}

//Statistique Descriptive Final 1
if(subj3FinalS1Vals == null){
    subjectInputs[9].value = "00";
}else{
    subjectInputs[9].value = subj3FinalS1Vals.subj3FinalS1Result;
}

//Statistique Descriptive Work 1
if(subj3WorkS1Vals == null){
    subjectInputs[16].value = "00";
}else{
    subjectInputs[16].value = subj3WorkS1Vals.subj3WorkS1Result;
}

//Statistique Descriptive Semester 1
if(subj3S1Note == null){
    averagesFields[2].innerHTML = "00";
}else{
    averagesFields[2].innerHTML = subj3S1Note;
}

//Statistique Descriptive Year Average
if(subj3GenNote == null){
    averagesFields[18].innerHTML = '00';
}else{
    averagesFields[18].innerHTML = subj3GenNote;
}




//Comptabilité Intra 1
if(subj4IntraS1Vals == null){
    subjectInputs[3].value = "00";
}else{
    subjectInputs[3].value = subj4IntraS1Vals.subj4IntraS1Result;
}

//Comptabilité Final 1
if(subj4FinalS1Vals == null){
    subjectInputs[10].value = "00";
}else{
    subjectInputs[10].value = subj4FinalS1Vals.subj4FinalS1Result;
}

//Comptabilité Work 1
if(subj4WorkS1Vals == null){
    subjectInputs[17].value = "00";
}else{
    subjectInputs[17].value = subj4WorkS1Vals.subj4WorkS1Result;
}

//Comptabilité Semestre 1
if(subj4S1Note == null){
    averagesFields[3].innerHTML = '00';
}else{
    averagesFields[3].innerHTML = subj4S1Note;
}

//Comptabilité Intra 2
if(subj4IntraS2Vals == null){
    subjectInputs[24].value = "00";
}else{
    subjectInputs[24].value = subj4IntraS2Vals.subj4IntraS2Result;
}

//Comptabilité Final 1
if(subj4FinalS2Vals == null){
    subjectInputs[31].value = "00";
}else{
    subjectInputs[31].value = subj4FinalS2Vals.subj4FinalS2Result;
}

//Comptabilité Work 1
if(subj4WorkS2Vals == null){
    subjectInputs[38].value = "00";
}else{
    subjectInputs[38].value = subj4WorkS2Vals.subj4WorkS2Result;
}

//Comptabilité Semestre 1
if(subj4S2Note == null){
    averagesFields[11].innerHTML = '00';
}else{
    averagesFields[11].innerHTML = subj4S2Note;
}

//Comptabilité Year Average
if(subj4GenNote == null){
    averagesFields[20].innerHTML = '00';
}else{
    averagesFields[20].innerHTML = subj4GenNote;
}




//Espagnol Intra 1
if(subj5IntraS1Vals == null){
    subjectInputs[4].value = "00";
}else{
    subjectInputs[4].value = subj5IntraS1Vals.subj5IntraS1Result;
}

//Espagnol Final 1
if(subj5FinalS1Vals == null){
    subjectInputs[11].value = "00";
}else{
    subjectInputs[11].value = subj5FinalS1Vals.subj5FinalS1Result;
}

//Espagnol Work 1
if(subj5WorkS1Vals == null){
    subjectInputs[18].value = "00";
}else{
    subjectInputs[18].value = subj5WorkS1Vals.subj5WorkS1Result;
}

//Espagnol Semestre 1
if(subj5S1Note == null){
    averagesFields[4].innerHTML = '00';
}else{
    averagesFields[4].innerHTML = subj5S1Note;
}

//Espagnol Intra 2
if(subj5IntraS2Vals == null){
    subjectInputs[25].value = "00";
}else{
    subjectInputs[25].value = subj5IntraS2Vals.subj5IntraS2Result;
}

//Espagnol Final 2
if(subj5FinalS2Vals == null){
    subjectInputs[32].value = "00";
}else{
    subjectInputs[32].value = subj5FinalS2Vals.subj5FinalS2Result;
}

//Espagnol Work 2
if(subj5WorkS2Vals == null){
    subjectInputs[39].value = "00";
}else{
    subjectInputs[39].value = subj5WorkS2Vals.subj5WorkS2Result;
}

//Espagnol Semestre 2
if(subj5S2Note == null){
    averagesFields[12].innerHTML = '00';
}else{
    averagesFields[12].innerHTML = subj5S2Note;
}

//Espagnol Year Average
if(subj5GenNote == null){
    averagesFields[21].innerHTML = '00';
}else{
    averagesFields[21].innerHTML = subj5GenNote;
}






//Anglais Intra 1
if(subj6IntraS1Vals == null){
    subjectInputs[5].value = "00";
}else{
    subjectInputs[5].value = subj6IntraS1Vals.subj6IntraS1Result;
}

//Anglais Final 1
if(subj6FinalS1Vals == null){
    subjectInputs[12].value = "00";
}else{
    subjectInputs[12].value = subj6FinalS1Vals.subj6FinalS1Result;
}

//Anglais Work 1
if(subj6WorkS1Vals == null){
    subjectInputs[19].value = "00";
}else{
    subjectInputs[19].value = subj6WorkS1Vals.subj6WorkS1Result;
}

//Anglais Semester 1
if(subj6S1Note == null){
    averagesFields[5].innerHTML = '00';
}else{
    averagesFields[5].innerHTML = subj6S1Note;
}

//Anglais Intra 2
if(subj6IntraS2Vals == null){
    subjectInputs[26].value = "00";
}else{
    subjectInputs[26].value = subj6IntraS2Vals.subj6IntraS2Result;
}

//Anglais Final 2
if(subj6FinalS2Vals == null){
    subjectInputs[33].value = "00";
}else{
    subjectInputs[33].value = subj6FinalS2Vals.subj6FinalS2Result;
}

//Anglais Work 2
if(subj6WorkS2Vals == null){
    subjectInputs[40].value = "00";
}else{
    subjectInputs[40].value = subj6WorkS2Vals.subj6WorkS2Result;
}

//Anglais Semester 2
if(subj6S2Note == null){
    averagesFields[13].innerHTML = '00';
}else{
    averagesFields[13].innerHTML = subj6S2Note;
}

//Anglais Year Average
if(subj6GenNote == null){
    averagesFields[22].innerHTML = '00';
}else{
    averagesFields[22].innerHTML = subj6GenNote;
}





//Analyse Intra 1
if(subj7IntraS1Vals == null){
    subjectInputs[6].value = "00";
}else{
    subjectInputs[6].value = subj7IntraS1Vals.subj7IntraS1Result;
}

//Analyse Final 1
if(subj7FinalS1Vals == null){
    subjectInputs[13].value = "00";
}else{
    subjectInputs[13].value = subj7FinalS1Vals.subj7FinalS1Result;
}

//Analyse Work 1
if(subj7WorkS1Vals == null){
    subjectInputs[20].value = "00";
}else{
    subjectInputs[20].value = subj7WorkS1Vals.subj7WorkS1Result;
}

//Analyse Semester 1
if(subj7S1Note == null){
    averagesFields[6].innerHTML = '00';
}else{
    averagesFields[6].innerHTML = subj7S1Note;
}

//Analyse Intra 2
if(subj7IntraS2Vals == null){
    subjectInputs[27].value = "00";
}else{
    subjectInputs[27].value = subj7IntraS2Vals.subj7IntraS2Result;
}

//Analyse Final 2
if(subj7FinalS2Vals == null){
    subjectInputs[34].value = "00";
}else{
    subjectInputs[34].value = subj7FinalS2Vals.subj7FinalS2Result;
}

//Analyse Work 2
if(subj7WorkS2Vals == null){
    subjectInputs[41].value = "00";
}else{
    subjectInputs[41].value = subj7WorkS2Vals.subj7WorkS2Result;
}

//Analyse Semester 2
if(subj7S2Note == null){
    averagesFields[14].innerHTML = '00';
}else{
    averagesFields[14].innerHTML = subj7S2Note;
}

//Analyse Year Average
if(subj7GenNote == null){
    averagesFields[23].innerHTML = '00';
}else{
    averagesFields[23].innerHTML = subj7GenNote;
}









//Francais Final 1
if(subj8FinalS1Vals == null){
    subjectInputs[14].value = "00";
}else{
    subjectInputs[14].value = subj8FinalS1Vals.subj8FinalS1Result;
}

//Semester 1
if(subj8S1Note == null){
    averagesFields[7].innerHTML = '00';
}else{
    averagesFields[7].innerHTML = subj8S1Note;
}

//Francais Final 2
if(subj8FinalS2Vals == null){
    subjectInputs[35].value = "00";
}else{
    subjectInputs[35].value = subj8FinalS2Vals.subj8FinalS2Result;
}

//Semester 2
if(subj8S2Note == null){
    averagesFields[15].innerHTML = '00';
}else{
    averagesFields[15].innerHTML = subj8S2Note;
}

//Francais Year Average
if(subj8GenNote == null){
    averagesFields[24].innerHTML = '00';
}else{
    averagesFields[24].innerHTML = subj8GenNote;
}






//Probabilite Intra 2
if(subj9IntraS2Vals == null){
    subjectInputs[23].value = "00";
}else{
    subjectInputs[23].value = subj9IntraS2Vals.subj9IntraS2Result;
}

//Probabilite Final 2
if(subj9FinalS2Vals == null){
    subjectInputs[30].value = "00";
}else{
    subjectInputs[30].value = subj9FinalS2Vals.subj9FinalS2Result;
}

//Probabilite Work 2
if(subj9WorkS2Vals == null){
    subjectInputs[37].value = "00";
}else{
    subjectInputs[37].value = subj9WorkS2Vals.subj9WorkS2Result;
}

//Semester 2
if(subj9S2Note == null){
    averagesFields[10].innerHTML = '00';
}else{
    averagesFields[10].innerHTML = subj9S2Note;
}

//Probabilité Year Average
if(subj9GenNote == null){
    averagesFields[19].innerHTML = '00';
}else{
    averagesFields[19].innerHTML = subj9GenNote;
}









//About averages
if(intraS1Average == null){
    averagesParag[0].innerHTML = "00.00";
}else{
    averagesParag[0].innerHTML = intraS1Average;
}

if(finalS1Average == null){
    averagesParag[1].innerHTML = "00.00";
}else{
    averagesParag[1].innerHTML = finalS1Average;
}

if(intraS2Average == null){
    averagesParag[2].innerHTML = "00.00";
}else{
    averagesParag[2].innerHTML = intraS2Average;
}

if(finalS2Average == null){
    averagesParag[3].innerHTML = "00.00";
}else{
    averagesParag[3].innerHTML = finalS2Average;
}

//About global averages
if(subjS1NoteAverage == null){
    globalAverageFields[0].innerHTML = '00.00';
}else{
    globalAverageFields[0].innerHTML = subjS1NoteAverage;
}

if(subjS2NoteAverage == null){
    globalAverageFields[1].innerHTML = '00.00';
}else{
    globalAverageFields[1].innerHTML = subjS2NoteAverage;
}

//About year general average
if(subjNoteAverage == null){
    globalAverageFields[2].innerHTML = '00.00';
}else{
    globalAverageFields[2].innerHTML = subjNoteAverage;
}
