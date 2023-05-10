import { Post } from "./Post";
import { Header } from "./components/Header";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";


export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        
        <Sidebar />
        
        <main>
          <Post
            author="Fabricio Ronaldo"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus temporibus totam et odio aliquid error, sit deleniti molestias veritatis dolore. Fuga nam sunt debitis reiciendis, quis facilis vitae ipsa accusantium."
          />
        </main>
      
      </div>


    </div>
  )
}


