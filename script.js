var candidate = function(candidateName, partyColor)
{
  var politician = {};
  politician.name = candidateName;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.partyColor = partyColor;

  politician.announceName = function()
  {
    console.log("The candidate is " + this.name + ", and her color is " + this.partyColor + ".");
  };
  politician.announceName();
  return politician;
};

//declare candidates
var candidate1 = candidate("Libby Libertarian", [132, 17, 11]);
var candidate2 = candidate("Connie Constitutionalist", [245, 141, 136]);
candidate1.electionResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];
candidate2.electionResults = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];

//vote recounts
candidate1.electionResults[9]=1;
candidate2.electionResults[9]=28;
candidate1.electionResults[4]=17;
candidate2.electionResults[4]=38;
candidate1.electionResults[43]=11;
candidate2.electionResults[43]=27;

console.log(candidate1.electionResults);
console.log(candidate2.electionResults);

console.log(candidate1.name);
console.log(candidate2.name);

//set state results
var setStateResults = function(state)
{
  theStates[state].winner = null;
  if (candidate1.electionResults[state] > candidate2.electionResults[state])
    {
      theStates[state].winner = candidate1;
    } else if (candidate1.electionResults[state] < candidate2.electionResults[state]) {
      theStates[state].winner = candidate2;
    }

  var stateWinner = theStates[state].winner
  if (stateWinner !== null) {
    console.log(stateWinner);
    console.log(stateWinner.partyColor);
    theStates[state].rgbColor = stateWinner.partyColor;
  } else {
    theStates[state].rgbColor = [11, 32, 57];
  }

  var stateResults = document.getElementById('stateResults');
  var header = stateResults.children[0].children[0];
  var stateName = header.children[0];
  var stateAbbr = header.children[1];
  var body = stateResults.children[1];
  var name1 = body.children[0].children[0];
  var results1 = body.children[0].children[1];
  var name2 = body.children[1].children[0];
  var results2 = body.children[1].children[1];
  var winnerName = body.children[2].children[1];

  stateName.innerText = theStates[state].nameFull;
  stateAbbr.innerText = theStates[state].nameAbbrev;
  name1.innerText = candidate1.name;
  results1.innerText = candidate1.electionResults[state];
  name2.innerText = candidate2.name;
  results2.innerText = candidate2.electionResults[state];
  if (theStates[state].winner === null)
    {winnerName.innerText = "TIE!";}
  else
    {winnerName.innerText = theStates[state].winner.name;}

};


//count total votes
candidate1.tallyVotes = function ()
{
  this.totalResults = 0;
  for (var i=0; i<this.electionResults.length; i++)
    {
      this.totalResults = this.totalResults + this.electionResults[i];
    }
  console.log(this.totalResults);
};
candidate1.tallyVotes();

candidate2.tallyVotes = function ()
{
  this.totalResults = 0;
  for (var i=0; i<this.electionResults.length; i++)
    {
      this.totalResults = this.totalResults + this.electionResults[i];
    }
      console.log(this.totalResults);
};
candidate2.tallyVotes();

//declaring winner
var winner;

if (candidate1.totalResults > candidate2.totalResults)
    {
      winner = candidate1.name;
    } else if (candidate1.totalResults === candidate2.totalResults) {
      winner = "It's a tie!";
    } else {
      winner = candidate2.name;
    }

console.log(winner + " has won the election!");


//country results table
var countryResults = document.getElementById('countryResults');

countryResults.children[0].children[0].children[0].innerText = candidate1.name;
countryResults.children[0].children[0].children[1].innerText = candidate1.totalResults;
countryResults.children[0].children[0].children[2].innerText = candidate2.name;
countryResults.children[0].children[0].children[3].innerText = candidate2.totalResults;
countryResults.children[0].children[0].children[5].innerText = winner;
