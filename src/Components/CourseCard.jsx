import { use, useState } from "react";

function CourseCard({ name, code, instructor }) {

    const [selected, setSelected] = useState(false);

    const [cho , setcho]= useState(false);


    const handlecho=()=>{
        setcho(true);
        console.log(instructor);

    }

    const handleSelect = () => {
        setSelected(true);
        console.log(name);
    };

    return (
        <div className="card shadow-sm p-3">

            <h5>Course Code: {code}</h5>
            <p>Instructor: {instructor}</p>

            <button
                className="btn btn-primary"
                onClick={handleSelect}
            >
                Select Course
            </button>

            {/* Show when selected */}
            {selected && (
                <div className="alert alert-success mt-3">
                    Selected Course: {name}
                </div>
            )}

            {/* Show when NOT selected */}
            {!selected && (
                <div className="alert alert-warning mt-3">
                    Please select the course to view the course name.
                </div>
            )}

            <button onClick={handlecho}>  cho</button>
             {cho && (
                <div className="alert alert-warning mt-3">
                    hellllllllllllllllllll
                    </div>
            )}
            {!cho && (
                <div className="alert alert-warning mt-3">
                    hello
                    </div>
            )}
        </div>
    );
}

export default CourseCard;