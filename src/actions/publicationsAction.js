//get publication details

import axios from "axios"

export const getUserPublications = (name) => async (dispatch) => {
    try {
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };

        dispatch({type:"PUBLICATION_REQUEST"})
    const {data}=await axios.post("/publication/user-publications",{name},config);
    dispatch({type:"PUBLICATION_SUCCESS",payload:data.publications})

    } catch (error) {
        dispatch({type:"PUBLICATION_FAIL",payload:error.response.data.message})
    }
  }