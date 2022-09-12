var desireVerb = ['Quero', 'Desejo', 'Espero', 'Duvido', 'Rezo', 'Pode ser', 'É possível', 'É preciso', 'É necessário', 'É provável', 'Oxala', 'Tomara', 'Prefiro', 'Para', 'A menos', 'Desde', 'É sufficiente','Receio'];
var infinitive = ['(ser)', '(ficar)', '(estar)', '(ir)', '(dar)', '(dizer)', '(fazer)', '(trazer)', '(poder)', '(ter)', '(vir)', '(pôr)', '(ler)', '(ver)', '(saber)', '(querer)', '(caber)', '(dormir)', '(fugir)', '(ouvir)', '(pedir)', '(medir)', '(perder)', '(seguir)', '(servir)', '(sentir)', '(haver)', '(cair)', '(sair)', '(rir)', '(valer)', '(requerer)', '(crer)'];
var impIrregInf = ['(ser)', '(estar)', '(ir)', '(dar)', '(dizer)', '(fazer)', '(trazer)', '(poder)', '(ter)', '(vir)', '(pôr)', '(ver)', '(saber)', '(querer)', '(caber)', '(haver)'];
var impSubj = ['fosse', 'estivesse', 'fosse', 'desse', 'dissesse', 'fizesse', 'trouxesse', 'pudesse', 'tivesse', 'viesse', 'pusesse', 'visse', 'soubesse', 'quisesse', 'coubesse', 'houvesse'];
var impSpareArray = ['fosse', 'estivesse', 'fosse', 'desse', 'dissesse', 'fizesse', 'trouxesse', 'pudesse', 'tivesse', 'viesse', 'pusesse', 'visse', 'soubesse', 'quisesse', 'coubesse', 'houvesse'];
var futSubj = ['for', 'estiver', 'for', 'der', 'disser', 'fizer', 'trouxer', 'puder', 'tiver', 'vier', 'puser', 'vir', 'souber', 'quiser', 'couber', 'houver'];
var futSpareArray = ['for', 'estiver', 'for', 'der', 'disser', 'fizer', 'trouxer', 'puder', 'tiver', 'vier', 'puser', 'vir', 'souber', 'quiser', 'couber', 'houver'];
var regInfinitiveUnconjugated = ['(comer)', '(matar)', '(iludir)', '(falar)', '(amar)', '(beber)', '(cantar)', '(comprar)', '(estudar)', '(vender)', '(viver)', '(achar)', '(acabar)', '(andar)', '(chamar)', '(encontrar)', '(morar)', '(morrer)', '(pensar)', '(olhar)', '(tomar)', '(voltar)', '(deixar)', '(levar)', '(dever)', '(existir)', '(receber)', '(trabalhar)', '(decidir)', '(fechar)', '(mandar)', '(perceber)', '(gostar)', '(usar)', '(esperar)', '(correr)', '(mostrar)', '(escrever)', '(abrir)', '(precisar)'];
var regInfinitive = ['(comer)', '(matar)', '(iludir)', '(falar)', '(amar)', '(beber)', '(cantar)', '(comprar)', '(estudar)', '(vender)', '(viver)', '(achar)', '(acabar)', '(andar)', '(chamar)', '(encontrar)', '(morar)', '(morrer)', '(pensar)', '(olhar)', '(tomar)', '(voltar)', '(deixar)', '(levar)', '(dever)', '(existir)', '(receber)', '(trabalhar)', '(decidir)', '(fechar)', '(mandar)', '(perceber)', '(gostar)', '(usar)', '(esperar)', '(correr)', '(mostrar)', '(escrever)', '(abrir)', '(precisar)'];
var regInfImp = ['(comer)', '(matar)', '(iludir)', '(falar)', '(amar)', '(beber)', '(cantar)', '(comprar)', '(estudar)', '(vender)', '(viver)', '(achar)', '(acabar)', '(andar)', '(chamar)', '(encontrar)', '(morar)', '(morrer)', '(pensar)', '(olhar)', '(tomar)', '(voltar)', '(deixar)', '(levar)', '(dever)', '(existir)', '(receber)', '(trabalhar)', '(decidir)', '(fechar)', '(mandar)', '(perceber)', '(gostar)', '(usar)', '(esperar)', '(correr)', '(mostrar)', '(escrever)', '(abrir)', '(precisar)'];
var regFutInf = ['(comer)', '(matar)', '(iludir)', '(falar)', '(amar)', '(beber)', '(cantar)', '(comprar)', '(estudar)', '(vender)', '(viver)', '(achar)', '(acabar)', '(andar)', '(chamar)', '(encontrar)', '(morar)', '(morrer)', '(pensar)', '(olhar)', '(tomar)', '(voltar)', '(deixar)', '(levar)', '(dever)', '(existir)', '(receber)', '(trabalhar)', '(decidir)', '(fechar)', '(mandar)', '(perceber)', '(gostar)', '(usar)', '(esperar)', '(correr)', '(mostrar)', '(escrever)', '(abrir)', '(precisar)'];
var subj = ['seja', 'fique', 'esteja', 'vá', 'dê', 'diga', 'faça', 'traga', 'possa', 'tenha', 'venha', 'ponha', 'leia', 'veja', 'saiba', 'queira', 'caiba', 'durma', 'fuja', 'ouça', 'peça', 'meça', 'perca', 'siga', 'sirva', 'sinta', 'haja', 'caia', 'saia', 'ria', 'valha', 'requeira', 'creia']
var subjTwo=['sejam','fiquem','estejam', 'vão', 'dêem', 'digam', 'façam', 'tragam', 'possam', 'tenham', 'venham', 'ponham', 'leiam', 'vejam', 'saibam', 'queiram', 'caibam', 'durmam', 'fujam', 'ouçam', 'peçam', 'meçam', 'percam', 'sigam', 'sirvam', 'sintam', 'hajam', 'caiam', 'saiam', 'riam', 'valham', 'requeiram', 'creiam']
var subjThree=['sejamos', 'fiquemos', 'estejamos', 'vamos', 'dêmos', 'digamos', 'façamos', 'tragamos', 'possamos', 'tenhamos', 'venhamos', 'ponhamos', 'leiamos', 'vejamos', 'saibamos', 'queiramos', 'caibamos', 'durmamos', 'fujamos', 'ouçamos', 'peçamos', 'meçamos', 'percamos', 'sigamos', 'sirvamos', 'sintamos', 'hajamos', 'caiamos', 'saiamos', 'riamos', 'valhamos', 'requeiramos', 'creiamos']
var pronoun = ['eu', 'você', 'ela', 'ele', 'a gente', 'vocês', 'eles', 'elas','nós']
var randomDesire=Math.floor(Math.random()*desireVerb.length);
var randomVerb=Math.floor(Math.random()*infinitive.length);
var randomRegVerb=Math.floor(Math.random()*regInfinitive.length);
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

