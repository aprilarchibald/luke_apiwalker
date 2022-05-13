import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"

const Info = (props) => {

    const [info, setInfo] = useState([]);
    const { search, id } = useParams();

    const navigate = useNavigate()

    const goBack = () =>{ 
        navigate(-1);
    }
    
    useEffect(() => {
        axios.get(`https://swapi.dev/api/${search}/${id}`)
            .then(response => {
                console.log(response.data);
                setInfo(response.data)
            }).catch(err => {
                console.log("XXXXXXXX")
                console.log(err);
                navigate("/error", {replace: true})
            });
    }, [search, id])

    return (
        <div>
            {/* {JSON.stringify(info)} */}
            {search ==="people" ? (
                <>
                <h1>{info.name}</h1>
                <h3>Height: {info.height}</h3>
                <h3>Mass: {info.mass}</h3>
                <h3>Hair Color: {info.hair_color}</h3>
                <h3>Skin Color: {info.skin_color}</h3>
                </>) : (
                <>
                <h1>{info.name}</h1>
                <h3>Climate: {info.climate}</h3>
                <h3>Terrain: {info.terrain}</h3>
                <h3>Surface Water: {info.surface_water}</h3>
                <h3>Population: {info.population}</h3>
                </>)}
            <button onClick = {goBack}>Go Back</button>
        </div>
    )
}
export default Info;