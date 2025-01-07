import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox() {
    const INIT_URL =
        "https://images.unsplash.com/photo-1715276611617-21d4395134f1?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.0.3";

    const info = {
        city: "Delhi",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
        country: "India ",
        description: "Cloudy",
        icon: "04d",
        sunrise: "16:20",
    };

    return (
        <div className="InfoBox">
            <h1>WeatherInfo - {info.weather}</h1>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={INIT_URL}
                    title="Weather Image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}, {info.country}
                        Current Weather: {info.weather}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        <strong>Temperature:</strong> {info.temp}°C<br />
                        <strong>Feels Like:</strong> {info.feelslike}°C<br />
                        <strong>Min Temp:</strong> {info.tempMin}°C<br />
                        <strong>Max Temp:</strong> {info.tempMax}°C<br />
                        <strong>Humidity:</strong> {info.humidity}% <br />
                        <strong>Description:</strong> {info.description}<br />
                        <strong>Sunrise:</strong> {info.sunrise} <br />

                        

                        <strong>
                            <a href={`https://www.weather-forecast.com/locations/${info.city}/forecast`} target="_blank" rel="noopener noreferrer">
                                More Details
                            </a>
                        </strong>
                        <strong>Icon:</strong> <img src={`http://openweathermap.org/img/wn/${info.icon}@2x.png`} alt={info.weather} />
                        <p>
                            The weather can be described as <i>{info.weather}</i> and feels like {""}
                        </p>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    );
}
