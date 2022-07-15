import {useParams, Navigate, useNavigate} from 'react-router-dom'
import { getHeroById } from '../helpers/getHeroById';
import 'animate.css'

const HeroPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const hero = getHeroById(id)   
    if (!hero) {
        return <Navigate to="/marvel" />
    }

    const {superhero} = hero

    const onNavigateBack = () => {
        return navigate(-1)
    }
    
    return (
        <div className='row mt-5'>
            <div className='col-4'>
                <img 
                    className="img-thumbnail animate__animated animate__slideInLeft"
                    src={`/assets/heroes/${id}.jpg`}
                    alt={superhero}
                />
            </div>

            <div className='col-8'>
                <h3>{hero.superhero}</h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'><b>Alter ego: </b>{hero.alter_ego}</li>
                    <li className='list-group-item'><b>Publisher: </b>{hero.publisher}</li>
                    <li className='list-group-item'><b>First apperance: </b>{hero.first_appearance}</li>
                </ul>

                <h5 className='mt-3'>Characters</h5>
                <p>{hero.characters}</p>

                <button 
                    className='btn btn-outline-primary'
                    onClick={onNavigateBack} 
                >
                    Regresar
                </button>
            </div>
        </div>
    )
}

export default HeroPage