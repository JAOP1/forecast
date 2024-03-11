import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Toast } from 'primereact/toast';
import ViewBar from "../../components/ViewBar";
import DropDownCities from "../../components/CitiesInputOption";
import TableTabs from "../../components/TableTabs/component";
import { Skeleton } from "primereact/skeleton";
const ForecastDashboard = () => {
    const toast = useRef(null);
    const [city, setCity] = useState(null);
    const [weatherData, setWeatherData] = useState({});
    useEffect(()=>{
        const fetchData = async() => {
            const {lat, long} = city;
            let { data } = await axios({
                baseURL:'https://api.openweathermap.org/data/2.5/forecast',
                method:'get',
                params:{
                    lat,
                    lon:long,
                    appid:import.meta.env.VITE_WEATHER_KEY,
                    units:'metric'
                },
                transformResponse: (data) => {
                    const weather_data = JSON.parse(data).list;
                    let day_weather  = Object.groupBy(weather_data, ({dt_txt}) => dt_txt.split(" ")[0]);
                    Object.keys(day_weather).forEach((key) => {
                        day_weather[key] = day_weather[key].map((record) => {
                            return {
                                hour: record.dt_txt.split(" ")[1],
                                ...record.main
                            }
                        });
                    });
                    return day_weather;
                }
            });
            setWeatherData(data);
            toast.current.show({ severity: 'info', summary: 'Info', detail: `Weather data of ${city.city_name}`, life: 3050 });
        }
        if(city){
            fetchData();
        }
    },[city]);

    return (
        <div>
            <ViewBar centerComponent={
                <DropDownCities callback={ (item) => setCity(item) }/>
            }/>
            <TableTabs
                data={weatherData}
                style={{marginTop:'1%'}}
                colFields={[
                    {field:"hour", header:"Hour"},
                    {field:"temp_min", header:"Min. Temperature"},
                    {field:"temp_max", header:"Max. Temperature"}
                ]}
            />
            <Toast ref={toast}/>
        </div>
    );
};

export default ForecastDashboard;