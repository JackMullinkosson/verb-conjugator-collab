var desireVerb = ['Quero', 'Desejo', 'Espero', 'Duvido', 'Rezo', 'Pode ser', 'É possível', 'É preciso', 'É necessário', 'É provável', 'Oxala', 'Tomara', 'Prefiro', 'Para', 'A menos', 'Desde', 'É sufficiente','Receio'];
var pronoun = ['eu', 'você', 'ela', 'ele', 'a gente', 'vocês', 'eles', 'elas','nós']
var randomDesire=Math.floor(Math.random()*desireVerb.length);
var randomPronoun=Math.floor(Math.random()*pronoun.length);
var infinitiveText = document.getElementById('infinitive');
var input=document.getElementById('response');
var msg=document.getElementById('msg');
var submitButton=document.getElementById('submitButton');
var sentOne = document.getElementById('sent-one');
var msgHidden = true;
var preferencesButton = document.getElementById('sidebar-button-left');
var sidebarLeft = document.getElementById('sidebar-left');
var playAgain = document.getElementById('playAgain');
var cheatSheetButton = document.getElementById('cheat-sheet-button');
var sidebarRight = document.getElementById('sidebar-right');
var futSentStarts =['Se ', 'Quando ']
var preferencesResults=[];
var verbSelected = document.getElementById('verbSelected');
var preferencesSubmitButton = document.getElementById('preferencesSubmitButton');

