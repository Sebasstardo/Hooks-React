
import GifComponent from '../components/GifComponent';
import LoadingGif from '../components/LoadingGif';
import useCounter from '../hooks/useCounter';
import useFecth from '../hooks/useFecth'

const MultipleCustomHook = () => {

    const { data, isLoading, hasError } = useFecth('https://api.giphy.com/v1/gifs/search?api_key=lryeOKZ21DNhHZzi3tihvAdDIPmjoZDf&q=naruto&limit=20');

    const {counter, increment} = useCounter();

    //Si la !!data NO es null y viene un arreglo te dara true
    //no false ( tiene un valor entonces toma el primer valor)
    const{title, type, url} = !!data && data[counter]

    return (
        <>
            <h1>Gifs Again Pro</h1>
            <hr />
            {
                isLoading 
                ? <LoadingGif/> 
                : <GifComponent url={url} type={type}/>                    
            }

            <button 
            onClick={()=>increment()}
            disabled={isLoading}
            className='btn btn-primary'>Next Gif</button>


        </>
    )
}

export default MultipleCustomHook