//OBJECTS

var allInfinitives = {
 imperfect: ['(comer)', '(matar)', '(iludir)', '(falar)', '(amar)', '(beber)', '(cantar)', '(comprar)', '(estudar)', '(vender)', '(viver)', '(achar)', '(acabar)', '(andar)', '(chamar)', '(encontrar)', '(morar)', '(morrer)', '(pensar)', '(olhar)', '(tomar)', '(voltar)', '(deixar)', '(levar)', '(dever)', '(existir)', '(receber)', '(trabalhar)', '(decidir)', '(fechar)', '(mandar)', '(perceber)', '(gostar)', '(usar)', '(esperar)', '(correr)', '(mostrar)', '(escrever)', '(abrir)', '(precisar)'],
 imperfectIrregular: ['(ser)', '(estar)', '(ir)', '(dar)', '(dizer)', '(fazer)', '(trazer)', '(poder)', '(ter)', '(vir)', '(pôr)', '(ver)', '(saber)', '(querer)', '(caber)', '(haver)'],
 imperfectMombo: [],
 present: ['(comer)', '(matar)', '(iludir)', '(falar)', '(amar)', '(beber)', '(cantar)', '(comprar)', '(estudar)', '(vender)', '(viver)', '(achar)', '(acabar)', '(andar)', '(chamar)', '(encontrar)', '(morar)', '(morrer)', '(pensar)', '(olhar)', '(tomar)', '(voltar)', '(deixar)', '(levar)', '(dever)', '(existir)', '(receber)', '(trabalhar)', '(decidir)', '(fechar)', '(mandar)', '(perceber)', '(gostar)', '(usar)', '(esperar)', '(correr)', '(mostrar)', '(escrever)', '(abrir)', '(precisar)'],
 presentIrregular: ['(ser)', '(ficar)', '(estar)', '(ir)', '(dar)', '(dizer)', '(fazer)', '(trazer)', '(poder)', '(ter)', '(vir)', '(pôr)', '(ler)', '(ver)', '(saber)', '(querer)', '(caber)', '(dormir)', '(fugir)', '(ouvir)', '(pedir)', '(medir)', '(perder)', '(seguir)', '(servir)', '(sentir)', '(haver)', '(cair)', '(sair)', '(rir)', '(valer)', '(requerer)', '(crer)'],
 presentMombo: [],
 future: ['(comer)', '(matar)', '(iludir)', '(falar)', '(amar)', '(beber)', '(cantar)', '(comprar)', '(estudar)', '(vender)', '(viver)', '(achar)', '(acabar)', '(andar)', '(chamar)', '(encontrar)', '(morar)', '(morrer)', '(pensar)', '(olhar)', '(tomar)', '(voltar)', '(deixar)', '(levar)', '(dever)', '(existir)', '(receber)', '(trabalhar)', '(decidir)', '(fechar)', '(mandar)', '(perceber)', '(gostar)', '(usar)', '(esperar)', '(correr)', '(mostrar)', '(escrever)', '(abrir)', '(precisar)'],
 futureIrregular: ['(ser)', '(estar)', '(ir)', '(dar)', '(dizer)', '(fazer)', '(trazer)', '(poder)', '(ter)', '(vir)', '(pôr)', '(ver)', '(saber)', '(querer)', '(caber)', '(haver)'],
 futureMombo: [],
}
//create mombo infinitives
allInfinitives.imperfectMombo = allInfinitives.imperfect.concat(allInfinitives.imperfectIrregular);
allInfinitives.presentMombo = allInfinitives.present.concat(allInfinitives.presentIrregular);
allInfinitives.futureMombo = allInfinitives.future.concat(allInfinitives.futureIrregular);


