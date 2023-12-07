const people=[
    {name:"Tadas", age:25, city:"Kaunas"},
    {name:"Karolis", age:16, city:"Vilnius"},
    {name:"Rimantas", age:65, city:"Vilnius"},
    {name:"Ona", age:20, city:"Klaipeda"},
    {name:"Milda", age:50, city:"Utena"},
    {name:"Rasa", age:33, city:"Kaunas"}
];

for (let i=0;i<people.length;i++) {
    const ul=document.createElement('ul');
    ul.setAttribute("class","menu")
    document.querySelector('body').appendChild(ul);

    const name=document.createElement('li');
    name.textContent="Vardas: "+people[i].name;
    ul.appendChild(name);

    const age=document.createElement('li');
    age.textContent="Amzius: "+people[i].age;
    ul.appendChild(age);

    const city=document.createElement('li');
    city.textContent="Miestas: "+people[i].city;
    ul.appendChild(city);
}

function filter(){
    let filterValue,input,ul,li;
    input=document.getElementById('search');
    filterValue=input.value.toUpperCase();
    ul=document.getElementsByClassName('menu');
    for(let i=0;i<ul.length;i++) {
        li=ul[i].getElementsByTagName('li');
        for(let y=0;y<li.length;y++) {
            let ageLi=li[y];
            let ageText=ageLi.textContent || ageLi.innerText;
            if(ageText.toUpperCase().indexOf(filterValue)>-1){
                ul[i].style.display="";
                break;
            }else{
                ul[i].style.display="none";
            }
        }
    }
}

