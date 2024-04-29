import { useState } from 'react'
import AddArea from './components/AddArea'
import GifGrid from './components/GifGrid'


const GifAppExpert = () => {

  const [areas, setAreas] = useState(['Cartography', 'Social', 'Environmental'])



  const onAddArea = (newArea, fileType) => {



    // console.log(areas.includes(newArea))
    let areaRepeat = areas.find((e)=>e==newArea)

    if(!areaRepeat) { 
  
    setAreas([newArea, ...areas])
    document.getElementById('repeated-value').innerHTML = ""
  } else {  
    
    document.getElementById('repeated-value').innerHTML = "Area Repeated, type new Area"
  }

  }

// console.log(areas);
  return (
    <>

      <h1>Images CFRO</h1>
      <h1 id='repeated-value'></h1>
      
      <AddArea
        // setAreas={setAreas}
        onNewArea={(value) => onAddArea(value)}
        />
      




   

        {areas.map(area =>

         

          <GifGrid 
            key ={area}
            area={area}
        

            />
          
        )}



 
    </>

  )
}

export default GifAppExpert