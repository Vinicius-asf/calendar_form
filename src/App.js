// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

// import Calendar from "react-calendar";
// import Card from "./components/card";
import Form from "./components/form";
// import "react-calendar/dist/Calendar.css";

function App() {
    const [value, onChange] = useState(new Date());

    return (
        <div className="container form">
            <Form/>
            {/* <div className="row">
                <div className="col">
                    <Calendar onChange={onChange} value={value} />
                </div>
                <div className="col">
                    <Card
                        info={{
                            name: "Joseph",
                            email: "joseph@gmail.com",
                            date: value.getFullYear().toString() + value.getMonth().toString() + value.getDate().toString()
                        }}
                    />
                </div>
            </div> */}
        </div>
    );
}

export default App;
