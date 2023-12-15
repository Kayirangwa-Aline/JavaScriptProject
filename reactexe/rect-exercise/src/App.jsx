
import Profile from './assets/Component/Component';
import leslie from "./assets/Leslie-Alexander.jpg";
import michael from "./assets/Michael-Foster.jpg";
import dries from "./assets/Dries-Vincent.jpg";
import lindsay from "./assets/Lindsay-Walton.jpg";
import courtney from "./assets/Courtney-Henry.jpg";
import tom from "./assets/Tom-cook.jpg";

function App() {
  
  return (
    <>
    <Profile image ={leslie} name ="Leslie Alexander" email ="leslie.alexander@example.com" position ="Co-Founder / CEO" seen ="Last seen 3h ago"/>
    <Profile image ={michael} name ="Michael Foster" email ="michael.foster@example.com" position ="Co-Founder / CTO" seen ="Last seen 3h ago"/>
    <Profile image ={dries} name ="Dries Vincent" email ="Dries.vincent@example.com" position ="Business Relations" seen ="Online"/>
    <Profile image ={lindsay} name ="Lindsay Walton" email ="lindsay.walton@example.com" position ="Front-end Developer" seen ="Last seen 3h ago"/>
    <Profile image ={courtney} name ="Courtney Henry" email ="courtney.henry@example.com" position ="Designer" seen ="Last seen 3h ago"/>
    <Profile image ={tom} name ="Tom Cook" email ="tom.cook@example.com" position ="Director of Product" seen ="Online"/>
     
    </>
  )
}

export default App
