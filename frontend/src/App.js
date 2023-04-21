import './App.css';
// import { Registration } from './componets/Registration';
// import { Demo } from "./componets/assets/Demo"
import { LandingPage } from "./LandingPage"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div className="App">
      <LandingPage />
      {/* <Demo name="cars" options={ [{ value: "ewd", name: "w2w"  },{ value: "ewd", name: "w2w"  } ] } /> */}
    </div>
  );
}

export default App;
