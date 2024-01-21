import { useState , useEffect } from 'react'
import Pets from './Pets'
const ANIMALS = ['dog','cat','bird','reptile','rabbit']

function SearchParams() {
    const [location , setLocation] = useState('')
    const [animal , setAnimal] = useState('')
    const [breed , setBreed] = useState('')
    const [pets , setPets] = useState([])
    const breeds = [];
    // const location = ''
    console.log(location)
    console.log(animal)
    console.log(breed)

useEffect(() => {
requestPets()
} , [location , animal])

async function requestPets(){
  const response = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`)
  const data = await response.json();
  setPets(data.pets)
 console.log('data' , data)
}

// let newData = ['zubair' , "junaid" , "owais"]
// newData.map((item , ind) => console.log(item))
console.log(pets)
// pets.map((item , ind) => console.log(item.name))





  return (
    <div className='search-params'>
        <form>
            <label htmlFor="location">
            <input type="text" id='location' name='location' value={location} 
                placeholder='Location'
                onChange={(e) => setLocation(e.target.value)}
                
                />  
            </label>
          
            <label htmlFor="animal">
             <select name="animal"  id="animal" 
              value={animal}
             onChange={(e) => setAnimal(e.target.value)}
             >
                {
                  ANIMALS.map((item,ind) => (
                 <option value={item} key={ind}>{item}</option>
                  ))  
                }
             </select>
            </label>

            <label htmlFor="breed">
             <select name="breed"  id="breed" 
              value={breed}
             onChange={(e) => setBreed(e.target.value)}
             disabled={breeds.length < 1}
             >
                {
                  breeds.map((item,ind) => (
                 <option value={item} key={ind}>{item}</option>
                  ))  
                }
             </select>
            </label>
            <button>submit</button>
        </form>
         {
          pets.map((item , ind) => {
          return <Pets name={item.name} animal={item.animal} breed={item.breed} location={item.state} key={item.id} images={item.images} />})
         }
      
    </div>
  )
}

export default SearchParams