import logo from './logo.svg';
import './App.css';
import Aos from 'aos';
import { Picture } from './Picture'
import StartGamePage from './Components/StartGame';
import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import SingleCard from './Components/SingelCard';
function App() {
  const [Cards, SetCards] = useState([]);
  const [turns, Setturns] = useState(0);
  const [choiceOne, SetchoiceOne] = useState(null)
  const [choiceTow, SetchoiceTow] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [StartGame, SetStartGame] = useState(false);

  useEffect(() => {
    Aos.init();
  })
  // take all the card on shuffele them
  const ShuffelCardes = () => {
    setDisabled(false)
    console.log('game start')
    SetStartGame(true)
    const shuffelCardes = [...Picture, ...Picture]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
    SetchoiceOne(null)
    SetchoiceTow(null)
    SetCards(shuffelCardes)
    Setturns(0);
  }
  const ResetShuffelCardes = () => {
    console.log('Start New game')
    setDisabled(false)
    const shuffelCardes = [...Picture, ...Picture]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
    SetchoiceOne(null)
    SetchoiceTow(null)
    SetCards(shuffelCardes)
    Setturns(0);
  }

  const TryRest = () => {
    SetStartGame(false)
    ShuffelCardes()
  }
  // check if there is first choose or seacond
  const handleChoice = (card) => {
   
    //True                   false
    choiceOne ? SetchoiceTow(card) : SetchoiceOne(card)
  }

  //compare 2 selected card 

  useEffect(() => {

    if (choiceOne && choiceTow) {
      setDisabled(true)
      if (choiceOne.pic === choiceTow.pic) {
        SetCards(prevCard => {
          return prevCard.map(card => {
            if (card.pic === choiceOne.pic) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })


        console.log('We have a match');
        resrTurn();
      } else {
        console.log('We Dont Have A Match');
        setTimeout(() => resrTurn(), 1000);
      }
    }

  }, [choiceOne, choiceTow])


  // Reset turns after not seccsess
  const resrTurn = () => {
    SetchoiceOne(null);
    SetchoiceTow(null);
    Setturns(prevTurns => prevTurns + 1);
    setDisabled(false)
  }


  return (
    <div className='Home h-screen w-auto '>
      <div className=''>


        {StartGame ? <div
          className='float-right md:px-80 sm:float-none  md:object-none object-center py-auto'
          data-aos="fade-right"
          data-aos-offset="500"
          data-aos-easing="ease-in-sine">


          <div className='text-xl mb-5 font-serif '>turns : {turns}

            <button onClick={TryRest} className='float-right hover:scale-105'>
              <span className='flex font-serif'>restart</span>
              <Icon className='float-right' icon="bx:bx-power-off" color="crimson" width="32" height="32" ></Icon>

            </button>



          </div>




          <div id='StartGame' className='grid grid-cols-5 gap-y-4 md:grid grid-cols-5 gap-y-5 md:gap-y-3 justify-items-center  text-center '>

            {Cards.map((picture) => {
              return <SingleCard

                picture={picture}
                handleChoice={handleChoice}
                flipped={picture === choiceOne || picture === choiceTow || picture.matched}
                disabled={disabled}
              />
            })}

          </div>
        </div> : <StartGamePage ShuffelCardes={ShuffelCardes} />}

      </div>
    </div>
  );
}

export default App;
