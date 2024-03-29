import react, { useEffect } from "react";
import { useState } from "react";
import Pet from "./Pet";
import useBreedList from "./useBreedList";
import Results from "./results";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

export const Search = () => {
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const [breeds] = useBreedList(animal);

    useEffect(() => {
        requestPets();
    }, []);

    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed${breed}`
        );
        const json = await res.json();

        setPets(json.pets);
    }

    return (
        <div className='search-params'>
            < form
                onSubmit={(e) => {
                    e.preventDefault();
                    requestPets();
                }}>
                <label htmlFor="location">Location
                    <input
                        onChange={(e) => setLocation(e.target.value)}
                        type="text" id='location'
                        value={location}
                        placeholder="Location">

                    </input>
                </label>

                <label htmlFor="animal">
                    Animal
                    <select name="animal"

                        id="animal"
                        value={animal}
                        onChange={(e) => (
                            setAnimal(e.target.value),
                            setBreed("")
                        )}>

                        <option value=""></option>
                        {ANIMALS.map((animal) => (
                            <option key={animal}>{animal}</option>
                        ))}
                    </select>
                </label>

                <label htmlFor="breed">
                    Breed
                    <select name="breed"
                        disabled={breeds.length === 0}
                        id="breed"
                        value={breed}
                        onChange={(e) => (
                            setBreed(e.target.value)
                        )}>

                        <option value=""></option>
                        {breeds.map((breed) => (
                            <option key={breed}>{breed}</option>
                        ))}
                    </select>
                </label>




                <button >Submit</button>


            </form >
            <Results pets={pets}></Results>
        </div >
    );
};

