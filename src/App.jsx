import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './component/Nav';
import Google_Ads from './component/Google_Ads';
import Facebook_Ads from './component/Facebook_Ads';
import Home from './component/Home';
import Footer from './component/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
       
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Google_Ads" component={Google_Ads} />
          <Route path="/Facebook_Ads" component={Facebook_Ads} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
