import { useState } from 'react'
const ANIMALS = ['dog','cat','bird','reptile','rabbit']

function SearchParams() {
    const [location , setLocation] = useState('')
    const [animal , setAnimal] = useState('')
    const [breed , setBreed] = useState('')
    const breeds = [];
    // const location = ''
    console.log(location)
    console.log(animal)
    console.log(breed)
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
        </form>
    </div>
  )
}

export default SearchParams