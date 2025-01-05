import React,{useState , useContext} from 'react'
import { useParams, useLocation , useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "../helpers/fetchPet";
import Modal from "../components/Modal";
import AdoptedPetContext from "../context/AdoptPetContext";

function Details() {
    const [showModal, setShowModal] = useState(false);
    const [, setAdoptedPet] = useContext(AdoptedPetContext);
    let { id } = useParams();
    let location = useLocation();
    const navigate = useNavigate();
    const results = useQuery(["details", id], fetchPet)
    console.log('results', results)
    console.log('location', location)

    if (results.isLoading) {
        return (
            <div className="loading-pane">
                <h2 className="loader">😝</h2>
            </div>
        );
    }
    const pet = results.data.pets[0];
    console.log('pet', pet)
    const handleClick =() => {
        setShowModal(true)
    }
    const handleSetPet  = () => {
        setAdoptedPet(pet);
        navigate("/");
    }
    return (
        <div className="details">
            <Carousel images={pet.images} />;
            {/* <Modal /> */}
            <div>
                {/* <img src={pet.images[0]} alt="pet image" /> */}
                <h1>{pet.name}</h1>
                <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
                <button onClick={handleClick}>Adopt {pet.name}</button>
                <p>{pet.description}</p>
            </div>
            {
                showModal ? (
     <Modal name={pet.name} setShowModal={setShowModal} handleSetPet={handleSetPet} >
       {/* <div>
         <h1>Would you like to adopt {pet.name}?</h1>
        <div className="buttons">
          <button>Yes</button>
          <button onClick={() => setShowModal(false)}>No</button>
        </div>
      </div> */}
    </Modal>) : null
            }
        </div>
    )
}

export default Details