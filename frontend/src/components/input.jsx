const Input = ({ label, type, name, value, onChange }) => {
  return (
    <div className="d-flex flex-row align-items-center mb-3">
      <div className="form-outline flex-fill mb-0">
        <label className="form-label" htmlFor={name}>
          {label}
        </label>
        <input
          className="form-control"
          type={type}
          id={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Input;