//OBJECTS
var verbs = {
firstIrregImp: {
  pronoun: 'firstPerson',
  regularity: 'irregular',
  tense: 'imperfect',
  conjugated: ['fosse', 'estivesse', 'fosse', 'desse', 'dissesse', 'fizesse', 'trouxesse', 'pudesse', 'tivesse', 'viesse', 'pusesse', 'visse', 'soubesse', 'quisesse', 'coubesse', 'houvesse'],
  infinitive: ['(ser)', '(estar)', '(ir)', '(dar)', '(dizer)', '(fazer)', '(trazer)', '(poder)', '(ter)', '(vir)', '(pôr)', '(ver)', '(saber)', '(querer)', '(caber)', '(haver)'], 
},
secondIrregImp: {
  pronoun: 'secondPerson',
  regularity: 'irregular',
  tense: 'imperfect',
  conjugated: [],
  infinitive: [],
},
thirdIrregImp: {
  pronoun: 'thirdPerson',
  regularity: 'irregular',
  tense: 'imperfect',
  conjugated: [],
  infinitive: [],
},
firstRegImp: {
  pronoun: 'firstPerson',
  regularity: 'regular',
  tense: 'imperfect',
  conjugated: [],
  infinitive: ['(comer)', '(matar)', '(iludir)', '(falar)', '(amar)', '(beber)', '(cantar)', '(comprar)', '(estudar)', '(vender)', '(viver)', '(achar)', '(acabar)', '(andar)', '(chamar)', '(encontrar)', '(morar)', '(morrer)', '(pensar)', '(olhar)', '(tomar)', '(voltar)', '(deixar)', '(levar)', '(dever)', '(existir)', '(receber)', '(trabalhar)', '(decidir)', '(fechar)', '(mandar)', '(perceber)', '(gostar)', '(usar)', '(esperar)', '(correr)', '(mostrar)', '(escrever)', '(abrir)', '(precisar)'],
},
secondRegImp: {
  pronoun: 'secondPerson',
  regularity: 'regular',
  tense: 'imperfect',
  conjugated: [],
  infinitive: [],
},
thirdRegImp: {
  pronoun: 'thirdPerson',
  regularity: 'regular',
  tense: 'imperfect',
  conjugated: [],
  infinitive: [],
},
firstBothImp: {
  pronoun: 'firstPerson',
  regularity: 'both',
  tense: 'imperfect',
  conjugated: [],
  infinitive: [],
},
secondBothImp: {
  pronoun: 'secondPerson',
  regularity: 'both',
  tense: 'imperfect',
  conjugated: [],
  infinitive: [],
},
thirdBothImp: {
  pronoun: 'thirdPerson',
  regularity: 'both',
  tense: 'imperfect',
  conjugated: [],
  infinitive: [],
},
firstIrregPres: {
  pronoun: 'firstPerson',
  regularity: 'irregular',
  tense: 'present',
  conjugated: ['seja', 'fique', 'esteja', 'vá', 'dê', 'diga', 'faça', 'traga', 'possa', 'tenha', 'venha', 'ponha', 'leia', 'veja', 'saiba', 'queira', 'caiba', 'durma', 'fuja', 'ouça', 'peça', 'meça', 'perca', 'siga', 'sirva', 'sinta', 'haja', 'caia', 'saia', 'ria', 'valha', 'requeira', 'creia'],
  infinitive: ['(ser)', '(ficar)', '(estar)', '(ir)', '(dar)', '(dizer)', '(fazer)', '(trazer)', '(poder)', '(ter)', '(vir)', '(pôr)', '(ler)', '(ver)', '(saber)', '(querer)', '(caber)', '(dormir)', '(fugir)', '(ouvir)', '(pedir)', '(medir)', '(perder)', '(seguir)', '(servir)', '(sentir)', '(haver)', '(cair)', '(sair)', '(rir)', '(valer)', '(requerer)', '(crer)'],
},
secondIrregPres: {
  pronoun: 'secondPerson',
  regularity: 'irregular',
  tense: 'present',
  conjugated: [],
  infinitive: [],
},
thirdIrregPres: {
  pronoun: 'thirdPerson',
  regularity: 'irregular',
  tense: 'present',
  conjugated: [],
  infinitive: [],
},
firstRegPres: {
  pronoun: 'firstPerson',
  regularity: 'regular',
  tense: 'present',
  conjugated: [],
  infinitive: [],
},
secondRegPres: {
  pronoun: 'secondPerson',
  regularity: 'regular',
  tense: 'present',
  conjugated: [],
  infinitive: [],
},
thirdRegPres: {
  pronoun: 'thirdPerson',
  regularity: 'regular',
  tense: 'present',
  conjugated: [],
  infinitive: [],
},
firstBothPres: {
  pronoun: 'firstPerson',
  regularity: 'both',
  tense: 'present',
  conjugated: [],
  infinitive: [],
},
secondBothPres: {
  pronoun: 'secondPerson',
  regularity: 'both',
  tense: 'present',
  conjugated: [],
  infinitive: [],
},
thirdBothPres: {
  pronoun: 'thirdPerson',
  regularity: 'both',
  tense: 'present',
  conjugated: [],
  infinitive: [],
},
firstIrregFut: {
  pronoun: 'firstPerson',
  regularity: 'irregular',
  tense: 'future',
  conjugated: ['for', 'estiver', 'for', 'der', 'disser', 'fizer', 'trouxer', 'puder', 'tiver', 'vier', 'puser', 'vir', 'souber', 'quiser', 'couber', 'houver'],
  infinitive: [],
},
secondIrregFut: {
  pronoun: 'secondPerson',
  regularity: 'irregular',
  tense: 'future',
  conjugated: [],
  infinitive: [],
},
thirdIrregFut: {
  pronoun: 'thirdPerson',
  regularity: 'irregular',
  tense: 'future',
  conjugated: [],
  infinitive: [],
},
firstRegFut: {
  pronoun: 'firstPerson',
  regularity: 'regular',
  tense: 'future',
  conjugated: [],
  infinitive: [],
},
secondRegFut: {
  pronoun: 'secondPerson',
  regularity: 'regular',
  tense: 'future',
  conjugated: [],
  infinitive: [],
},
thirdRegFut: {
  pronoun: 'thirdPerson',
  regularity: 'regular',
  tense: 'future',
  conjugated: [],
  infinitive: [],
},
firstBothFut: {
  pronoun: 'firstPerson',
  regularity: 'both',
  tense: 'future',
  conjugated: [],
  infinitive: [],
},
secondBothFut: {
  pronoun: 'secondPerson',
  regularity: 'both',
  tense: 'future',
  conjugated: [],
  infinitive: [],
},
thirdBothFut: {
  pronoun: 'thirdPerson',
  regularity: 'both',
  tense: 'future',
  conjugated: [],
  infinitive: [],
},
};

