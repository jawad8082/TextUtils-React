import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Form(props) {
  const [text, settext] = useState("");
  const ToUpper = () => {
    settext(text.toUpperCase());
  };
  const ToLower = () => {
    settext(text.toLowerCase());
  };
  const EachWordCapitalize = () => {
    settext(text.replace(/(^\w|\s\w)/g, (m1) => m1.toUpperCase()));
  };
  const ClearTxt = () => {
    settext('')
  }
  const changging = (e) => {
    settext(e.target.value);
  };

  return (
    <>
      <div className="container my-3" style={props.Dark}>
        <h1 className="text-center">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={props.Dark}
            value={text}
            onChange={changging}
            id="form"
            rows="8"
          ></textarea>
        </div>
        <div className="text-center">
          <button className="btn btn-primary mb-4" onClick={ToUpper}>
            Upper Case
          </button>
          <button className="btn btn-primary mx-4  mb-4" onClick={ToLower}>
            lower Case
          </button>
          <button
            className="btn btn-primary  mb-4"
            onClick={EachWordCapitalize}
          >
            Word Capitalize
          </button>
          <button
            className="btn btn-primary mx-4 mb-4"
            onClick={ClearTxt}
          >
            Clear Text
          </button>
        </div>
      </div>
      <div className="container text-center" style={props.Dark}>
        <h1>{props.heading2}</h1>
        <p className="fs-5 fw-bold">Words: {text.split(/\s/).filter((element) => {return element.length!==0}).length}</p>
        <p className="fs-5 fw-bold">Characters: {text.length}</p>
      </div>
    </>
  );
}
Form.propTypes = {
  heading: PropTypes.string.isRequired,
  heading2: PropTypes.string.isRequired,
};

Form.defaultProps = {
  heading: "Text Converter",
  heading2: "Text Summary",
};
