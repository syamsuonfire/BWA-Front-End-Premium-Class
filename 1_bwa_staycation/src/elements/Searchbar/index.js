import propTypes from "prop-types";

import iconSearch from "assets/images/icons/icon-search.svg";

import "./index.scss";

export default function Search(props) {
  const { name, value, type, placeholder, outerClassName, inputClassName } =
    props;

  const onChange = (event) => {
    const target = {
      target: {
        name: name,
        value: event.target.value,
      },
    };
    props.onChange(target);
  };

  return (
    <div className={["search-bar mb-3", outerClassName].join(" ")}>
      <div className="input-group">
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            <img src={iconSearch} alt="icon-search" />
          </label>
        </div>
        <input
          name={name}
          type={type}
          className={["form-control", inputClassName].join(" ")}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        ></input>
      </div>
    </div>
  );
}

Search.defaultProps = {
  type: "text",
  placeholder: "Search your place ...",
};

Search.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  onChange: propTypes.func.isRequired,
  type: propTypes.string,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  inputClassName: propTypes.string,
};
