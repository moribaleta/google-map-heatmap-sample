
getReports(true, onDataHandle)
var months_list = {
    Jan: {
        temperature: [],
        alarm_level: [],
        cause: [],
        establishment_type: []

    },
    Feb: {
        temperature: [],
        alarm_level: [],
        cause: [],
        establishment_type: []

    },
    Mar: {
        temperature: [],
        alarm_level: [],
        cause: [],
        establishment_type: []

    },
    Apr: {
        temperature: [],
        alarm_level: [],
        cause: [],
        establishment_type: []

    },
    May: {
        temperature: [],
        alarm_level: [],
        cause: [],
        establishment_type: []

    },
    Jun: {
        temperature: [],
        alarm_level: [],
        cause: [],
        establishment_type: []

    },
    Jul: {
        temperature: [],
        alarm_level: [],
        cause: [],
        establishment_type: []

    },
    Aug: {
        temperature: [],
        alarm_level: [],
        cause: [],
        establishment_type: []

    },
    Sep: {
        temperature: [],
        alarm_level: [],
        cause: [],
        establishment_type: []

    },
    Oct: {
        temperature: [],
        alarm_level: [],
        cause: [],
        establishment_type: []

    },
    Nov: {
        temperature: [],
        alarm_level: [],
        cause: [],
        establishment_type: []

    },
    Dec: {
        temperature: [],
        alarm_level: [],
        cause: [],
        establishment_type: []

    }
}
var month_data = {
    Jan: {
        temperature: [],
        alarm_level: [],
        cause: [],
        establishment_type: []

    },
    Feb: {
        temperature: [],
        alarm_level: [],
        cause: [],
        establishment_type: []

    },
    Mar: {
        temperature: [],
        alarm_level: [],
        cause: [],
        establishment_type: []

    },
    Apr: {
        temperature: [],
        alarm_level: [],
        cause: [],
        establishment_type: []

    },
    May: {
        temperature: [],
        alarm_level: [],
        cause: [],
        establishment_type: []

    },
    Jun: {
        temperature: [],
        alarm_level: [],
        cause: [],
        establishment_type: []

    },
    Jul: {
        temperature: [],
        alarm_level: [],
        cause: [],
        establishment_type: []

    },
    Aug: {
        temperature: [],
        alarm_level: [],
        cause: [],
        establishment_type: []

    },
    Sep: {
        temperature: [],
        alarm_level: [],
        cause: [],
        establishment_type: []

    },
    Oct: {
        temperature: [],
        alarm_level: [],
        cause: [],
        establishment_type: []

    },
    Nov: {
        temperature: [],
        alarm_level: [],
        cause: [],
        establishment_type: []

    },
    Dec: {
        temperature: [],
        alarm_level: [],
        cause: [],
        establishment_type: []

    }
}


function onDataHandle(data) {
    let month_keys = Object.keys(months_list)
    month_keys.map((month_key) => {
        var count = 0
        data.map((item) => {
            if (item.month == month_key) {
                months_list[month_key]['temperature'].push(item.temperature)
                months_list[month_key]['alarm_level'].push(item.alarm_level)
                months_list[month_key]['cause'].push(item.cause)
                months_list[month_key]['establishment_type'].push(item.establishment_type)
            }
        })
        //month_color.push(getRandomColor())
    })

    console.log(months_list)

    month_keys.map((month_key) => {
        var count = 0;
        var attr_keys = Object.keys(months_list[month_key])

        attr_keys.map((attr_key) => {
            var frequency = {}; 
            var max = 0; 
            var result;
            months_list[month_key][attr_key].map((item)=>{
                frequency[item] = (frequency[item] || 0)+1
                if (frequency[item] > max) {
                    max = frequency[item]
                    result = item
                }
            })
            month_data[month_key][attr_key] = result
        })

    })

    console.log(month_data)
}

function getMostCommonData_byMonth(month){
    let keys = Object.keys(month_data)
    let key = keys[month]
    return month_data[key]
}