import { useState } from 'react'
import './App.css'
import SingleCard from './components/singleCard'



const cardImages = [
  {"src": "/img/helmet-1.png"},
  {"src": "/img/potion-1.png"},
  {"src": "/img/ring-1.png"},
  {"src": "/img/scroll-1.png"},
  {"src": "/img/shield-1.png"},
  {"src": "/img/sword-1.png"}
]
function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  

  const shuffleCards = ()=>{
    const shuffledCards = [...cardImages,...cardImages]
      .sort(()=>{
        return Math.random() - 0.5
      }).map((card)=>{
         return {...card, id:Math.random()}
      })
    
    setCards(shuffledCards)
    setTurns(0)
  }
  
  const handleChoice = (card) =>{
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={()=> shuffleCards()}>New Game</button>
      <SingleCard cards ={cards} flipped={cards === choiceOne || choiceTwo}  handleChoice={handleChoice} choiceOne={choiceOne} choiceTwo={choiceTwo} setChoiceOne={setChoiceOne} setChoiceTwo={setChoiceTwo} turns={turns} setTurns={setTurns} />
        {/* {cards.map((card)=>{
          const {id, src} = card
          return (
            <div key={id}>
              <img src={src} className='front' alt='front' />
              <img src="/img/cover.png" className='back' alt='back' />
            </div>
          )
        })} */}
      
    </div>
  );
}

export default App