//populate empty keys
verbs.secondIrregImp.infinitive = verbs.firstIrregImp.infinitive
verbs.thirdIrregImp.infinitive = verbs.firstIrregImp.infinitive
verbs.secondIrregImp.conjugated = verbs.firstIrregImp.conjugated.map((word) => 
  word += 'm'
);
verbs.thirdIrregImp.conjugated = verbs.secondIrregImp.conjugated.map((word) => 
  word += 'os',
);
for (key in verbs.thirdIrregImp.conjugated){
  verbs.thirdIrregImp.conjugated[key]=verbs.thirdIrregImp.conjugated[key].replace(/issemos/g,'íssemos')
  verbs.thirdIrregImp.conjugated[key]=verbs.thirdIrregImp.conjugated[key].replace(/assemos/g,'ássemos')
  verbs.thirdIrregImp.conjugated[key]=verbs.thirdIrregImp.conjugated[key].replace(/essemos/g,'éssemos')
  verbs.thirdIrregImp.conjugated[key]=verbs.thirdIrregImp.conjugated[key].replace(/fossemos/g,'fôssemos')
};
verbs.secondIrregImp.conjugated = verbs.firstIrregImp.conjugated.map((word) => 
  word += 'm'
);
verbs.firstRegImp.conjugated = verbs.firstRegImp.infinitive.map((word) =>{
  word = word.slice(1,word.length-2)
  return (word+='sse')
});
verbs.secondRegImp.infinitive = verbs.firstRegImp.infinitive
verbs.thirdRegImp.infinitive = verbs.firstRegImp.infinitive
verbs.secondRegImp.conjugated = verbs.firstRegImp.conjugated.map((word) => 
  word += 'm'
);
verbs.thirdRegImp.conjugated = verbs.secondRegImp.conjugated.map((word) => 
  word += 'os'
);
for (key in verbs.thirdRegImp.conjugated){
  verbs.thirdRegImp.conjugated[key]=verbs.thirdRegImp.conjugated[key].replace(/issemos/g,'íssemos')
  verbs.thirdRegImp.conjugated[key]=verbs.thirdRegImp.conjugated[key].replace(/assemos/g,'ássemos')
  verbs.thirdRegImp.conjugated[key]=verbs.thirdRegImp.conjugated[key].replace(/essemos/g,'êssemos')
};

verbs.firstBothImp.infinitive = verbs.firstRegImp.infinitive.concat(verbs.firstIrregImp.infinitive);
verbs.secondBothImp.infinitive = verbs.firstBothImp.infinitive
verbs.thirdBothImp.infinitive = verbs.firstBothImp.infinitive
verbs.firstBothImp.conjugated = verbs.firstRegImp.conjugated.concat(verbs.firstIrregImp.conjugated);
verbs.secondBothImp.conjugated = verbs.secondRegImp.conjugated.concat(verbs.secondIrregImp.conjugated);
verbs.thirdBothImp.conjugated = verbs.thirdRegImp.conjugated.concat(verbs.thirdIrregImp.conjugated);


verbs.secondIrregPres.infinitive = verbs.firstIrregPres.infinitive
verbs.thirdIrregPres.infinitive = verbs.firstIrregPres.infinitive
verbs.secondIrregPres.conjugated = verbs.firstIrregPres.conjugated.map((word) => 
  word += 'm'
);
verbs.thirdIrregPres.conjugated = verbs.secondIrregPres.conjugated.map((word) => 
  word += 'os'
);
verbs.firstRegPres.infinitive = verbs.firstRegImp.infinitive
verbs.secondRegPres.infinitive = verbs.firstRegImp.infinitive
verbs.thirdRegPres.infinitive = verbs.firstRegImp.infinitive
verbs.firstRegPres.conjugated = verbs.firstRegPres.infinitive.map((word) =>{
  if (word[word.length-3]==='a'){
  word = word.slice(1,word.length-3)
  word+='e'
  }
  else if(word[word.length-3]==='e'||word[word.length-3]==='i'){
  word = word.slice(1,word.length-3)
  word+='a'
  }
  return word
});
verbs.secondRegPres.conjugated = verbs.firstRegPres.conjugated.map((word) => 
  word += 'm'
);
verbs.thirdRegPres.conjugated = verbs.secondRegPres.conjugated.map((word) => 
  word += 'os'
);

