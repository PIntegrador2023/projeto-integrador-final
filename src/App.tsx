
import './App.css'
import AirQuality from './components/AirQuality/AirQuality';
import PrevisaoTempo from './components/Climate/FirstCity';
import { Header } from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import { UvIndexComponent } from './components/UxIndex/UxIndex';

function App() {
  return (
    <div className="weather-app">
      <header className="header">
        <Header />
      </header>

      <div className="tempo-cidades" style={{ backgroundColor: "null" }}>
        <PrevisaoTempo />
      </div>
      <div className="footer">
        <div className="qualidade-ar">
          <AirQuality />
        </div>
        <div className="uv-index">
          <UvIndexComponent />
        </div>
      </div>

      <aside className="sidebar">
        <Sidebar />
      </aside>
    </div>
  );

  
}

export default App
