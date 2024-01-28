
import Pet from './Pet'

const Results = ({ pets }) => {
    return (
        <div className='search'>
            {!pets.length ? (
                <h1>No pets Found</h1>
            ) : (
                pets.map(pet => (
                    <Pet
                        {...pet}
                        animal={pet.animal}
                        id={pet.id}
                        name={pet.name}
                        bree={pet.breen}
                        images={pet.images}
                        location={`${pet.city}, ${pet.state}`}
                        key={pet.id}
                    />
                ))
            )
            }
        </div>
    )
}

export default Results;