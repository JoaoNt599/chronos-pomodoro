import './styles/theme.css';
import './styles/global.css';

import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';



export function App() {;

  return (
    <>
      <Heading>
        React 
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a type specimen book.
      </p>
    </>
  )
}


