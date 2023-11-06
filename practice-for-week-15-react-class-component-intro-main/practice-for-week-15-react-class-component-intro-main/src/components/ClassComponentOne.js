import {Component} from 'react';
import FunctionComponentTwo from './FunctionComponentTwo';


class ClassComponentOne extends Component {

    render () {
    <div className='center'>
      <h1>Class Component One</h1>
      <div className='one'>
        <button onClick={(e) => {}}>
          Decrement
        </button>
        <button onClick={(e) => {}}>
          Increment
        </button>

        <input
          type='text'
          value={undefined}
          onChange={(e) => {}}
          placeholder='Enter Your Message'
        />
        <button onClick={(e) => {}}>Clear</button>
      </div>

      <FunctionComponentTwo count={undefined} message={undefined} />
    </div>
    }
}

