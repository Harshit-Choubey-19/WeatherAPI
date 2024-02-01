import SearchBox from "./SearchBox.jsx"
import InfoBox from "./InfoBox.jsx"
import { useState } from "react"

export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 12.01,
        humidity: 66,
        temp: 12.94,
        tempMax: 15.06,
        tempMin: 12.84,
        weather: "haze"
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(<div style={{textAlign: "center"}}>
        <h2>Weather App</h2>
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
    </div>)
}