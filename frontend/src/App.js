import './App.css';
import { SignIn } from "./componets/assets/SignIn"
// import { Demo } from "./componets/assets/Demo"
import { LandingPage } from "./componets/LandingPage"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div className="App">
      <LandingPage />
      {/* <Demo name="cars" options={ [{ value: "ewd", name: "w2w"  },{ value: "ewd", name: "w2w"  } ] } /> */}
      {/* <SignIn /> */}
    </div>
  );
}

export default App;
