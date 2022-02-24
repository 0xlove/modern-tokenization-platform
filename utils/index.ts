/* eslint-disable no-console */
import {getStrapiURL, redirectToHomepage} from './api';

const getDataFromServer = async (path: string): 
  Promise<Record<string, unknown> | null> => {

  try {
    const url = getStrapiURL(path);
    
    const res = await fetch(url);
    
    if(!res.ok) {  
      console.log('fetch error from try');

      return null;
    }  
    
    const json = await res.json();    
    
    return json;
  } catch (error) {
    console.log(error);
    
    return null;
  }
};

export default getDataFromServer;
