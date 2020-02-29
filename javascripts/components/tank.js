import util from '../helpers/util.js'
import personData from '../helpers/data/personData.js'

const tankBuilder = () => {
const persons = personData.getAlivePersons();
let domString = '';
domString += '<div class="card" style="width: 18rem;">'
domString += '<div class="card-header"> Shark Tank </div>'
domString += '<ul class="list-group list-group-flush">'

persons.forEach((person)=> {
    domString += `<li class="list-group-item">${person.name}</li>`
});


domString += `</ul>`
domString += `</div>`


util.printToDom('tank',domString);

};

export default { tankBuilder }; 