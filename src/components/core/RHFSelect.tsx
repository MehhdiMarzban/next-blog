function RHFSelect({ label, name, register, options, required = false }) {
    return (
      <div>
        <label htmlFor={name} className="mb-2 block text-secondary-700">
          {label} {required && <span className="text-error">*</span>}
        </label>
        <select {...register(name)} id={name} className="textField__input">
          {options.map((option) => (
            <option className="bg-secondary-100" key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
  export default RHFSelect;
  