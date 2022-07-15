import { useForm } from "../../hooks/useForm"
import { useLocation, useNavigate } from "react-router-dom"
import queryString from 'query-string'
import { getHeroBySearchName } from "../helpers/getHeroBySearchName"
import HeroCard from "../components/HeroCard"





const SearchPage = () => {

    const navigate = useNavigate()
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search)
    const heroes = getHeroBySearchName(q)

    const showSearch = q.length === 0
    const showError = q.length > 0 && heroes.length === 0

    console.log(heroes);

    const { inputText, onInputChange } = useForm({
        inputText: ''
    })


    const onSubmitForm = (e) => {
        e.preventDefault();
        navigate(`?q=${inputText}`)
    }



    return (
        <div className="container m-3">
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h3>Search Form</h3>
                    <hr />
                    <form onSubmit={onSubmitForm}>
                        <input
                            className="form-control mb-3"
                            placeholder="Encuentra tu heroe"
                            name="inputText"
                            onChange={onInputChange}
                            value={inputText}
                        />
                        <button
                            className="btn btn-outline-info d-block"
                            type="submit"
                        >
                            Search
                        </button>

                    </form>
                </div>
                <div className="col-7">
                    <h3>Results</h3>
                    <hr />


                    <div className="alert alert-info" style = {{ display: showSearch ? '' : 'none' }}>
                        Encuentra tu héroe
                    </div>

                    <div className="alert alert-danger" style = {{ display: showError ? '' : 'none' }}>
                        No se encontró el héroe
                    </div>


                    {/* {
                        (q.length === 0) ? (
                            <div className="alert alert-info">
                                Encuentra tu héroe
                            </div>
                        ) : (heroes.length === 0) ? (
                            <div className="alert alert-danger">
                                No se encontro el héroe: {q}
                            </div> 

                        ) : ''
                    } */}





                    {
                        heroes.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero} />

                        ))
                    }




                </div>
            </div>
        </div>
    )
}

export default SearchPage