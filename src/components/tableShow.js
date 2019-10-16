import React from 'react'
import '../bootstrap.css'

export default class TableShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            months: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
    }

    componentDidMount() {
        const xhr = new XMLHttpRequest()
        const _this = this
        xhr.open('GET', 'https://cors-anywhere.herokuapp.com/https://totalcloud-static.s3.amazonaws.com/intern.json')
        xhr.send()
        xhr.onload = function () {
            const data = JSON.parse(xhr.responseText)
            _this.setState({ users: data })
        }
    }
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th style={{ width: '10%' }}>intern-assignment</th>
                            <th style={{ width: '70%' }}></th>
                            <th style={{ width: '10%' }}>Start date</th>
                            <th style={{ width: '10%' }}>End date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(user => (<tr key={user.id}>
                            <td>{user.id}</td>
                            <td><input type="checkbox" />    {user.name}</td>
                            <td>{`${user.start.slice(0, 2)}/${this.state.months[Number(user.start.slice(3, 5)) - 1]}`}</td>
                            <td>{`${user.end.slice(0, 2)}/${this.state.months[Number(user.end.slice(3, 5)) - 1]}`}</td>
                        </tr>))}

                    </tbody>
                </table>
            </div>
        )
    }
}