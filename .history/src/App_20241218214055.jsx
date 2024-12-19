
import './App.css'
import Banner from './Component/Banner/Banner'
import Header from './Component/Header/Header'
import Recipes from './Component/Recipes/Recipes'

function App() {


  return (
    <div className='container mx-auto'>
        <Header></Header>
        <Banner></Banner>
        <Recipes></Recipes>    
        
    </div>
  )
}

export default App
