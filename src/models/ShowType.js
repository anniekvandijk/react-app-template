const showTypes = [
    'halsterShow',
    'fleeceShow',
    'progenyShow'
];

export default class ShowType {
    constructor({ showType, colorClasses }) {
        this.showType = showType;
        this.colorClasses = colorClasses && ColorClass.map(colorClassesData => new ColorClass(colorClassesData));
        this.genders = genders && Gender.map(genderData => new Gender(genderData));
        this.species = species && Specie.map(specieData => new Specie(specieData));
    }
}