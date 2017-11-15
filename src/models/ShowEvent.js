import ColorClass from "./ColorClass";
import ShowEventStatus from "./ShowEventStatus";
import ShowType from "./ShowType";

export default class ShowEvent {
    constructor({id, name, date, location, judge, showType, colorClasses, status} = {}) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.location = location;
        this.judge = judge;
        this.showType = showType && ShowType.map(showTypeData => new ShowType(showTypeData));
        this.status = status && ShowEventStatus.map(showEventStatusData => new ShowEventStatus(showEventStatusData));
    }
}