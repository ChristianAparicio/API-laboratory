let canvas;
let screenInfo;
let URL = 'https://catfact.ninja/fact';
let catFact = null;
let URL2 = 'https://randomuser.me/api/';
let userCity = null;
let userName= null;
let userLastName= null;
let URL3= "https://api.coindesk.com/v1/bpi/currentprice.json"
let bitcoin= null;
let URL4= "https://datausa.io/api/data?drilldowns=Nation&measures=Population";
let population= null;
let URL5= "https://dog.ceo/api/breeds/image/random"
let dogImage= null;

let img;


function preload() {
    
}

function setup() {
    img = loadImage('./bg.png');
console.log("Hola");

    screenInfo= 1;
    frameRate(60);
    canvas = createCanvas(1920, 1080);
    // canvas.style('z-index', '-1');
    // canvas.style('position', 'fixed');
    // canvas.style('top', '0');
    // canvas.style('right', '0');
   
    console.log(fetch(URL).then(response => response.json()));
    fetch(URL)
        .then(response => response.json())
        .then(data => {catFact=data
                        console.log(catFact.fact)                
        } )

        
    console.log(fetch(URL2).then(response2 => response2.json()));
    fetch(URL2)
    .then(response2 => response2.json())
        // .then(data => {user=data

        //                 console.log(user.results)                
        // } )
        .then(response2II => {
            let array = response2II.results;
            return array;
        })
        .then(response2III=>{
            console.log(response2III[0].location.city)

            userCity= response2III[0].location.city;
            userName= response2III[0].name.first;
            userLastName= response2III[0].name.last;
        })

        console.log(fetch(URL3).then(response3 => response3.json()));
        
        fetch(URL3)
         .then(response3 => response3.json())
            .then(data => {bitcoin=data
                            console.log(bitcoin.bpi.EUR.rate) 
                            bitcoin= bitcoin.bpi.EUR.rate               
            } )

    // .then(response3II=>{
    //     let array = response3II.bpi;
    //     return array;
    // })
   
    
    fetch(URL4)
    .then(res => {
        let fact = res.json();
        return fact;
    })
    .then(resp => {
        let array2 = resp.data;
        return array2;
    })
    .then(respu =>{
        population = respu[parseInt(random(7)).Population];
        console.log(population)
    });


    fetch(URL5)
    .then(response=>response.json()
    .then(data=>{
        dogImage= loadImage(data.message);
        console.log(dogImage)
    }))
 
}
function draw() {
    //background(0, 50);
    background(0);
    
   imageMode(CORNER);
    image(img,0,0, 1920, 1080);

  
 

    switch(screenInfo){
        case 1:
    
    if(catFact != null){
        fill(0);
     textSize(20);
    textWrap(WORD);
    text(catFact.fact, 368, 570, 300)
    
    }
    break;

    case 2:

    if(userCity != null){
        fill(0);
        textSize(20);
        textWrap(WORD);
        text("City:"+userCity, 368, 570, 300)
    }

    
    if(userName != null){
        fill(0);
        textSize(20);
        textWrap(WORD);
        text("Name:"+userName, 368, 470, 300)
    }

    if(userLastName!= null){
        fill(0);
        textSize(20);
        textWrap(WORD);
        text("Last Name:"+userLastName, 368, 510, 300)
    }

    break;

    case 3:

    if(bitcoin != null){
        fill(0);
        textSize(20);
        textWrap(WORD);
        text("EUR Price: " + bitcoin, 368, 570, 300)
    }

    break;

    case 5:
        if(dogImage != null){
            imageMode(CENTER);
            image(dogImage,368,570,553,625);
        }
}
   fill(0,255,255);



  
    // rectMode(CENTER);
    
    // fill(255,255,0);
    // rect(1160,678,351,92);
    //     fill(0);
    //     textSize(20);
    //     textWrap(WORD);
    //     text("CAT FACT", 1160,678, 300)
    
    // fill(255,0,0);
    // rect(1547,678,351,92);
    
    //     fill(255);
    //     textSize(20);
    //     textAlign(CENTER);
    //     textWrap(WORD);
    //     text("USER CITY",1547,678, 300)

    // fill(255,0,255);
    // rect(1160,788,351,92);
    // fill(0);
    // textSize(20);
    // textWrap(WORD);
    // text("BITCOIN PRICE EUR", 1160,788, 300)

    // fill(0,255,255);
    // rect(1547,788,351,92);

    // fill(0);
    // textSize(20);
    // textWrap(WORD);
    // text("DOG PICTURE", 1547,788, 300)

    newCursor();

}

function mouseClicked(){

}

// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
// }

function mousePressed() {
   
        if (dist(mouseX, mouseY, 1160,678) < 100) {
            screenInfo = 1;
            fetch(URL)
            .then(response => response.json())
            .then(data => {catFact=data
                                      
            } )
        }
       
            if (dist(mouseX, mouseY, 1547,678) < 100) {
                screenInfo = 2;
                fetch(URL2)
                .then(response2 => response2.json())
               
                .then(response2II => {
                    let array = response2II.results;
                    return array;
                })
                .then(response2III=>{
                    
        
                    userCity= response2III[0].location.city;
                    userName= response2III[0].name.first;
                    userLasrName= response2III[0].name.last;
                })

                fetch(URL2)
    .then(response2 => response2.json())
    
        .then(response2II => {
            let array = response2II.results;
            return array;
        })
        .then(response2III=>{
            userCity= response2III[0].location.city;
        })

            }
          

                if (dist(mouseX, mouseY, 1160,788) < 100) {
                    screenInfo = 3;

                    fetch(URL3)
                    .then(response3 => response3.json())
                       .then(data => {bitcoin=data
                                       bitcoin= bitcoin.bpi.EUR.rate               
                       } )

                    
                }
                

         
                if (dist(mouseX, mouseY, 1547,788) < 100) {
                    screenInfo = 5;
                    fetch(URL5)
                    .then(response=>response.json()
                    .then(data=>{
                        dogImage= loadImage(data.message);
                        console.log(dogImage)
                    }))
               
        
        
    
    }

    console.log("x",mouseX, "y",mouseY)
}

function newCursor() {
    noStroke();
    fill(255);
    ellipse(pmouseX, pmouseY, 10, 10);
}