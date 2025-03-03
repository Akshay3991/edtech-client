import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { useSelector } from "react-redux";

export default function ChipInput({
  label,
  name,
  placeholder,
  register,
  errors,
  setValue,
  getValues,
}) {
  const { editCourse, course } = useSelector((state) => state.course);
  const [chips, setChips] = useState([]);

  useEffect(() => {
    if (editCourse) {
      setChips(course?.tag || []);
    }
    register(name, { required: true, validate: (value) => value.length > 0 });
  }, []);

  useEffect(() => {
    setValue(name, chips);
  }, [chips]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      const chipValue = event.target.value.trim();
      if (chipValue && !chips.includes(chipValue)) {
        setChips([...chips, chipValue]);
        event.target.value = "";
      }
    }
  };

  const handleDeleteChip = (chipIndex) => {
    setChips(chips.filter((_, index) => index !== chipIndex));
  };

  return (
    <div className="flex flex-col space-y-2 w-full">
      {/* Label */}
      <label className="text-sm text-gray-700" htmlFor={name}>
        {label} <sup className="text-[red]">*</sup>
      </label>

      {/* Chip Container */}
      <div className="flex flex-wrap gap-2 bg-whitesmoke p-3 rounded-lg shadow-md">
        {chips.map((chip, index) => (
          <div
            key={index}
            className="flex items-center bg-yellow-500 text-black text-sm rounded-full px-3 py-1 shadow-md"
          >
            {chip}
            <button
              type="button"
              className="ml-2 text-gray-700 hover:text-black"
              onClick={() => handleDeleteChip(index)}
            >
              <MdClose className="text-base" />
            </button>
          </div>
        ))}

        {/* Input Field */}
        <input
          id={name}
          name={name}
          type="text"
          placeholder={placeholder}
          onKeyDown={handleKeyDown}
          className="w-full bg-transparent text-gray-800 outline-none placeholder-gray-500"
        />
      </div>

      {/* Error Message */}
      {errors[name] && (
        <span className="text-xs text-[red]">{label} is required</span>
      )}
    </div>
  );
}
