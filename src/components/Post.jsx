import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/pedrokarnoski.png" />

          <div className={styles.authorInfo}>
            <strong>Pedro Karnoski</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="4 de novembro às 18:46" dateTime="2023-11-04 18:46:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto </a>
          <a href=""> #nlw </a>
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>

        <div className={styles.commentList}>
          <Comment />
          <Comment />
          <Comment />
        </div>
      </form>
    </article>
  );
}