var subjunctiveImperfect = {
  one:
  two:
  three:
  all:
  irregularOne:
  irregularTwo:
  irregularThree:
  irregularAll:
  momboOne:
  momboTwo:
  momboThree:
  momboAll:

}

var subjunctivePresent = {
  one:
  two:
  three:
  all:
  irregularOne:
  irregularTwo:
  irregularThree:
  irregularAll:
  momboOne:
  momboTwo:
  momboThree:
  momboAll:
}

var subjunctiveFuture = {
  one:
  two:
  three:
  all:
  irregularOne:
  irregularTwo:
  irregularThree:
  irregularAll:
  momboOne:
  momboTwo:
  momboThree:
  momboAll:
}




// create mombo array for infinitives 
var momboInfinitives = [];
for (let i = 0; i< infinitive.length; i++) {
  momboInfinitives.push(infinitive[i]);
}
for (let i = 0; i < regInfinitiveUnconjugated.length; i++) {
  momboInfinitives.push(regInfinitiveUnconjugated[i]);
}

// conjugate regular present verbs 
var regSubj = [];
var regSubjTwo = [];
var regSubjThree = [];
for (let i = 0; i < regInfinitive.length; i++) {
  if(regInfinitive[i][regInfinitive[i].length-3]==='a'){
regInfinitive[i] = regInfinitive[i].slice(1,regInfinitive[i].length-3);
regInfinitive[i] += 'e'
  }
 else if(regInfinitive[i][regInfinitive[i].length-3]==='e'||regInfinitive[i][regInfinitive[i].length-3]==='i'){
regInfinitive[i] = regInfinitive[i].slice(1,regInfinitive[i].length-3);
regInfinitive[i] += 'a'
 }
 regSubj.push(regInfinitive[i]);
}
// Vocês
for (let i = 0; i < regInfinitive.length; i++) {
regInfinitive[i] += 'm'
regSubjTwo.push(regInfinitive[i]);
}
// Nós
for (let i = 0; i < regInfinitive.length; i++) {
regInfinitive[i] += 'os'
regSubjThree.push(regInfinitive[i]);
}

