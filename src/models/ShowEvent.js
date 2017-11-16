export default class ShowEvent {
    constructor({id, name, date, location, judge, showType} = {}) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.location = location;
        this.judge = judge;
        this.showType = showType;
    }
}