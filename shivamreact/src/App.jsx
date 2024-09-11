import './App.css'
import Card from './components/Card'
function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>Hi this is tailwind text</h1>
      <Card Username = "ashwani" someObj = {[1,2,3,4,5  ]}/>
      <Card Username = "Nikhil"/>
    </>
  )
}

export default App
