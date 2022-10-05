{/*<div class="joke" id="joke">Awesome Joke is Loading...</div>*/}
{/*<button class="btn" id="jokebtn">Next Joke PLSS</button>*/}
const joke    = document.querySelector('#joke');
const jokebtn = document.querySelector('#jokebtn');

const crtjokes = async () =>{

       try
       {
            const data = await fetch('https://icanhazdadjoke.com/',{
                headers:{
                    Accept:'application/json'
                }
            });
           const res = await data.json();
           //
           if(res.joke.length < 225) joke.innerHTML = res.joke;
           else crtjokes();
           console.log(res.joke.length);
       }
       catch(error)
       {
        console.log(error);
       }

}

//For Button Click
jokebtn.addEventListener('click',crtjokes);

//For Enter Key
document.body.addEventListener("keypress",function(event){
    if(event.key == "Enter"){
        crtjokes();
    }
});

crtjokes();

let s1 = "Me: If humans lose the ability to hear high frequency volumes as they get older, can my 4 week old son hear a dog whistle? Doctor: No, humans can never hear that high of a frequency no matter what age they are. Me: Trick question... dogs can't whistle.";
console.log(s1.length);