// create mombo arrays for present reg and irreg
var momboSubj = [];
var momboSubjTwo = [];
var momboSubjThree = [];
for (let i = 0; i< subj.length; i++) {
  momboSubj.push(subj[i]);
}
for (let i = 0; i < regSubj.length; i++) {
  momboSubj.push(regSubj[i]);
}
for (let i = 0; i< subjTwo.length; i++) {
  momboSubjTwo.push(subjTwo[i]);
}
for (let i = 0; i < regSubjTwo.length; i++) {
  momboSubjTwo.push(regSubjTwo[i]);
}

for (let i = 0; i< subjThree.length; i++) {
  momboSubjThree.push(subjThree[i]);
}
for (let i = 0; i < regSubjThree.length; i++) {
  momboSubjThree.push(regSubjThree[i]);
}

// do the same for subjunctive imperfect
var regSubjImp = [];
var regSubjImpTwo = [];
var regSubjImpThree = [];

for (let i = 0; i < regInfImp.length; i++) {
  if(regInfImp[i][regInfImp[i].length-3]==='a'){
    regInfImp[i] = regInfImp[i].slice(1,regInfImp[i].length-3);
    regInfImp[i] += 'asse'
  }
 else if(regInfImp[i][regInfImp[i].length-3]==='e'){
  regInfImp[i] = regInfImp[i].slice(1,regInfImp[i].length-3);
  regInfImp[i] += 'esse'
 }
 else if(regInfImp[i][regInfImp[i].length-3]==='i'){
  regInfImp[i] = regInfImp[i].slice(1,regInfImp[i].length-3);
  regInfImp[i] += 'isse'
 }
 regSubjImp.push(regInfImp[i]);
}
// Vocês
for (let i = 0; i < regInfImp.length; i++) {
  regInfImp[i] += 'm'
  regSubjImpTwo.push(regInfImp[i]);
  }
// Nós
for (let i = 0; i < regInfImp.length; i++) {
  regInfImp[i] += 'os';
  regInfImp[i] = regInfImp[i].replace(/issemos/g,'íssemos');
  regInfImp[i] = regInfImp[i].replace(/assemos/g,'ássemos');
  regInfImp[i] = regInfImp[i].replace(/essemos/g,'êssemos');
  regSubjImpThree.push(regInfImp[i]);
  }

//conjugate irregulars 
var impSubjTwo = [];
var impSubjThree = [];
for (let i = 0; i < impSpareArray.length; i++) {
  impSubjTwo.push(impSpareArray[i] += 'm');
}
for (let i = 0;i < impSpareArray.length; i++) {
  impSpareArray[i] += 'os';
  impSpareArray[i] = impSpareArray[i].replace(/issemos/g,'íssemos');
  impSpareArray[i] = impSpareArray[i].replace(/assemos/g,'ássemos');
  impSpareArray[i] = impSpareArray[i].replace(/essemos/g,'éssemos');
  impSpareArray[i] = impSpareArray[i].replace('valéssemos','valêssemos');
  impSpareArray[i] = impSpareArray[i].replace('fossemos','fôssemos');
  impSpareArray[i] = impSpareArray[i].replace('fossemos','fôssemos');
  impSpareArray[i] = impSpareArray[i].replace('léssemos','lêssemos');
  impSpareArray[i] = impSpareArray[i].replace('léssemos','lêssemos');
  impSpareArray[i] = impSpareArray[i].replace('perdéssemos','perdêssemos');
  impSpareArray[i] = impSpareArray[i].replace('requeréssemos','requerêssemos');
  impSpareArray[i] = impSpareArray[i].replace('créssemos','crêssemos');
  impSubjThree.push(impSpareArray[i]);
} 


