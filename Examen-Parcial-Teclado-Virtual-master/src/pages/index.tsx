import { FiDelete } from 'react-icons/fi';
import { AiOutlineEnter } from 'react-icons/ai';
import { ButtonStyle, GrayCointainer, ButtonKeySpaceStyle, DivStyleInput } from '@/styles/index.styled'
import { useState } from 'react'

const keyboardKeys = ['Q','W','E','R','T','Y','U','I','O','P','<FiDelete>','A','S','D','F','G','H','J','K',
               'L','Ñ','<AiOutlineEnter>','Z','X','C','V','B','N','M']

function Home(){
  const [input, setInput] = useState<string>('');
  function editInput(character:string){
    if(character !== '<FiDelete>' && character !== '<AiOutlineEnter>'){
      setInput(text => text + character);
    }
    if(character === '<FiDelete>'){
      setInput(texto => texto.slice(0,length-1));
    }
    if(character === '<AiOutlineEnter>'){
      setInput(texto => texto + '\n');
    }
  }

  var space = ' ';
  
  return(
    <GrayCointainer>
    <div>
      {
          keyboardKeys.map((key) => {
            return(
              <ButtonStyle  onClick = {() => {editInput(key)}}>{
                key === '<FiDelete>' ? <FiDelete/> : 
                key === '<AiOutlineEnter>' ? <AiOutlineEnter/> :
                key
              }  
              </ButtonStyle>
            )
          })
      } 
      <ButtonKeySpaceStyle onClick = {() => {editInput(space)}}></ButtonKeySpaceStyle>
      <DivStyleInput>{input}</DivStyleInput>
    </div>
    </GrayCointainer>
  )
}

export default Home;

/* condition ? exprIfTrue : exprIfFalse */