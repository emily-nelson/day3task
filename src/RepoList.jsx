

function RepoList(props) {
    return (
        <ul>
            <h1>All</h1>
            {props.RepoList.map((item) => (
                <li key={item}>

                </li>
            )

            )}
        </ul>
    )
}

export default RepoList

// name
// owner.login
// stargazers_count
