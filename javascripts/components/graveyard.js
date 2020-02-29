import util from "../helpers/util.js";
import persons from '../helpers/data/personData.js'

const buildGraveyard = () => {
    const deadPersons = persons.getDeadPersons();
    let domString = '<h2 class="col-12 text-center>Graveyard</h2>'
    domString += '<div class="d=flex flex wrap">'
  

    deadPersons.forEach((deadPersons)=> {
        domString += '<div class="col-4">'
        domString += '<div class="person-card">'
        domString += `<h5 class="card-title">${deadPersons.name}</h5>`
        domString += '<a href="#" class="btn btn-primary">Resurrect </a>'
        domString += '</div>'
        domString += '</div>'
    });
    domString += '</div>'
    util.printToDom('graveyard', domString);
};

export default { buildGraveyard };