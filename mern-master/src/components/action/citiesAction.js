/* const allCities = () => async (dispatch, getState) => {
    const response = await fetch("http://localhost:5000/api/city").then(resp=>resp.json());
    dispatch({ type: 'GET_CITIES', payload: response })//este es un objeto, en response esta el
};
//dispatch me permite solicitar cambios al estado
 //arreglo de ciudades
export default allCities; */
//---------------------------------------------------------------------------
import axios from 'axios';
import {GET_CITIES} from'./type';

export const getCities = () => dispach =>{
   /*  dispach(setCitiesLoading()); */
    axios.get('http://localhost:5000/api/city')
    .then(res=>
        dispach({
            type: GET_CITIES,
            payload:res.data
        })
        )
}
