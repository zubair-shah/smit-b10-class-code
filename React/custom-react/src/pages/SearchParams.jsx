import { useState, useEffect } from 'react'
import useBreedList from '../hooks/useBreedList'
import { useQuery } from "@tanstack/react-query";
import fetchSearch from '../helpers/fetchSearch';
// import Pets from './Pets'
import Results from '../components/Results'
const ANIMALS = ['', 'dog', 'cat', 'bird', 'reptile', 'rabbit']

function SearchParams() {
  // const [location, setLocation] = useState('')
  const [animal, setAnimal] = useState('')
  // const [breed, setBreed] = useState('')
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });

  // const [pets, setPets] = useState([])
  const [breeds] = useBreedList(animal)
  console.log("breeds", breeds)

  // useEffect(() => {
  //   requestPets()
  // }, [])
  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  // async function requestPets() {
  //   const response = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`)
  //   const data = await response.json();
  //   setPets(data.pets)
  //   console.log('data', data)
  // }



  // let newData = ['zubair' , "junaid" , "owais"]
  // newData.map((item , ind) => console.log(item))

  // pets.map((item , ind) => console.log(item.name))

  // console.log("location", location)
  // console.log("animal", animal)

  // console.log("pets", pets)
console.log('requestParams' ,  requestParams)
  if (breeds.status === "loading") {
    return <div> <h1>loading...</h1></div>
  }
  return (
    <div className='search-params'>
      <form onSubmit={(e) => {
        // e.preventDefault();
        // requestPets();
        e.preventDefault();
const formData = new FormData(e.target);
const obj = {
  animal: formData.get("animal") ?? "",
  breed: formData.get("breed") ?? "",
  location: formData.get("location") ?? "",
};
setRequestParams(obj);
      }}>
        <label htmlFor="location">
      <input type="text" id='location' name='location' 
      
      // value={location} 
         
            placeholder='Location'
            // onChange={(e) => setLocation(e.target.value)}

          />
        </label>

        <label htmlFor="animal">
          <select name="animal" id="animal"

            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
          >
            {
              ANIMALS.map((item, ind) => (
                <option value={item} key={ind}>{item}</option>
              ))
            }
          </select>
        </label>

        <label htmlFor="breed">
          <select name="breed" id="breed"
            // value={breed}
            // onChange={(e) => setBreed(e.target.value)}
            disabled={breeds.data.length < 1}
          >
            {
              breeds.data.map((item, ind) => (
                <option value={item} key={ind}>{item}</option>
              ))
            }
          </select>
        </label>
        <button type='submit'>submit</button>
      </form>

      <Results pets={pets} />
      {/* {
          pets.map((item , ind) => {
          return <Pets name={item.name} animal={item.animal} breed={item.breed} location={item.state} key={item.id} images={item.images} />})
         } */}

    </div>
  )
}

export default SearchParams