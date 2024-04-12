import styles from './Comment.module.css'

import {Avatar} from './Avatar'
import { ThumbsUp, Trash } from '@phosphor-icons/react'

export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar src='https://github.com/gustavobreack3257.png' hasBorder={false}/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gustavo costa souza</strong>
                            <time title='9 de abril ás 14h' dateTime='2024-04-09 14:00:00'>Cerca de 1 hora atrás</time>
                        </div>

                        <button>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bem monster, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}