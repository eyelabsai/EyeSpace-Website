const app = document.getElementById('app');

// component: functions that return a UI element
// capitalize React components
function Com1 (title) {
    console.log(title); // {aaa: 'jello'}
    return (<h1>{`Title.aaa is ${title.aaa}`}</h1>);
    // `` lets you concatenate
    // same exact thing as "return (<h1>Title.aaa is {title.aaa}</h1>);"
}

function Com2 ({title}) { // object destructuring
    console.log(title); // undefined because the variable HAS to be called title, not aaa
    return (
        <h2>
            {title}
        </h2>
    );
}

function Homepage () {
    const [likes, setLikes] = React.useState(0); 
    // React.useState() returns an array, use array destructuring (left side) so that we can access the elements with a name
    // syntax:
    // const [state name, update state function] = React.useState(optional initial value);

    // on click function
    function handleClick() {
        setLikes(likes + 1);
    }

    return (
        <div>
            Hello world
            {/* nesting the header component inside the Homepage */}
            <Com1 aaa="jello"/> 
            <Com2 aaa="jello this is com2"/>
            <button onClick={handleClick}>Likes ({likes})</button>
        </div>
    );
}


ReactDOM.render(<Homepage/>,app);