import React, { useEffect, useState } from 'react'

const useFecth = (url) => {

    const [state, setState] = useState({
        data:null,
        isLoading:true,
        hasError: null
    })

    const getFetch = async () => {

        //cuando se vuelve a cargar y poner isLoading en true
        setState({
            ...state,
            isLoading:true
        })

        const respuesta = await fetch(url);
        const {data} = await respuesta.json();
        // console.log(data)
        setState({
            data,
            isLoading:false,
            hasError:null
        });
    }

    


    useEffect(() => {        
        getFetch();      
    }, [url])


    return {
        data:state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    } ;
}

export default useFecth