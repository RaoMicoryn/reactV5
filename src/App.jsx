import "./styles/base.css";
import "./styles/button.css";

import HelloEffect from "./components/HelloEffect";
import CounterEffect from "./components/CounterEffect";
import TitleUpdater from "./components/TitleUpdater";
import Timer from "./components/Timer";
import ConditionalEffect from "./components/ConditionalEffect";
import FetchOnMount from "./components/FetchOnMount";
import FetchOnCategory from "./components/FetchOnCategory";

function App() {
  return (
    <div className="app">
      <h1>useEffect Practice</h1>

      <div className="grid">
        <HelloEffect />
        <CounterEffect />
        <TitleUpdater />
        <Timer />
        <ConditionalEffect />
        <FetchOnMount />
        <FetchOnCategory />
      </div>
    </div>
  );
}

export default App;