import Header from './header'
import Form from './form'
import Navbar from './navbar'
import List from './list'
import Table from './table'
import Content from './story'

function App(){
  return(
  <>
  <div>
    <Navbar />
  </div>
  <div>
    <h1>Welcome to react js </h1>
  </div>
  <div>
    <Header />
  </div>
  <div>
    <Form />
  </div>
  <div>
   <List />
  </div>
  <div>
    <Table />
  </div>
  <div><Content /></div>
  </>
  )
}   

export default App


