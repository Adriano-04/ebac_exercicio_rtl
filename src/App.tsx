import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://th.bing.com/th/id/OIP.HejZ-3F06nlW8_XeMENJngHaHa?rs=1&pid=ImgDetMain">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
