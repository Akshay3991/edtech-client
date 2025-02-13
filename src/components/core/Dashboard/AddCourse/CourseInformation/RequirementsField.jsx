import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function RequirementsField({
  name,
  label,
  register,
  setValue,
  errors,
  getValues,
}) {
  const { editCourse, course } = useSelector((state) => state.course);
  const [requirement, setRequirement] = useState("");
  const [requirementsList, setRequirementsList] = useState([]);

  useEffect(() => {
    if (editCourse) {
      setRequirementsList(course?.instructions || []);
    }
    register(name, { required: true, validate: (value) => value.length > 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setValue(name, requirementsList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requirementsList]);

  const handleAddRequirement = () => {
    if (requirement) {
      setRequirementsList([...requirementsList, requirement]);
      setRequirement("");
    }
  };

  const handleRemoveRequirement = (index) => {
    const updatedRequirements = [...requirementsList];
    updatedRequirements.splice(index, 1);
    setRequirementsList(updatedRequirements);
  };

  return (
    <div className="flex flex-col space-y-3 p-4 bg-whitesmoke rounded-lg shadow-md">
      <label className="text-sm text-gray-700 font-semibold" htmlFor={name}>
        {label} <sup className="text-red-500">*</sup>
      </label>
      <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3">
        <input
          type="text"
          id={name}
          value={requirement}
          onChange={(e) => setRequirement(e.target.value)}
          className="p-3 w-full rounded-lg shadow-sm bg-white"
          placeholder="Enter requirement"
        />
        <button
          type="button"
          onClick={handleAddRequirement}
          className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition"
        >
          Add
        </button>
      </div>
      {requirementsList.length > 0 && (
        <ul className="mt-2 space-y-2">
          {requirementsList.map((requirement, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-white p-3 rounded-lg shadow-md"
            >
              <span className="text-gray-800">{requirement}</span>
              <button
                type="button"
                className="text-xs text-red-500 hover:text-red-700"
                onClick={() => handleRemoveRequirement(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      {errors[name] && (
        <span className="text-xs text-red-500">{label} is required</span>
      )}
    </div>
  );
}
