import logo from './assets/react logo.png';

function Header(){
    
   return(
       <nav>
       <img src={logo} alt="React logo" width = "150px" className="logo-img"/>
        <h1 >ReactFacts</h1>
        <h2>Fundamentals</h2>
       </nav>

   
   )
}

export default Header