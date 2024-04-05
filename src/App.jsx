import { Post } from "./Post";
import { Header } from "./components/Header";

import "./global.css";
function App() {
  return (
    <div>
      <Header/>

      <Post author="Gustavo costa souza" content="blablabla" />
    </div>
  );
}

export default App;