verbs.firstBothPres.infinitive = verbs.firstRegImp.infinitive.concat(verbs.firstIrregPres.infinitive);
verbs.secondBothPres.infinitive = verbs.firstBothPres.infinitive
verbs.thirdBothPres.infinitive = verbs.firstBothPres.infinitive
verbs.firstBothPres.conjugated = verbs.firstRegPres.conjugated.concat(verbs.firstIrregPres.conjugated);
verbs.secondBothPres.conjugated = verbs.secondRegPres.conjugated.concat(verbs.secondIrregPres.conjugated);
verbs.thirdBothPres.conjugated = verbs.thirdRegPres.conjugated.concat(verbs.thirdIrregPres.conjugated);

verbs.firstIrregFut.infinitive = verbs.firstIrregImp.infinitive
verbs.secondIrregFut.infinitive = verbs.firstIrregImp.infinitive
verbs.secondIrregFut.infinitive = verbs.firstIrregImp.infinitive
verbs.secondIrregFut.conjugated = verbs.firstIrregFut.conjugated.map((word) => 
word += 'em'
);
verbs.thirdIrregFut.conjugated = verbs.firstIrregFut.conjugated.map((word) => 
  word += 'mos'
);

verbs.firstRegFut.infinitive = verbs.firstRegImp.infinitive
verbs.secondRegFut.infinitive = verbs.firstRegImp.infinitive
verbs.secondRegFut.infinitive = verbs.firstRegImp.infinitive
verbs.firstRegFut.conjugated = verbs.firstRegFut.infinitive.map((word) => 
word.slice(1,word.length-1)
);
verbs.secondRegFut.conjugated = verbs.firstRegFut.conjugated.map((word) => 
word+='em'
);
verbs.thirdRegFut.conjugated = verbs.firstRegFut.conjugated.map((word) => 
word+='mos'
);

verbs.firstBothFut.infinitive = verbs.firstRegImp.infinitive.concat(verbs.firstIrregPres.infinitive);
verbs.secondBothFut.infinitive = verbs.firstBothFut.infinitive
verbs.thirdBothFut.infinitive = verbs.firstBothFut.infinitive
verbs.firstBothFut.conjugated = verbs.firstRegFut.conjugated.concat(verbs.firstIrregFut.conjugated);
verbs.secondBothFut.conjugated = verbs.secondRegFut.conjugated.concat(verbs.secondIrregFut.conjugated);
verbs.thirdBothFut.conjugated = verbs.thirdRegFut.conjugated.concat(verbs.thirdIrregFut.conjugated);



// get radio input
var verbAnswer = document.querySelectorAll('input[type="radio"');
function getVerbAnswer(){
  for (let i = 0; i < verbAnswer.length; i++) {
    if(verbAnswer[i].checked){
      preferencesResults.unshift(verbAnswer[i].value);
    };
    if(preferencesResults.length>3){
      preferencesResults.length = 3;
    }
  }
msgHidden = false;
reset();
openSidebarLeft();
}

preferencesSubmitButton.addEventListener('click', getVerbAnswer);

