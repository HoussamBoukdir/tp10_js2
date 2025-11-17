const personnes = [
    {nom: "Rami", age: 33, estMember: true},
    {nom: "Fatihi", age: 24, estMember: false},
    {nom: "Chakib", age: 45, estMember: false},
    {nom: "Mounir", age: 37, estMember: false}
];
const persAges=personnes.filter(function(pers){
    return pers.age>=35
})
console.log(persAges);