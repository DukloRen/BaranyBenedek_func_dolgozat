import './style.css'
import quotes from './quotes.json'

const list = Array.from(quotes.quotes);
console.log(list);

function sortolas(){
  console.log(list.sort((a, b)=> {
    const nevA = a.author.toUpperCase();
    const nevB = b.author.toUpperCase();
    if (nevA < nevB) {
      return -1;
    } else if (nevA > nevB) {
      return 1;
    }
      return 0;
  }));
}

function test(asd){
  return ;
}

function szamolas(){
  list.map(test)
}

feladat1g.addEventListener("click", sortolas)
feladat2g.addEventListener("click", )
feladat3g.addEventListener("click", )
feladat4g.addEventListener("click", )
