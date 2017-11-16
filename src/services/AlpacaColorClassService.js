import mockAlpacaColorClasses from './mocks/mockAlpacaColorClasses';
import AlpacaColorClass from '../models/AlpacaColorClass';

class AlpacaColorClassService {

    getAlpacaColorClasses() {

        return this._get('/alpacaColorClasses', forceRefresh)
            .then(checkStatusOkOrNotFound)
            .then(getJSON([]))
            .then((alpacaColorClasses) => { return mockAlpacaColorClasses })
            .then(alpacaColorClasses => alpacaColorClasses.map(b => serializeToDomain<AlpacaColorClass>(b)))
    }
}

export function serializeToDomain<T>({ ...dataFromApi }) {
    return new T({
        ...dataFromApi
    });
}

export default new AlpacaColorClassesService();
