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
    return (
        <div>
            Hello world
            {/* nesting the header component inside the Homepage */}
            <Com1 aaa="jello"/> 
            <Com2 aaa="jello this is com2"/>
        </div>
    );
}


ReactDOM.render(<Homepage/>,app);