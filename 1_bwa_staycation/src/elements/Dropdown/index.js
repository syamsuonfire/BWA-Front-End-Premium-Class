import propTypes from "prop-types";

import "./index.scss";

export default function Dropdown(props) {
  const {
    name,
    value,
    outerClassName,
    inputClassName,
    listOption,
    placeholder,
  } = props;

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
    <div className={["select-dropdown mb-3", outerClassName].join(" ")}>
      <div className="input-group">
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            Sort By :
          </label>
        </div>
        <select
          className={["custom-select", inputClassName].join(" ")}
          name={name}
          value={value}
          onChange={onChange}
        >
          {placeholder
            ? placeholder && <option value="">{placeholder}</option>
            : ""}
          {listOption
            ? listOption.map((list, index) => {
                return (
                  <option value={list.value} key={index}>
                    {list.name}
                  </option>
                );
              })
            : ""}
        </select>
      </div>
    </div>
  );
}

Dropdown.defaultProps = {
  placeholder: "Choose ...",
};

Dropdown.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  onChange: propTypes.func.isRequired,
  listOption: propTypes.array,
  outerClassName: propTypes.string,
  inputClassName: propTypes.string,
  placeholder: propTypes.string,
};
