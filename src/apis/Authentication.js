import { DOMAIN } from "./config";

export const registerApi = async(bodyObject) => {
  
  // POST request options
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bodyObject)
  };
   
  try {
    const response = await fetch(`${DOMAIN}/users`, requestOptions);
    if (response.ok) {
      const result = await response.json();
      return [result, '']
    }
    const errorMessage = await response.text();
    return ['', `Server side error: ${errorMessage}`]; 
  } catch (error) {
    return ['', `Server Down: ${error}`]; 
  }
}

export const LoginApi = async(bodyObject) => {
  
  // POST request options
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bodyObject)
  };
   
  try {
    const response = await fetch(`${DOMAIN}/users/signin`, requestOptions);
    if (response.ok) {
      const result = await response.json();
      return [result, '']
    }
    const errorMessage = await response.text();
    return ['', `Server side error: ${errorMessage}`]; 
  } catch (error) {
    return ['', `Server Down: ${error}`]; 
  }
}
