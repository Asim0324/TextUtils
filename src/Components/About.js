import React from "react";
// import ToggleTheme from "./ToggleTheme";

export default function About(props) {
  // const { theme } = ToggleTheme();

  //   const style = {
  //     backgroundColor: white,
  //     color: black,
  //   };

  return (
    <div className={`container text-${props.theme === false ? 'light' : 'dark'}`}>
      <h1 className="centerAbout my-3">ABOUT</h1>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className={`accordion-button text-${props.theme === false ? 'light' : 'dark'}`}
              style={{backgroundColor: props.theme === false ? '#263238' : 'white'}}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className={`accordion-collapse collapse show text-${props.theme === false ? 'light' : 'dark'}`}
            style={{backgroundColor: props.theme === false ? '#1b1c27' : 'white'}}
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item ">
          <h2 className="accordion-header " id="panelsStayOpen-headingTwo">
            <button
              className={`accordion-button collapsed text-${props.theme === false ? 'light' : 'dark'}`}
              style={{backgroundColor: props.theme === false ? '#263238' : 'white'}}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className={`accordion-collapse collapse show text-${props.theme === false ? 'light' : 'dark'}`}
            style={{backgroundColor: props.theme === false ? '#1b1c27' : 'white'}}
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item ">
          <h2 className="accordion-header " id="panelsStayOpen-headingThree">
            <button
              className={`accordion-button collapsed text-${props.theme === false ? 'light' : 'dark'}`}
              style={{backgroundColor: props.theme === false ? '#263238' : 'white'}}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className={`accordion-collapse collapse show text-${props.theme === false ? 'light' : 'dark'}`}
            style={{backgroundColor: props.theme === false ? '#1b1c27' : 'white'}}
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div className="accordion-body ">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// className={theme ? "container" : "container dark"}