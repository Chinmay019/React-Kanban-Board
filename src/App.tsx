import './App.css';
import Board from './components/board/Board';
import Navbar from './components/navbar/Navbar';

function App () {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Board />
      </div>
    </>
  )
}

export default App
