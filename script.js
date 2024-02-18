let quiz = document.getElementById("quizForm");

//html elements to change

const candidateName = document.getElementById("quizResults");


//presidential options
const JoeBiden = [0, 0, 0, 0, 0, 1, 0, 0, 1, "Joe Biden", 0];
const MarianneWilliamson = [0, 0, 0, 0, 0, 0, 0, 0, 0, "Marianne Williamson", 0];
const DeanPhillips = [0, 0, 0, 0, 0, 1, 0, 0, 1, "Dean Phillips", 0];
const DonaldTrump = [2, 1, 1, 1, 2, 2, 1, 1, 0, "Donald Trump", 0];
const NikkiHaley = [2, 1, 2, 1, 1, 2, 1, 0, 0, "Nikki Haley", 0];
const RyanBinkley = [2, 1, 2, 2, 1, 2, 1, 1, 1, "Ryan Binkley", 0];
const RobertFKennedyJr = [1, 1, 0, 1, 0, 1, 1, 1, 1, "Robert F Kennedy Jr", 0];
const CornelWest = [1, 0, 0, 0, 0, 0, 0, 1, 1, "Cornel West", 0];
const JillStein = [1, 0, 0, 0, 0, 0, 0, 1, 1, "Jill Stein", 0];

const presidentialOptions = [JoeBiden, MarianneWilliamson, DeanPhillips, DonaldTrump, NikkiHaley, RyanBinkley, RobertFKennedyJr, CornelWest, JillStein];

//function to change those elements
function chooseCandidates(event){
  //first take in all quiz inputs
  //party
  var partyList = document.getElementsByName('q1-options');
  let party;
  
  for (i = 0; i < partyList.length; i++) {
    if (partyList[i].checked)
      party = i;
  }
  console.log(party);

  //gun control
  var gunControlList = document.getElementsByName('q2-options');
  let gunControl;

  for (i = 0; i < gunControlList.length; i++) {
    if (gunControlList[i].checked)
      gunControl = i;
  }
  
  //economy
  var economyList = document.getElementsByName('q3-options');
  let economy;

  for (i = 0; i < economyList.length; i++) {
    if (economyList[i].checked)
      economy = i;
  }
  
  //reproductive rights
  var reproductiveList = document.getElementsByName('q4-options');
  let reproductive;

  for (i = 0; i < reproductiveList.length; i++) {
    if (reproductiveList[i].checked)
      reproductive = i;
  }
  //climate change
  var climateList = document.getElementsByName('q5-options');
  let climate;

  for (i = 0; i < climateList.length; i++) {
    if (climateList[i].checked)
      climate = i;
  }
  //immigration
  var immigrationList = document.getElementsByName('q6-options');
  let immigration;

  for (i = 0; i < immigrationList.length; i++) {
    if (immigrationList[i].checked)
      immigration = i;
  }
  
  //healthcare
  var healthcareList = document.getElementsByName('q6-options');
  let healthcare;

  for (i = 0; i < healthcareList.length; i++) {
    if (healthcareList[i].checked)
      healthcare = i;
  }
  
  //foreign policy
  var foreignList = document.getElementsByName('q6-options');
  let foreign;

  for (i = 0; i < foreignList.length; i++) {
    if (foreignList[i].checked)
      foreign = i;
  }
  
  //stance on china
  var chinaList = document.getElementsByName('q6-options');
  let china;

  for (i = 0; i < chinaList.length; i++) {
    if (chinaList[i].checked)
        china = i;
  }

  //put it all into an array
  const userOpinion = [party, gunControl, economy, reproductive, climate, immigration, healthcare, foreign, china]

  //calculate scores
  for (i = 0; i < userOpinion.length; i++) {
    for (j = 0; j < presidentialOptions.length; j++)
      if (userOpinion[i] == presidentialOptions[j][i])
        presidentialOptions[j][10] += 1;
  }

  //find the highest score
  let chosenCandScore = 0;
  let chosenCandidateIndex = 0;

  for(i=0; i< presidentialOptions.length;i++){
    if(presidentialOptions[i][10] > chosenCandScore){
      chosenCandidateIndex = i;
    }
  }

  //actually changing the elements
  candidateName.innerText = presidentialOptions[chosenCandidateIndex][9];
}

quiz.addEventListener('submit', chooseCandidates);





