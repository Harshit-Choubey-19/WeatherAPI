import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {
    const INIT_URL = "https://media.istockphoto.com/id/1015250340/photo/road-in-fog.webp?b=1&s=170667a&w=0&k=20&c=RQWDdi8-ZkXhW5NleM4D4gJMJWExJQGNUeKM71eBZFc=";
    const HOT_URL = "https://media.istockphoto.com/id/1226628621/photo/summer-background-orange-sky-with-clouds-and-bright-sun.webp?b=1&s=170667a&w=0&k=20&c=Zrx6fhLi6mYYJylYQsbYr09ozyNsgAYfNolc_pUgmMY=";
    const COLD_URL = "https://media.istockphoto.com/id/868098786/photo/thermometer-on-snow-shows-low-temperatures-zero-low-temperatures-in-degrees-celsius-and.webp?b=1&s=170667a&w=0&k=20&c=n21SIzH1emvYJmePa_kg8r0AcdVu2vTOk327qk4tYzE=";
    const RAIN_URL = "https://media.istockphoto.com/id/1049365996/photo/rain-fall-on-the-ground.webp?b=1&s=170667a&w=0&k=20&c=7FTx-rhM7GhxLxsIqxhyjEJ-SdGdxD4td8Bwm3RpY-g=";

    return(<div className="InfoBox">
        <div className="cardContainer">
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity > 80 ? < ThunderstormIcon /> : info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <p>Temperature = {info.temp}&deg;C</p>
         <p>Humidity = {info.humidity}</p>
         <p>Min Temperature = {info.tempMin}&deg;C</p>
         <p>Max Temperature = {info.tempMax}&deg;C</p>
         <p>The weather can be described as <i>{info.weather}</i> and feels like <b>{info.feelsLike}&deg;C</b></p>
        </Typography>
      </CardContent>
    </Card>
    </div>

    </div>)
}