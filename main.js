var desireVerb = ['Quero', 'Desejo', 'Espero', 'Duvido', 'Rezo', 'Pode ser', 'É possível', 'É preciso', 'É necessário', 'É provável', 'Oxala', 'Tomara', 'Prefiro', 'Para', 'A menos', 'Desde', 'É sufficiente','Receio'];
var pronounList = ['eu', 'você', 'ela', 'ele', 'a gente', 'vocês', 'eles', 'elas','nós']
var randomDesire=Math.floor(Math.random()*desireVerb.length);
var randomPronoun=Math.floor(Math.random()*pronounList.length);
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
verbSelected.innerHTML = 'Verb tense: Subjunctive Present'; 
var preferencesSubmitButton = document.getElementById('preferencesSubmitButton');



//OBJECTS
var verbs = {
firstIrregImp: {
  pronoun: 'firstPerson',
  pronounNumberMin: 4,
  pronounNumberMax: 0,
  regularity: 'irregular',
  tense: 'imperfect',
  conjugated: ['fosse', 'estivesse', 'fosse', 'desse', 'dissesse', 'fizesse', 'trouxesse', 'pudesse', 'tivesse', 'viesse', 'pusesse', 'visse', 'soubesse', 'quisesse', 'coubesse', 'houvesse'],
  infinitive: ['(ser)', '(estar)', '(ir)', '(dar)', '(dizer)', '(fazer)', '(trazer)', '(poder)', '(ter)', '(vir)', '(pôr)', '(ver)', '(saber)', '(querer)', '(caber)', '(haver)'], 
},
secondIrregImp: {
  pronoun: 'secondPerson',
  pronounNumberMin: 3,
  pronounNumberMax: 5,
  regularity: 'irregular',
  tense: 'imperfect',
  conjugated: [],
  infinitive: [],
},
thirdIrregImp: {
  pronoun: 'thirdPerson',
  pronunNumberMin: 1,
  pronounNumberMax: pronounList.length-1,
  regularity: 'irregular',
  tense: 'imperfect',
  conjugated: [],
  infinitive: [],
},
firstRegImp: {
  pronoun: 'firstPerson',
  pronounNumberMin: 4,
  pronounNumberMax: 0,
  regularity: 'regular',
  tense: 'imperfect',
  conjugated: [],
  infinitive: ['(comer)', '(matar)', '(iludir)', '(falar)', '(amar)', '(beber)', '(cantar)', '(comprar)', '(estudar)', '(vender)', '(viver)', '(achar)', '(acabar)', '(andar)', '(chamar)', '(encontrar)', '(morar)', '(morrer)', '(pensar)', '(olhar)', '(tomar)', '(voltar)', '(deixar)', '(levar)', '(dever)', '(existir)', '(receber)', '(trabalhar)', '(decidir)', '(fechar)', '(mandar)', '(perceber)', '(gostar)', '(usar)', '(esperar)', '(correr)', '(mostrar)', '(escrever)', '(abrir)', '(precisar)'],
},
secondRegImp: {
  pronoun: 'secondPerson',
  pronounNumberMin: 3,
  pronounNumberMax: 5,
  regularity: 'regular',
  tense: 'imperfect',
  conjugated: [],
  infinitive: [],
},
thirdRegImp: {
  pronoun: 'thirdPerson',
  pronunNumberMin: 1,
  pronounNumberMax: pronounList.length-1,
  regularity: 'regular',
  tense: 'imperfect',
  conjugated: [],
  infinitive: [],
},
firstBothImp: {
  pronoun: 'firstPerson',
  pronounNumberMin: 4,
  pronounNumberMax: 0,
  regularity: 'both',
  tense: 'imperfect',
  conjugated: [],
  infinitive: [],
},
secondBothImp: {
  pronoun: 'secondPerson',
  pronounNumberMin: 3,
  pronounNumberMax: 5,
  regularity: 'both',
  tense: 'imperfect',
  conjugated: [],
  infinitive: [],
},
thirdBothImp: {
  pronoun: 'thirdPerson',
  pronunNumberMin: 1,
  pronounNumberMax: pronounList.length-1,
  regularity: 'both',
  tense: 'imperfect',
  conjugated: [],
  infinitive: [],
},
firstIrregPres: {
  pronoun: 'firstPerson',
  pronounNumberMin: 4,
  pronounNumberMax: 0,
  regularity: 'irregular',
  tense: 'present',
  conjugated: ['seja', 'fique', 'esteja', 'vá', 'dê', 'diga', 'faça', 'traga', 'possa', 'tenha', 'venha', 'ponha', 'leia', 'veja', 'saiba', 'queira', 'caiba', 'durma', 'fuja', 'ouça', 'peça', 'meça', 'perca', 'siga', 'sirva', 'sinta', 'haja', 'caia', 'saia', 'ria', 'valha', 'requeira', 'creia'],
  infinitive: ['(ser)', '(ficar)', '(estar)', '(ir)', '(dar)', '(dizer)', '(fazer)', '(trazer)', '(poder)', '(ter)', '(vir)', '(pôr)', '(ler)', '(ver)', '(saber)', '(querer)', '(caber)', '(dormir)', '(fugir)', '(ouvir)', '(pedir)', '(medir)', '(perder)', '(seguir)', '(servir)', '(sentir)', '(haver)', '(cair)', '(sair)', '(rir)', '(valer)', '(requerer)', '(crer)'],
},
secondIrregPres: {
  pronoun: 'secondPerson',
  pronounNumberMin: 3,
  pronounNumberMax: 5,
  regularity: 'irregular',
  tense: 'present',
  conjugated: [],
  infinitive: [],
},
thirdIrregPres: {
  pronoun: 'thirdPerson',
  pronunNumberMin: 1,
  pronounNumberMax: pronounList.length-1,
  regularity: 'irregular',
  tense: 'present',
  conjugated: [],
  infinitive: [],
},
firstRegPres: {
  pronoun: 'firstPerson',
  pronounNumberMin: 4,
  pronounNumberMax: 0,
  regularity: 'regular',
  tense: 'present',
  conjugated: [],
  infinitive: [],
},
secondRegPres: {
  pronoun: 'secondPerson',
  pronounNumberMin: 3,
  pronounNumberMax: 5,
  regularity: 'regular',
  tense: 'present',
  conjugated: [],
  infinitive: [],
},
thirdRegPres: {
  pronoun: 'thirdPerson',
  pronunNumberMin: 1,
  pronounNumberMax: pronounList.length-1,
  regularity: 'regular',
  tense: 'present',
  conjugated: [],
  infinitive: [],
},
firstBothPres: {
  pronoun: 'firstPerson',
  pronounNumberMin: 4,
  pronounNumberMax: 0,
  regularity: 'both',
  tense: 'present',
  conjugated: [],
  infinitive: [],
},
secondBothPres: {
  pronoun: 'secondPerson',
  pronounNumberMin: 3,
  pronounNumberMax: 5,
  regularity: 'both',
  tense: 'present',
  conjugated: [],
  infinitive: [],
},
thirdBothPres: {
  pronoun: 'thirdPerson',
  pronunNumberMin: 1,
  pronounNumberMax: pronounList.length-1,
  regularity: 'both',
  tense: 'present',
  conjugated: [],
  infinitive: [],
},
firstIrregFut: {
  pronoun: 'firstPerson',
  pronounNumberMin: 4,
  pronounNumberMax: 0,
  regularity: 'irregular',
  tense: 'future',
  conjugated: ['for', 'estiver', 'for', 'der', 'disser', 'fizer', 'trouxer', 'puder', 'tiver', 'vier', 'puser', 'vir', 'souber', 'quiser', 'couber', 'houver'],
  infinitive: [],
},
secondIrregFut: {
  pronoun: 'secondPerson',
  pronounNumberMin: 3,
  pronounNumberMax: 5,
  regularity: 'irregular',
  tense: 'future',
  conjugated: [],
  infinitive: [],
},
thirdIrregFut: {
  pronoun: 'thirdPerson',
  pronunNumberMin: 1,
  pronounNumberMax: pronounList.length-1,
  regularity: 'irregular',
  tense: 'future',
  conjugated: [],
  infinitive: [],
},
firstRegFut: {
  pronoun: 'firstPerson',
  pronounNumberMin: 4,
  pronounNumberMax: 0,
  regularity: 'regular',
  tense: 'future',
  conjugated: [],
  infinitive: [],
},
secondRegFut: {
  pronoun: 'secondPerson',
  pronounNumberMin: 3,
  pronounNumberMax: 5,
  regularity: 'regular',
  tense: 'future',
  conjugated: [],
  infinitive: [],
},
thirdRegFut: {
  pronoun: 'thirdPerson',
  pronunNumberMin: 1,
  pronounNumberMax: pronounList.length-1,
  regularity: 'regular',
  tense: 'future',
  conjugated: [],
  infinitive: [],
},
firstBothFut: {
  pronoun: 'firstPerson',
  pronounNumberMin: 4,
  pronounNumberMax: 0,
  regularity: 'both',
  tense: 'future',
  conjugated: [],
  infinitive: [],
},
secondBothFut: {
  pronoun: 'secondPerson',
  pronounNumberMin: 3,
  pronounNumberMax: 5,
  regularity: 'both',
  tense: 'future',
  conjugated: [],
  infinitive: [],
},
thirdBothFut: {
  pronoun: 'thirdPerson',
  pronunNumberMin: 1,
  pronounNumberMax: pronounList.length-1,
  regularity: 'both',
  tense: 'future',
  conjugated: [],
  infinitive: [],
},
allIrregImp: {
  pronoun: 'allPersons',
  pronounNumberMin: pronounList.length-1,
  pronounNumberMax: 1,
  tense: 'imperfect',
  regularity: 'irregular',
  first: [],
  second: [],
  third: [],
  infinitive: [],
},
allRegImp: {
  pronoun: 'allPersons',
  pronounNumberMin: pronounList.length-1,
  pronounNumberMax: 1,
  tense: 'imperfect',
  regularity: 'regular',
  first: [],
  second: [],
  third: [],
  infinitive: [],
},
allBothImp: {
  pronoun: 'allPersons',
  pronounNumberMin: pronounList.length-1,
  pronounNumberMax: 1,
  tense: 'imperfect',
  regularity: 'both',
  first: [],
  second: [],
  third: [],
  infinitive: [],
},
allIrregPres: {
  pronoun: 'allPersons',
  pronounNumberMin: pronounList.length-1,
  pronounNumberMax: 1,
  tense: 'present',
  regularity: 'irregular',
  first: [],
  second: [],
  third: [],
  infinitive: [],
},
allRegPres: {
  pronoun: 'allPersons',
  pronounNumberMin: pronounList.length-1,
  pronounNumberMax: 1,
  tense: 'present',
  regularity: 'regular',
  first: [],
  second: [],
  third: [],
  infinitive: [],
},
allBothPres: {
  pronoun: 'allPersons',
  pronounNumberMin: pronounList.length-1,
  pronounNumberMax: 1,
  tense: 'present',
  regularity: 'both',
  first: [],
  second: [],
  third: [],
  infinitive: [],
},
allIrregFut: {
  pronoun: 'allPersons',
  pronounNumberMin: pronounList.length-1,
  pronounNumberMax: 1,
  tense: 'future',
  regularity: 'irregular',
  first: [],
  second: [],
  third: [],
  infinitive: [],
},
allRegFut: {
  pronoun: 'allPersons',
  pronounNumberMin: pronounList.length-1,
  pronounNumberMax: 1,
  tense: 'future',
  regularity: 'regular',
  first: [],
  second: [],
  third: [],
  infinitive: [],
},
allBothFut: {
  pronoun: 'allPersons',
  pronounNumberMin: pronounList.length-1,
  pronounNumberMax: 1,
  tense: 'future',
  regularity: 'both',
  first: [],
  second: [],
  third: [],
  infinitive: [],
},
//INDICATIVE
indFirstIrregPres: {
  pronoun: 'firstPerson',
  pronounNumberMin: 4,
  pronounNumberMax: 0,
  tense: 'imperfect',
  regularity: 'irregular',
  conjugated: ['(vou)', '(sou)', '(estou)', '(dou)', '(digo)', '(faço)', '(trago)', '(posso)', '(tenho)', '(venho)', '(ponho)', '(leio)', '(vejo)', '(caio)', '(saio)', '(creio)', '(fujo)', '(rio)', '(subo)', '(caibo)', '(quero)', '(sei)', '(durmo)', '(meço)', '(ouço)', '(peço)', '(perco)', '(sigo)', '(sirvo)', '(sinto)', '(valho)', '(requeiro)', '(hei)'],
  infinitive: ['(ir)', '(ser)', '(estar)', '(dar)', '(dizer)', '(fazer)', '(trazer)', '(poder)', '(ter)', '(vir)', '(pôr)', '(ler)', '(ver)', '(cair)', '(sair)', '(crer)', '(fugir)', '(rir)', '(subir)', '(caber)', '(querer)', '(saber)', '(dormir)', '(medir)', '(ouvir)', '(pedir)', '(perder)', '(seguir)', '(servir)', '(sentir)', '(valer)', '(requerer)', '(haver)'], 
},
indSecondIrregPres: {
  pronoun: 'vocePerson',
  pronounNumberMin: 4,
  pronounNumberMax: 0,
  tense: 'imperfect',
  regularity: 'irregular',
  conjugated: ['(vai)', '(é)', '(está)', '(dá)', '(diz)', '(faz)', '(traz)', '(pode)', '(tem)', '(vem)', '(pōe)', '(lê)', '(vê)', '(cai)', '(sai)', '(crê)', '(foge)', '(ri)', '(sobe)', '(cabe)', '(quer)', '(sabe)', '(dorme)', '(mede)', '(ouve)', '(pede)', '(perde)', '(segue)', '(serve)', '(sente)', '(vale)', '(requeiro)', '(hei)'],
  infinitive: ['(ir)', '(ser)', '(estar)', '(dar)', '(dizer)', '(fazer)', '(trazer)', '(poder)', '(ter)', '(vir)', '(pôr)', '(ler)', '(ver)', '(cair)', '(sair)', '(crer)', '(fugir)', '(rir)', '(subir)', '(caber)', '(querer)', '(saber)', '(dormir)', '(medir)', '(ouvir)', '(pedir)', '(perder)', '(seguir)', '(servir)', '(sentir)', '(valer)', '(requer)', '(há)'], 
}
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
verbs.thirdIrregFut.infinitive = verbs.firstIrregImp.infinitive
verbs.secondIrregFut.infinitive = verbs.firstIrregImp.infinitive
verbs.secondIrregFut.conjugated = verbs.firstIrregFut.conjugated.map((word) => 
word += 'em'
);
verbs.thirdIrregFut.conjugated = verbs.firstIrregFut.conjugated.map((word) => 
  word += 'mos'
);

verbs.firstRegFut.infinitive = verbs.firstRegImp.infinitive
verbs.secondRegFut.infinitive = verbs.firstRegImp.infinitive
verbs.thirdRegFut.infinitive = verbs.firstRegImp.infinitive
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

verbs.allIrregImp.infinitive = verbs.firstIrregImp.infinitive
verbs.allRegImp.infinitive = verbs.firstRegImp.infinitive
verbs.allBothImp.infinitive = verbs.firstRegImp.infinitive.concat(verbs.firstIrregImp.infinitive)
verbs.allIrregImp.first = verbs.firstIrregImp.conjugated
verbs.allIrregImp.second = verbs.secondIrregImp.conjugated
verbs.allIrregImp.third = verbs.thirdIrregImp.conjugated
verbs.allRegImp.first = verbs.firstRegImp.conjugated
verbs.allRegImp.second = verbs.secondRegImp.conjugated
verbs.allRegImp.third = verbs.thirdRegImp.conjugated
verbs.allBothImp.first = verbs.firstBothImp.conjugated
verbs.allBothImp.second = verbs.secondBothImp.conjugated
verbs.allBothImp.third = verbs.thirdBothImp.conjugated

verbs.allIrregPres.infinitive = verbs.firstIrregPres.infinitive
verbs.allRegPres.infinitive = verbs.firstRegPres.infinitive
verbs.allBothPres.infinitive = verbs.firstRegPres.infinitive.concat(verbs.firstIrregPres.infinitive)
verbs.allIrregPres.first = verbs.firstIrregPres.conjugated
verbs.allIrregPres.second = verbs.secondIrregPres.conjugated
verbs.allIrregPres.third = verbs.thirdIrregPres.conjugated
verbs.allRegPres.first = verbs.firstRegPres.conjugated
verbs.allRegPres.second = verbs.secondRegPres.conjugated
verbs.allRegPres.third = verbs.thirdRegPres.conjugated
verbs.allBothPres.first = verbs.firstBothPres.conjugated
verbs.allBothPres.second = verbs.secondBothPres.conjugated
verbs.allBothPres.third = verbs.thirdBothPres.conjugated

verbs.allIrregFut.infinitive = verbs.firstIrregFut.infinitive
verbs.allRegFut.infinitive = verbs.firstRegFut.infinitive
verbs.allBothFut.infinitive = verbs.firstRegFut.infinitive.concat(verbs.firstIrregFut.infinitive)
verbs.allIrregFut.first = verbs.firstIrregFut.conjugated
verbs.allIrregFut.second = verbs.secondIrregFut.conjugated
verbs.allIrregFut.third = verbs.thirdIrregFut.conjugated
verbs.allRegFut.first = verbs.firstRegFut.conjugated
verbs.allRegFut.second = verbs.secondRegFut.conjugated
verbs.allRegFut.third = verbs.thirdRegFut.conjugated
verbs.allBothFut.first = verbs.firstBothFut.conjugated
verbs.allBothFut.second = verbs.secondBothFut.conjugated
verbs.allBothFut.third = verbs.thirdBothFut.conjugated

//contains all function to check preferences results
function containsAll(arr, values) {
  return values.every(value => {
    return arr.includes(value);
  });
}

//First round

var randomBothPresVerb=Math.floor(Math.random()*verbs.firstBothPres.infinitive.length);
infinitiveText.textContent=verbs.firstBothPres.infinitive[randomBothPresVerb];
sentOne.textContent=`${desireVerb[randomDesire]} que ${pronounList[randomPronoun]}`;
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



//Reset game
function reset(){
  if(msgHidden === true) {
    return;
}
if(preferencesResults.length===0){
  preferencesResults.push('allPersons','both','present')
}
for (var key in verbs){
  if(containsAll(preferencesResults, [verbs[key].pronoun, verbs[key].regularity, verbs[key].tense])){
    randomPronoun=Math.floor(Math.random()*(verbs[key].pronounNumberMin))+verbs[key].pronounNumberMax
    var randomSpecializedNumber=Math.floor(Math.random()*verbs[key].infinitive.length)
    infinitiveText.textContent=verbs[key].infinitive[randomSpecializedNumber]
    if (preferencesResults[0] !== 'allPersons'){
    correctAnswer = verbs[key].conjugated[randomSpecializedNumber]
    }
    if(preferencesResults[0]==='thirdPerson'){
      randomPronoun=8;
    }
    if(preferencesResults[2]==='imperfect'){
      sentOne.textContent='Se ' + pronounList[randomPronoun];
      verbSelected.style.display = 'block';
      verbSelected.innerHTML = 'Verb tense: Subjunctive Imperfect'; 
    }
    else if(preferencesResults[2]==='present'){
      randomDesire=Math.floor(Math.random()*desireVerb.length);
      sentOne.textContent=`${desireVerb[randomDesire]} que ${pronounList[randomPronoun]}`;
      verbSelected.style.display = 'block';
      verbSelected.innerHTML = 'Verb tense: Subjunctive Present'; 
    }
    else if(preferencesResults[2]==='future'){
      sentOne.textContent=futSentStarts[Math.floor(Math.random()*2)] + pronounList[randomPronoun];
      verbSelected.style.display = 'block';
      verbSelected.innerHTML = 'Verb tense: Subjunctive Future'; 
    }
  if(preferencesResults[0] === 'allPersons'){
    infinitiveText.textContent=verbs[key].infinitive[randomSpecializedNumber]
  if (randomPronoun>4 && randomPronoun<8){
    correctAnswer=verbs[key].second[randomSpecializedNumber]
    }
    else if(randomPronoun>7){
      correctAnswer=verbs[key].third[randomSpecializedNumber]
    }
    else{
     correctAnswer=verbs[key].first[randomSpecializedNumber]
    }
}
  }
  }
  msg.style.display = 'none';
  playAgain.style.display='none';
  input.value='';
  msgHidden=true;
  console.log(preferencesResults);
};



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
var verbAnswer = document.getElementsByClassName('subjunctive-input');
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
//change tense settings
var indicativeSettings = document.getElementById('indicative-settings');
var subjunctiveSettings = document.getElementById('subjunctive-settings');
var tenseSettingsButtons = document.getElementsByClassName('tense-settings-button');
var indicativeSettingsButton = document.getElementById('indicative-button');
var subjunctiveSettingsButton = document.getElementById('subjunctive-button');

indicativeSettings.style.display='none';

function changeTenseSettings(e){
  subjunctiveSettingsButton.classList.remove('active')
  indicativeSettingsButton.classList.remove('active')
  e.target.classList.add('active')
}
for (let i = 0; i < tenseSettingsButtons.length; i++) {
  tenseSettingsButtons[i].addEventListener('click',changeTenseSettings);
}

function changeTenseSettingsToIndicative(){
  subjunctiveSettings.style.display='none';
  indicativeSettings.style.display='block';
}

function changeTenseSettingsToSubjunctive(){
  subjunctiveSettings.style.display='block';
  indicativeSettings.style.display='none';
}

subjunctiveSettingsButton.addEventListener('click', changeTenseSettingsToSubjunctive)
indicativeSettingsButton.addEventListener('click', changeTenseSettingsToIndicative)

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



