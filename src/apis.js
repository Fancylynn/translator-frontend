import axios from "axios";

const API_URL = "http://52.87.247.76:8000/restapi";

// const API_URL = "http://localhost:8000/restapi";

export const getAllTranslateHistory = () => {
  const historyURL = "/translate/";
  const list = axios.get(API_URL + historyURL)
                .then(response => response.data)
                .catch(error => console.log(error));
  return list;
}


export const translateText = (inputText) => {
  const translateURL = "/translate/";
  const formData = new FormData();
  formData.append('input_text', inputText);
  const result = axios.post(API_URL + translateURL, formData)
              .then(response => {
                console.log(response);
                return response.data;
              })
              .catch(error => console.log(error));
  return result;
}

export const getTargetDetail = (idx) => {
  const translateURL = "/translate/" + idx + "/";
  const result = axios.get(API_URL + translateURL)
              .then(response => response.data)
              .catch(error => console.log(error));
  return result;
}

