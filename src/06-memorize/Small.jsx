import {memo} from 'react';

//Solo cuando la property ({value}) cambia se redibuja esta funcion
//Solo es necesario utilizarlo cuando es pesado reutilizarlo 
const Small = memo(({value}) => {
    console.log('me volvi a generar')
  return (
    <small>{value}</small>
  )
})

export default Small