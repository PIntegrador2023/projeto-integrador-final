import "../../App.css";
import { TopBar } from "../../routes/TopBar/topbar";
import AirQuality from "../AirQuality/AirQuality";
import PrevisaoTempo from "../Climate/FirstCity";
import { Header } from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { UvIndexComponent } from "../UxIndex/UxIndex";

function HomePage() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <TopBar />
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
    </div>
  );
}

export default HomePage;
