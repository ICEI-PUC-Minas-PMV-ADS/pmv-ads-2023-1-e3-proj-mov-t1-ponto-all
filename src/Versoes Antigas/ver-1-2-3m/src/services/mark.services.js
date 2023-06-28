import API from './webapi.services';
import {BASE_URL} from './urls';

export const getMark = async () => {
  try{
    return await API.get(`${BASE_URL}/660/Mark`).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}

export const insertMark = async (param) => {
  try{
    return await API.post(`${BASE_URL}/660/Mark`, param).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}

export const updateMark = async (param) => {
  try{
    return await API.put(`${BASE_URL}/660/Mark/${param.id}`, param).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}

export const deleteMark = async (id) => {
  try{
    return await API.delete(`${BASE_URL}/660/Mark/${id}`).then( 
      response => {
        return response.data;
      },
      error =>{
        console.log(error);
        return  null;
      }
    );
  }catch(error){
    console.log(error);
    return null;
  }
}