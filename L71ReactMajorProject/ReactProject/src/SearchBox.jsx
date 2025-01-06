import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import "./SearchBox.css";

export default function SearchBox() {
    let [city, setCity] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "6571c0d302a742e23d34353d91257bb9";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            let data = await response.json();
            console.log(data);
            let result = {
                temp: data.main.temp,
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                description: data.weather[0].description,
                icon: data.weather[0].icon,
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                country: data.sys.country,
                sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
                sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),

            };
            console.log(result);
        } catch (error) {
            console.error("Failed to fetch weather data:", error);
        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        getWeatherInfo();
        setCity("");
    };

    return (
        <div className="SearchBox">
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="Enter City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br />
                <br />
                <Button variant="contained" type="submit" endIcon={<SendIcon />}>
                    Search
                </Button>
            </form>
        </div>
    );
}
