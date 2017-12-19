var myActors = angular.module('myactors',[])
var actors = [{
  name:"Adam Sandler",
  favMovie:"Click",
  movieD:"Click is a hilarious movie! Check it out but don't mess with the remote!",
  images:[{
    full:"Images/adam-sandler.jpg"
  }]
},{
  name:"Will Smith",
  favMovie:"I am Legend",
  movieD:"He is a univeral actor and can take the role in just about ANY movie!",
  images:[{
    full:"Images/will-smith.jpeg"
  }]
},{
  name:"Eva Mendes",
  favMovie:"Hitch",
  movieD:"She isn't a super star actor but she is definitely gorgeous!",
  images:[{
    full:"Images/eva-mendes.jpeg"
  }]
},{
  name:"James Franco",
  favMovie:"Pineapple Express",
  movieD:"Hilarious movie with his friend seth rogen who is also a favorite actor of mine.",
  images:[{
    full:"Images/james-franco.jpeg"
  }]
},{
  name:"Seth Rogen",
  favMovie:"This is the End",
  movieD:"Crazy end of the world movie with not only Seth but multiple comedian actors.",
  images:[{
    full:"Images/seth-rogen.jpeg"
  }]
},{
  name:"Denzel Washington",
  favMovie:"Training Day",
  movieD:"Denzel is a BAD man in his action movies! No further description needed!",
  images:[{
    full:"Images/denzel-washington.jpg"
  }]
},{
  name:"Jennifer Lawrence",
  favMovie:"Hunger Games",
  movieD:"They say books are always better than the movies but Jennifer definitely nailed this movie with her acting.",
  images:[{
    full:"Images/jennifer-lawrence.jpeg"
  }]
},{
  name:"Leonardo Dicaprio",
  favMovie:"Wolf of Wall Street",
  movieD:"He definitely showed the american dream and how Jordan Belfort lived his millionare life.",
  images:[{
    full:"Images/leonardo-dicaprio.jpeg"
  }]
},{
  name:"Mark Wahlberg",
  favMovie:"Ted",
  movieD:"Marky mark and ted have a fun life until his girlfriend screws stuff up.",
  images:[{
    full:"Images/mark-wahlberg.jpeg"
  }]
},{
  name:"Megan Fox",
  favMovie:"Transformers 1&2",
  movieD:"Although she only played in the first two movies, I still appreciate the movies she was in.",
  images:[{
    full:"Images/megan-fox.jpeg"
  }]
}]
myActors.controller("myController",function($scope){
  $scope.actors = actors;
});
myActors.controller("panelController",function($scope){
  $scope.tab = 1;
  $scope.selectTab = function(newTab){
    $scope.tab = newTab;
  }
})
