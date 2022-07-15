import HeroesList from "../components/HeroesList"
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"

const DcPage = () => {
    return (
        <>
            <HeroesList  publisher = {'DC Comics'}/>
        </>
    )
}

export default DcPage