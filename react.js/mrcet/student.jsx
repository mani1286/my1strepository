// prop is a read only  value passed   from parent to child component a prop 
// can be used to pass data from a parent component to child component in react
//<compenent key=value> is used top render a compnent in react

function Student(props) {
    return (
        <div>
            <center>
                <h1 style={{ color:"green", textAlign : "center"}}>Student Information</h1>
                <p  style={{ color:"red", textAlign : "center"}}>Name: {props.name}</p>
                <p  style={{ color:"orange", textAlign : "center"}}>Age: {props.age}</p>
                <p  style={{ color:"black", textAlign : "center"}}>is a student: {props.isStudent ? "Yes" : "No"}</p>
            </center>
        </div>
    );
}

export default Student;