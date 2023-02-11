import React from "react";
import RepoList from "./RepoList";

window.API = {
    fetchPopularRepos(language) {
        // "language" can be "javascript", "ruby", "python", or "all"
        const encodedURI = encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)

        return fetch(encodedURI)
            .then((data) => data.json())
            .then((repos) => repos.items)
            .catch((error) => {
                console.warn(error)
                return null
            });
    }
}



class Loading extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: 'Loading'
        };
    }
    componentDidMount() {
        const stopper = this.state.text + '...';

        this.interval = window.setInterval(() => {
            this.state.text === stopper
                ? this.setState(() => ({ text: 'Loading' }))
                : this.setState((prevState) => ({ text: prevState.text + '.' }))
        }, 300)
    }
    componentWillUnmount() {
        window.clearInterval(this.interval);
    }
    render() {
        return (
            <p>
                {this.state.text}
            </p>
        )
    }
}

class Appy extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            repoList: [],

        }

    }

    componentDidMount() {
        const language = 'javascript'

        window.API.fetchPopularRepos(language)
            .then((language) => {
                this.setState({
                    loading: false,
                    repoList: language,
                },
                    
            )}, console.log(this.state.repoList)) 
    }

    // name
    // owner.login
    // stargazers_count


    render() {

        if (this.state.loading === true) {
            return <Loading />
        }

        return (
            <h1>Test!!!!</h1>
            // <RepoList />
        )
    }
}

export default Appy