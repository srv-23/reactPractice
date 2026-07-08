import './App.css'
import Card from './components/Card' 

function App() {
  let obj = {
    name: 'John Doe',
    age: 30,
  }

  let arr = ['apple', 'banana', 'orange']

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind CSS</h1>
      <Card userName="John Doe" myObj={obj} myArr={arr} />
      <Card />
    </>
    
  )
}

export default App
