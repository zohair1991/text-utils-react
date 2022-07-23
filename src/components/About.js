import React,{useState} from 'react'


export default function About() {
    const[darkButtonText, setdarkButtonText] = useState("Enable Dark Mode");
    const[darkModeVariable, setdarkModeVariable] = useState({
        color:'black',
        backgroundColor:'white'
    })

    const toggleStyle = ()=>{
        if(darkModeVariable.color === "white"){
            setdarkModeVariable({
                color:'black',
                backgroundColor:'white'
            })
            setdarkButtonText("Enable Dark Mode");
        }

        else {
            setdarkModeVariable({
                color:'white',
                backgroundColor:'black',
                border : '1px solid white'
            })
            setdarkButtonText("Enable Light Mode");
        }
    }


  return (
    <>
    <div className="container" style={darkModeVariable}>
    <h3 className="my-3">About Us</h3>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={darkModeVariable} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        My Skills
      </button>
    </h2>
    <div id="collapseOne" style={darkModeVariable} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>I love coding !!</strong> C#, .NET WebAPI's , ReactJS & Angular are my best buddies.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={darkModeVariable} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Companies that I've worked
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={darkModeVariable}>
        <strong>Companies that I have Left.</strong> I worked in PIBAS , HBL , PRAL & now working in VeriPark
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree" style={darkModeVariable}>
      <button className="accordion-button collapsed" style={darkModeVariable} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Countries that I've visited
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" style={darkModeVariable}  aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>I love Travelling.</strong> Uptil Now, I have travelled to Pakistan , USA , Germany , Saudi Arabia & Turkey.
      </div>
    </div>
  </div>
</div>
</div>

{/* <div className="container my-3">
<button className="btn btn-primary" onClick={toggleStyle}>{darkButtonText}</button>
</div> */}
</>

  )
}