//check pref results 
preferencesSubmitButton.onclick = () => {
for (var key in verbs){
  if(containsAll(preferencesResults, [verbs[key].pronoun, verbs[key].regularity, verbs[key].tense])){
    console.log(verbs[key].conjugated[3])
  }
};
}
//can do something like if randomPronoun is 1-4, randomPronoun = 'first', and then add in there, if containsall(~~~) && randomPronoun = verbs[key].pronoun
//it worked
// var randomIrregVerb=Math.floor(Math.random()*verbs.firstIrregImp.infinitive.length);
// var randomRegVerb=Math.floor(Math.random()*verbs.firstRegImp.infinitive.length);
//First round
var randomBothPresVerb=Math.floor(Math.random()*verbs.firstBothPres.infinitive.length);
infinitiveText.textContent=verbs.firstBothPres.infinitive[randomBothPresVerb];
sentOne.textContent=`${desireVerb[randomDesire]} que ${pronoun[randomPronoun]}`;
if (randomPronoun>4 && randomPronoun<8){
var correctAnswer=verbs.secondBothPres.conjugated[randomBothPresVerb];
}
else if(randomPronoun>7){
  correctAnswer=verbs.thirdBothPres.conjugated[randomBothPresVerb];
}
else{
 correctAnswer=verbs.firstBothPres.conjugated[randomBothPresVerb];
}


//Check
function check(event){
  msgHidden = false;
  input.value = input.value.toLowerCase();
  if (input.value.length>0){
    msg.style.display = 'block';
    playAgain.style.display='block';
if (input.value===correctAnswer) {
  msg.textContent="That's right!";
}
  else{
    msg.textContent="Wrong. The correct conjugation is '" + correctAnswer + "'."
  }
}
}
submitButton.addEventListener('click',check);

document.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    check();
  }
});

//contains all function to check preferences results
function containsAll(arr, values) {
  return values.every(value => {
    return arr.includes(value);
  });
}

