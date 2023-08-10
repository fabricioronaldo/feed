import {PencilLine} from "phosphor-react";

import styles from './Sidebar.module.css';
import { Avatar } from "./Avatar";

export function Sidebar(){
    
    return (
        <aside className={styles.siderbar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1568832359672-e36cf5d74f54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt="" 
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/fabricioronaldo.png" />
                <strong>Fabricio Ronaldo</strong>
                <span>Web Developer</span>
            </div>
            
            <footer>
                <a href=""><PencilLine size={20} />Editar seu perfil</a>
            </footer>
        </aside>
    );
}