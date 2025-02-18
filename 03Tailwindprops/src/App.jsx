import './App.css'
import Card from '../Component/Card'

function App() {
  return (
    <>
      <h1 className='bg-green-400 text-bold p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username='Prince' /> 
      <Card username='Rajkumar' btnTxt='Contact me' />
      <Card username='Kaushal' btnTxt='Follow me' />   
    </>
  )
}

export default App;
