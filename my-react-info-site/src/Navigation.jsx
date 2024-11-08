import logo from './assets/react logo.png';

function Navigation(){
    
   return(
       <nav>
       <img src={logo} alt="React logo" width = "150px" className="logo-img"/>
        <h1 className="nav-react-facts-title" >ReactFacts</h1>
        <h2 className="nav-fundamentals-title">Fundamentals</h2>
       </nav>
   )
}

export default  Navigation