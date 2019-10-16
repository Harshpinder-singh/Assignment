import React from 'react'
import { Chart } from 'react-google-charts'

export default class ShowChart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []


        }
    }

    componentDidMount() {
        const xhr = new XMLHttpRequest()
        const _this = this
        const check = ['01', '02', '03', '04', '05', '06', '07', '08', '09']
        xhr.open('GET', 'https://cors-anywhere.herokuapp.com/https://totalcloud-static.s3.amazonaws.com/intern.json')
        xhr.send()
        let arr = []
        xhr.onload = function () {
            const data = JSON.parse(xhr.responseText)
            const array = [[
                { type: 'string', id: 'Term' },
                { type: 'string', id: 'name' },
                { type: 'date', id: 'Start' },
                { type: 'date', id: 'End' },
            ]]




            data.forEach(user => {

                let startDay
                let endDay
                if (check.includes(user.end.split('/')[0])) {
                    endDay = user.end.split('/')[0][1]
                }
                else {
                    endDay = user.end.split('/')[0]
                }
                if (check.includes(user.start.split('/')[0])) {
                    startDay = user.start.split('/')[0][1]
                }
                else {
                    startDay = user.start.split('/')[0]
                }
                arr.push(startDay, endDay)
                array.push([
                    `${user.id}`,
                    user.name,
                    new Date(0, 8, Number(startDay)),
                    new Date(0, 8, Number(endDay))

                ])


            });
            console.log(arr)
            _this.setState({ users: array })
        }
    }

    render() {

        return (
            <Chart
                width={'100%'}
                height={'90vh'}
                chartType="Timeline"
                loader={<div>Loading Chart</div>}
                data={this.state.users}
                options={{
                    timeline: {
                        singleColor: '#8d8'

                    },
                    hAxis: {
                        minValue: new Date(0, 7, 31),
                        maxValue: new Date(0, 9, 1),
                        format: 'd',

                    }

                }}

                rootProps={{ 'data-testid': '6' }}
            />
        )
    }


}
