import { useState, useEffect }  from "react";
import { Dropdown } from 'primereact/dropdown';
import axios from "axios";

const DropDownCities = ({ callback }) => {
    const [selectedCity, setSelectedCity] = useState(null);
    const [cities, setCities] = useState(null);
    useEffect(() =>{
        const fetchData = async() => {
            let { data } = await axios.get("https://search.reservamos.mx/api/v2/places");
            data = data.filter(({result_type}) => result_type === 'city');
            setCities(data);
        }
        fetchData();
    },[]);

    if(!cities)
        return <Dropdown loading placeholder="Cargando..."  />;
    return (
        <Dropdown
            value={selectedCity}
            onChange={(e) => {
                setSelectedCity(e.value);
                callback(e.value);
            }}
            options={cities}
            optionLabel="city_name" 
            placeholder="Selecciona ciudad." 
        />
    )
};

export default DropDownCities;