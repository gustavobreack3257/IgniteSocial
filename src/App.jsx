import { Post } from "./Post";
import { Header } from "./components/Header";

import styles from "./App.module.css";
import "./Global.css";
import { Sidebar } from "./components/Sidebar";
function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
          <main>
            <Post author="Gustavo costa souza" content="blablabla" />

            <Post author="Editar perfil" content="blablabla" />
          </main>
      </div>
    </div>
  );
}

export default App;