//Reset game
function reset(){
  if(msgHidden === true) {
    return;
}
if (preferencesResults[1]==='irregular'){
   randomVerb=Math.floor(Math.random()*infinitive.length);
  infinitiveText.textContent=infinitive[randomVerb];
}
else if(preferencesResults[1]==='regular'){
   randomRegVerb=Math.floor(Math.random()*regInfinitive.length);
  infinitiveText.textContent=regInfinitiveUnconjugated[randomRegVerb]; 
}
else if(preferencesResults[1]==='both'){
   momboRandomVerb=Math.floor(Math.random()*momboInfinitives.length);
  infinitiveText.textContent=momboInfinitives[momboRandomVerb];
}
else{
   momboRandomVerb=Math.floor(Math.random()*momboInfinitives.length);
  infinitiveText.textContent=momboInfinitives[momboRandomVerb];
};
if(preferencesResults[0]==='firstPerson'){
  randomPronoun=Math.floor(Math.random()*4);
}
else if(preferencesResults[0]==='secondPerson'){
  randomPronoun=Math.floor(Math.random()*(3)+5);
}
else if(preferencesResults[0]==='thirdPerson'){
  randomPronoun=8;
}
else{
  randomPronoun=Math.floor(Math.random()*8);
};
randomDesire=Math.floor(Math.random()*desireVerb.length);
if(preferencesResults[2]==='imperfect'){
  sentOne.textContent='Se ' + pronoun[randomPronoun];
  verbSelected.style.display = 'block';
  verbSelected.innerHTML = 'Verb tense: Subjunctive Imperfect'; 
}
else if(preferencesResults[2]==='present'){
  sentOne.textContent=`${desireVerb[randomDesire]} que ${pronoun[randomPronoun]}`;
  verbSelected.style.display = 'block';
  verbSelected.innerHTML = 'Verb tense: Subjunctive Present'; 
}
else if(preferencesResults[2]==='future'){
  sentOne.textContent=futSentStarts[Math.floor(Math.random()*2)] + pronoun[randomPronoun];
  verbSelected.style.display = 'block';
  verbSelected.innerHTML = 'Verb tense: Subjunctive Imperfect'; 
}
else {
  sentOne.textContent=`${desireVerb[randomDesire]} que ${pronoun[randomPronoun]}`;
};
if (containsAll(preferencesResults, ['firstPerson','irregular','imperfect'])){
  var randomImpIrreg=Math.floor(Math.random()*impIrregInf.length)
  correctAnswer=impSubj[randomImpIrreg];
  infinitiveText.textContent=impIrregInf[randomImpIrreg]
}
else if (containsAll(preferencesResults, ['firstPerson','irregular','present'])){
  correctAnswer=subj[randomVerb];
}
else if (containsAll(preferencesResults, ['firstPerson','irregular','future'])){
  var randomImpIrreg=Math.floor(Math.random()*impIrregInf.length)
  correctAnswer=futSubj[randomImpIrreg];
  infinitiveText.textContent=impIrregInf[randomImpIrreg]
}
else if (containsAll(preferencesResults, ['firstPerson','regular','imperfect'])){
  correctAnswer=regSubjImp[randomRegVerb];
}
else if (containsAll(preferencesResults, ['firstPerson','regular','present'])){
  correctAnswer=regSubj[randomRegVerb];
}
else if (containsAll(preferencesResults, ['firstPerson','regular','future'])){
  correctAnswer=regFutSubj[randomRegVerb];
}
else if (containsAll(preferencesResults,['firstPerson','both','imperfect'])){
  correctAnswer=momboImpSubj[momboRandomVerb];
}
else if (containsAll(preferencesResults, ['firstPerson','both','present'])){
  correctAnswer=momboSubj[momboRandomVerb];
}
else if (containsAll(preferencesResults, ['firstPerson','both','future'])){
  correctAnswer=momboFutSubj[momboRandomVerb];
}
else if (containsAll(preferencesResults, ['secondPerson','irregular','imperfect'])){
  var randomImpIrreg=Math.floor(Math.random()*impIrregInf.length)
  correctAnswer=impSubjTwo[randomImpIrreg];
  infinitiveText.textContent=impIrregInf[randomImpIrreg]
}
else if (containsAll(preferencesResults, ['secondPerson','irregular','present'])){
  correctAnswer=subjTwo[randomVerb];
}
else if (containsAll(preferencesResults, ['secondPerson','irregular','future'])){
  var randomImpIrreg=Math.floor(Math.random()*impIrregInf.length)
  correctAnswer=futSubjTwo[randomImpIrreg];
  infinitiveText.textContent=impIrregInf[randomImpIrreg]
}
else if (containsAll(preferencesResults, ['secondPerson','regular','imperfect'])){
  correctAnswer=regSubjImpTwo[randomRegVerb];
}
else if (containsAll(preferencesResults, ['secondPerson','regular','present'])){
  correctAnswer=regSubjTwo[randomRegVerb];
}
else if (containsAll(preferencesResults, ['secondPerson','regular','future'])){
  correctAnswer=regFutSubjTwo[randomRegVerb];
}
else if (containsAll(preferencesResults, ['secondPerson','both','imperfect'])){
  correctAnswer=momboImpSubjTwo[momboRandomVerb];
}
else if (containsAll(preferencesResults, ['secondPerson','both','present'])){
  correctAnswer=momboSubjTwo[momboRandomVerb];
}
else if (containsAll(preferencesResults, ['secondPerson','both','future'])){
  correctAnswer=momboFutSubjTwo[momboRandomVerb];
}
else if (containsAll(preferencesResults, ['thirdPerson','irregular','imperfect'])){
  var randomImpIrreg=Math.floor(Math.random()*impIrregInf.length)
  correctAnswer=impSubjThree[randomImpIrreg];
  infinitiveText.textContent=impIrregInf[randomImpIrreg]
}
else if (containsAll(preferencesResults, ['thirdPerson','irregular','present'])){
  correctAnswer=subjThree[randomVerb];
}
else if (containsAll(preferencesResults, ['thirdPerson','irregular','future'])){
  var randomImpIrreg=Math.floor(Math.random()*impIrregInf.length)
  correctAnswer=futSubjThree[randomImpIrreg];
  infinitiveText.textContent=impIrregInf[randomImpIrreg]
}
else if (containsAll(preferencesResults, ['thirdPerson','regular','imperfect'])){
  correctAnswer=regSubjImpThree[randomRegVerb];
}
else if (containsAll(preferencesResults, ['thirdPerson','regular','present'])){
  correctAnswer=regSubjThree[randomRegVerb];
}
else if (containsAll(preferencesResults, ['thirdPerson','regular','future'])){
  correctAnswer=regFutSubjThree[randomRegVerb];
}
else if (containsAll(preferencesResults, ['thirdPerson','both','imperfect'])){
  correctAnswer=momboImpSubjThree[momboRandomVerb];
}
else if (containsAll(preferencesResults, ['thirdPerson','both','present'])){
  correctAnswer=momboSubjThree[momboRandomVerb];
}
else if (containsAll(preferencesResults, ['thirdPerson','both','future'])){
  correctAnswer=momboFutSubjThree[momboRandomVerb];
}
else if (containsAll(preferencesResults, ['allPersons','irregular','imperfect'])){
  var randomImpIrreg=Math.floor(Math.random()*impIrregInf.length)
  infinitiveText.textContent=impIrregInf[randomImpIrreg]
  if (randomPronoun>4 && randomPronoun<8){
    correctAnswer=impSubjTwo[randomImpIrreg];
   }
   else if(randomPronoun>7){
    correctAnswer=impSubjThree[randomImpIrreg];
   }
   else {
    correctAnswer=impSubj[randomImpIrreg];
   }
}
else if (containsAll(preferencesResults, ['allPersons','irregular','present'])){
  if (randomPronoun>4 && randomPronoun<8){
    correctAnswer=subjTwo[randomVerb];
   }
   else if(randomPronoun>7){
     correctAnswer=subjThree[randomVerb];
   }
   else {
    correctAnswer=subj[randomVerb];
   }
}
else if (containsAll(preferencesResults, ['allPersons','irregular','future'])){
  var randomImpIrreg=Math.floor(Math.random()*impIrregInf.length)
  infinitiveText.textContent=impIrregInf[randomImpIrreg]
  if (randomPronoun>4 && randomPronoun<8){
    correctAnswer=futSubjTwo[randomImpIrreg];
   }
   else if(randomPronoun>7){
    correctAnswer=futSubjThree[randomImpIrreg];
   }
   else {
    correctAnswer=futSubj[randomImpIrreg];
   };
}
else if (containsAll(preferencesResults, ['allPersons','regular','imperfect'])){
  if (randomPronoun>4 && randomPronoun<8){
    correctAnswer=regSubjImpTwo[randomRegVerb];
   }
   else if(randomPronoun>7){
     correctAnswer=regSubjImpThree[randomRegVerb];
   }
   else {
    correctAnswer=regSubjImp[randomRegVerb];
   }
}
else if (containsAll(preferencesResults, ['allPersons','regular','present'])){
  if (randomPronoun>4 && randomPronoun<8){
    correctAnswer=regSubjTwo[randomVerb];
   }
   else if(randomPronoun>7){
     correctAnswer=regSubjThree[randomVerb];
   }
   else {
    correctAnswer=regSubj[randomVerb];
   }
}
else if (containsAll(preferencesResults, ['allPersons','regular','future'])){
  if (randomPronoun>4 && randomPronoun<8){
    correctAnswer=regFutSubjTwo[randomRegVerb];
   }
   else if(randomPronoun>7){
     correctAnswer=regFutSubjThree[randomRegVerb];
   }
   else {
    correctAnswer=regFutSubj[randomRegVerb];
   }
}
else if (containsAll(preferencesResults, ['allPersons','both','imperfect'])){
  if (randomPronoun>4 && randomPronoun<8){
    correctAnswer=momboImpSubjTwo[momboRandomVerb];
   }
   else if(randomPronoun>7){
     correctAnswer=momboImpSubjThree[momboRandomVerb];
   }
   else {
    correctAnswer=momboImpSubj[momboRandomVerb];
   }
}
else if (containsAll(preferencesResults, ['allPersons','both','present'])){
  if (randomPronoun>4 && randomPronoun<8){
    correctAnswer=momboSubjTwo[momboRandomVerb];
   }
   else if(randomPronoun>7){
     correctAnswer=momboSubjThree[momboRandomVerb];
   }
   else {
    correctAnswer=momboSubj[momboRandomVerb];
   }
}
else if (containsAll(preferencesResults, ['allPersons','both','future'])){
  if (randomPronoun>4 && randomPronoun<8){
    correctAnswer=momboFutSubjTwo[momboRandomVerb];
   }
   else if(randomPronoun>7){
     correctAnswer=momboFutSubjThree[momboRandomVerb];
   }
   else {
    correctAnswer=momboFutSubj[momboRandomVerb];
   }
}
else if (containsAll(preferencesResults, [])){
  if (randomPronoun>4 && randomPronoun<8){
    correctAnswer=momboSubjTwo[momboRandomVerb];
   }
   else if(randomPronoun>7){
     correctAnswer=momboSubjThree[momboRandomVerb];
   }
   else {
    correctAnswer=momboSubj[momboRandomVerb];
   }
}
  msg.style.display = 'none';
  playAgain.style.display='none';
  input.value='';
  msgHidden=true;
  console.log(preferencesResults);
}


