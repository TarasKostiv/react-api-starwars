export default class ApiService {
    _apiBase = 'https://swapi.dev/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok) {
            // throw new Error(`Could not fetch ${url}, received ${res.status}`);
            console.error(`Could not fetch ${url}, received ${res.status}`)
        }
        return await res.json();
    }

    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results;
    }

    getPerson(id) {
        return this.getResource(`/people/${id}`);
    }

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results;
    }

    getPlanet(id) {
        return this.getResource(`/planets/${id}`);
    }

    async getAllStarships(){
        const res = await this.getResource(`/starships/`);
        return res.result;
    }

    getStarship(id){
        return this.getResource(`/starships/${id}`);
    }

    getPerson(id){
        return this.getResource(`/people/${id}`)
    }

    async getPeople() {
        const res = await this.getResource(`/people/`);
        return res.results;
    }
}


const b = new ApiService();

// b.getPeople().then((response) => {
//     // console.log(typeof response)
//     for (let key in response){
//         console.log(key, response[key])
//     }
// })

// console.log(b.getStarship(9).then((starship) => {
//     console.log(starship.name)
// }))