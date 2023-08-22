import Sidebar from '../Components/Sidebar';
import MapTool from '../Components/MapTool';
import styles from './AppLayout.module.css';

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <MapTool />
    </div>
  );
}

export default AppLayout;
