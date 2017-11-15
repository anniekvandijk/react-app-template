export default process.env.NODE_ENV === 'production' ?
    [] :
    [{
        id: 'e0340be3-17af-44c1-baf3-f3980909ba3a',
        name: 'Test Show Event',
        date: '2016-07-27T00:00:00',
        location: 'Surhuisterveen',
        judge: 'Judge X',
        showType:
            {
            showType: 'HalsterShow',
            colorClasses: [
                {
                    color: 'white'
                },
                {
                    color: 'black'
                }
            ],
            species: [
                {
                    specie: 'huacaya'
                }
            ],
            genders: [
                {
                    gender: 'male'
                },
                {
                    gender: 'female'
                }]
            },
        status: 'new'
    }
    ]
