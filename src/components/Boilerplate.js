import React, { useState, useEffect } from 'react';
import axios from 'axios';

class BoilerplateClass extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            int: 0,
            bool: false,
            str: "",
            arr: [],                // On/off interactive elements
            obj: {},                // Any
            data: {},               // API call
            isLoading: true         
        }
        
    }

    setter(key, val) {                              // OK
        this.setState({[key]: val})
    }

    onoffer(key, val) {                             // OK
                                  
        let arr = this.state[key]

        if (!arr.includes(val)) { 
            this.setState({[key]: [...this.state[key], val]})
        }

        else {
            this.setState({
                [key]: arr.filter((i) => arr.indexOf(i) !== arr.indexOf(val))
            })
        }

    }

    defaulter(key) {                                // OK

        if (key === "all") {
            this.setState({
                int: 0,
                bool: false,
                str: "",
                arr: [],
                obj: {}
            })
        }

        else switch(typeof this.state[key]) {
            case "object": this.setState({[key]: []}); 
            break;
            case "number": this.setState({[key]: 0});
            break;
            case "boolean": this.setState({[key]: false});
            break;
            case "string": this.setState({[key]: ""});
            default: return
        }
        
   }

    caller(url) {                                   // OK

        axios
            .get(url)
            .then(res => {
                    this.setState({ data: res.data, isLoading: false });
                    console.log(this.state.data)
                })
            .catch(err => {
                    console.log('Call error: ')
                    console.log(err);
            })

    }

    poster(url, obj) {
        axios
            .post(url, obj)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log('Post error: ')
                console.log(err)
            })
    }

    render() {

        const { isLoading, int, bool, str, arr, obj, data } = this.state

        if (isLoading) {
            return (
                <div className='App'>
                    <h1>Loading...</h1>
                </div>
            )
        }

        else return (
            <div className='App'>
                <header className='App-header flex center'>
                    <h1>Welcome</h1>
                </header>
                <main className='App-content flex column center'>
                    <Stateless />
                    <Stateful />
                </main>
                <footer className='App-footer flex space'>
                    <Hook />
                </footer>
            </div>
        )

    }

    componentDidMount() {
        try {
        this.caller(`https://jsonplaceholder.typicode.com/users`)
        this.caller(`https://jsonplaceholder.typicode.com/users`)
        this.caller(`https://jsonplaceholder.typicode.com/users`)
        } catch (e) {console.log(e)}
    }

}

// Just in case

function Hook() {
    const [int, setInt] = useState(0)
    const [bool, setbool] = useState(false)
    const [str, setStr] = useState("")
    const [arr, setArr] = useState([])
    const [obj, setObj] = useState({})

    return (
        <div className='flex column space'>
            <h2>This is a hook, and its "int" state is {int}</h2>
        {/* <button onClick={() => setInt(int + 1)}>Click to add 1 to hook's "int" state</button> */}
        </div>
    )
}

const Stateless = () => {

    return (
        <div>
            <h2>This component is stateless</h2>
        </div>
    )

}

class Stateful extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    foo() {

    }

    bar() {

    }

    baz() {

    }

    render() {
        return (
            <div>
                <h2>This component is stateful</h2>
            </div>
        )
    }

}

export { BoilerplateClass }