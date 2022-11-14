import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Login from './pages/Login';

export function Rotas(){
    return(
    <Router>
     <Routes>
        <Route exact path="/" element ={<Login/>} />
     </Routes>
    </Router>    
)
}