//create mombo arrays for reg and irreg
var momboImpSubj = [];
var momboImpSubjTwo = [];
var momboImpSubjThree = [];
for (let i = 0; i< impSubj.length; i++) {
  momboImpSubj.push(impSubj[i]);
}
for (let i = 0; i < regSubjImp.length; i++) {
  momboImpSubj.push(regSubjImp[i]);
}
for (let i = 0; i< impSubjTwo.length; i++) {
  momboImpSubjTwo.push(impSubjTwo[i]);
}
for (let i = 0; i < regSubjTwo.length; i++) {
  momboImpSubjTwo.push(regSubjImpTwo[i]);
}
for (let i = 0; i< impSubjThree.length; i++) {
  momboImpSubjThree.push(impSubjThree[i]);
}
for (let i = 0; i < regSubjThree.length; i++) {
  momboImpSubjThree.push(regSubjImpThree[i]);
}


// do the same for subjunctive future
var futSubjTwo = [];
var futSubjThree = [];

for (let i = 0; i < futSpareArray.length; i++) {
  futSubjTwo.push(futSpareArray[i]+='em');
}
for (let i = 0; i < futSpareArray.length; i++) {
 futSpareArray[i] = futSpareArray[i].replace(/rem/g,'rmos');
 futSubjThree.push(futSpareArray[i]);
}
//conjugate regulars for fut subj
var regFutSubj=[];
var regFutSubjTwo=[];
var regFutSubjThree=[];

for (let i = 0; i < regFutInf.length; i++) {
  regFutInf[i] = regFutInf[i].slice(1, regFutInf[i].length-1)
  regFutSubj.push(regFutInf[i]);
};
for (let i = 0; i < regFutInf.length; i++) {
  regFutSubjTwo.push(regFutInf[i]+='em')
};
for (let i = 0; i < regFutInf.length; i++) {
  regFutInf[i]=regFutInf[i].replace(/rem/g,'rmos')
  regFutSubjThree.push(regFutInf[i]);
};
//create mombo arrays for reg and irreg
var momboFutSubj = [];
var momboFutSubjTwo = [];
var momboFutSubjThree = [];
for (let i = 0; i< futSubj.length; i++) {
  momboFutSubj.push(futSubj[i]);
}
for (let i = 0; i < regFutSubj.length; i++) {
  momboFutSubj.push(regFutSubj[i]);
}
for (let i = 0; i< futSubjTwo.length; i++) {
  momboFutSubjTwo.push(futSubjTwo[i]);
}
for (let i = 0; i < regFutSubjTwo.length; i++) {
  momboFutSubjTwo.push(regFutSubjTwo[i]);
}
for (let i = 0; i< futSubjThree.length; i++) {
  momboFutSubjThree.push(futSubjThree[i]);
}
for (let i = 0; i < regFutSubjThree.length; i++) {
  momboFutSubjThree.push(regFutSubjThree[i]);
}



//First round
var momboRandomVerb=Math.floor(Math.random()*momboInfinitives.length);
infinitiveText.textContent=momboInfinitives[momboRandomVerb];
sentOne.textContent=`${desireVerb[randomDesire]} que ${pronoun[randomPronoun]}`;
if (randomPronoun>4 && randomPronoun<8){
var correctAnswer=momboSubjTwo[momboRandomVerb];
}
else if(randomPronoun>7){
  correctAnswer=momboSubjThree[momboRandomVerb];
}
else{
 correctAnswer=momboSubj[momboRandomVerb];
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
// testArray = ['hello','all','you'];
// console.log(containsAll(testArray, ['hello','alls','you']));

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

// get radio input
var verbAnswer = document.querySelectorAll('input[type="radio"');
var preferencesSubmitButton = document.getElementById('preferencesSubmitButton');
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



