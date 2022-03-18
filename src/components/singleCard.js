import Styles from './singleCard.module.css';
import { useCallback, useEffect } from 'react';

const SingleCard = ({cards, flipped, handleChoice, choiceOne, choiceTwo, setChoiceOne, setChoiceTwo, setTurns, turns}) => {
  const handleClick = (card)=>{
    handleChoice(card)
  }
const resetTurn = useCallback(() =>{
  setChoiceOne(null)
  setChoiceTwo(null)
  setTurns(prev=> prev + 1)
},[setChoiceOne, setChoiceTwo, setTurns])

  useEffect(() => {
    if(choiceOne && choiceTwo){
      if(choiceOne.src === choiceTwo.src){
        console.log('those cards Match')
        resetTurn()
      }else{
        console.log('those cards do not match' );
        resetTurn()
      }
    }

  }, [choiceOne, choiceTwo,resetTurn]);

  return ( 
    <div className='card' >
      {cards.map((card)=>{
          const {id, src} = card
          return (
            <div key={id} className= {flipped ? 'flipped' : ''}>
              <img src={src} className='front' alt='front' />
              <img src="/img/cover.png" onClick={handleClick} className='back' alt='back' />
            </div>
          )
        })} 
    </div>
   );
}
 
export default SingleCard;