import { heroes } from "../data/heroes"



export const getHeroBySearchName = (name = '') => {

    if(name.length < 2) return [];
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(name))
}
