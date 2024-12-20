

// What is event? 

/*
option -1-- direct use html element - we don't use 
<button onclick="console.log('|I am going to mosqe');">Click me</button>
*/ 



// option -2  add onclick function on the html (****** আমরা সব থেকে বেশি ব্যবহার করবো )
function getMake(){
    document.body.style.backgroundColor = 'red'
}

// option -3: যেটা html এর মধ্যে document.getElementById মাধ্যমে  ব্যবহার করা যায় 
const makeBlueButton = document.getElementById('make-blue')
       makeBlueButton.onclick = makeBlue // () এই খানে কল করা যাবে না ।

       function makeBlue(){
        document.body.style.backgroundColor= 'blue'
       }


// option -3 anothr [we will use sometime ]
const purpulColor = document.getElementById('make-purple')
         purpulColor.onclick= function makePurple (){ // আমরা কে আলাদা না দিয়ে সরাসরি ব্যবহার করবো
          document.body.style.backgroundColor='purple'
       } 

       // option-4 

       const pinkButton = document.getElementById('make-pink')
       pinkButton.addEventListener('click', makePink) 

       function makePink(){
           document.body.style.backgroundColor='pink'
       }

       // option- 4 another 
       const greenButton = document.getElementById('make-green')
      greenButton.addEventListener('click', function makeGreen (){// 
        document.body.style.backgroundColor = 'green'
      })

      // Final option-- we will use all time 
      document.getElementById("make-orange").addEventListener('click', function(){
        document.body.style.backgroundColor = 'orange'
     })