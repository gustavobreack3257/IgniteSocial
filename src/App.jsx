import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./Global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/gustavobreack3257.png',
      name: 'Gustavo costa souza',
      role: 'Analista desenvolvedor',
    },
    content: [
      {type: 'paragraph', content: 'Fala galera 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no curso da Rocketseat la naa trilha ignite. O nome do projeto é rocketSocial 🚀'},
      {type: 'Link', content: 'gustavoboy.dev/rocketseatsocial'},
    ],
    publishedAt: new Date('2024-04-15 10:45:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-04-15 10:45:00'),
  },
]

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
          <main>
            {posts.map(post => {
              return (
                <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
                />
              )
            })}
          </main>
      </div>
    </div>
  );
}

export default App;