//Spacebar trigger reset

document.body.addEventListener('keyup', event => {
  if (event.code === 'Space') {
   reset();
  }
})



//Spacebar not trigger check function
submitButton.addEventListener('focus', function() {
      this.blur();
  })

// toggle open sidebar left

function openSidebarLeft (){
  if (sidebarLeft.style.display === 'block') {
  sidebarLeft.style.display = 'none';
  preferencesButton.innerHTML = 'Settings <br>˅'
  }
  else{
    sidebarLeft.style.display = 'block';
    preferencesButton.innerHTML = 'Settings <br>˄'
  }
};

preferencesButton.addEventListener('click', openSidebarLeft);

// toggle open sidebar right

function openSidebarRight (){
  if (sidebarRight.style.display === 'block') {
  sidebarRight.style.display = 'none';
  cheatSheetButton.innerHTML = 'Cheat sheet <br>˅'
  }
  else{
    sidebarRight.style.display = 'block';
    cheatSheetButton.innerHTML = 'Cheat sheet <br>˄'
  }
};

cheatSheetButton.addEventListener('click', openSidebarRight);



//change cheat sheet 

var firstTenseButton=document.getElementById('first-tense-button')
var middleTenseButton=document.getElementById('middle-tense-button')
var lastTenseButton = document.getElementById('last-tense-button')
var tenseButtons=document.getElementsByClassName('tense-button');
var cheatSheetImperfect = document.getElementById('cheat-sheet-imperfect');
var cheatSheetPresent = document.getElementById('cheat-sheet-present');
var cheatSheetFuture = document.getElementById('cheat-sheet-future');

cheatSheetImperfect.style.display='none';
cheatSheetFuture.style.display='none';

function changeCheatSheet(e){
  firstTenseButton.classList.remove('active')
  middleTenseButton.classList.remove('active')
  lastTenseButton.classList.remove('active')
  e.target.classList.add('active')

} 
for (let i = 0; i < tenseButtons.length; i++) {
  tenseButtons[i].addEventListener('click',changeCheatSheet);
}

function changeCheatSheetToImperfect(){
  cheatSheetPresent.style.display='none';
  cheatSheetFuture.style.display='none';
  cheatSheetImperfect.style.display='block';
}

function changeCheatSheetToPresent(){
  cheatSheetPresent.style.display='block';
  cheatSheetFuture.style.display='none';
  cheatSheetImperfect.style.display='none';
}

function changeCheatSheetToFuture(){
  cheatSheetPresent.style.display='none';
  cheatSheetFuture.style.display='block';
  cheatSheetImperfect.style.display='none';
}

firstTenseButton.addEventListener('click', changeCheatSheetToImperfect);
middleTenseButton.addEventListener('click', changeCheatSheetToPresent);
lastTenseButton.addEventListener('click', changeCheatSheetToFuture);



