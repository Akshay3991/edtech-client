import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { MdNavigateNext } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import {
  addCourseDetails,
  editCourseDetails,
  fetchCourseCategories,
} from "../../../../../services/operations/courseDetailsAPI.js";
import { setCourse, setStep } from "../../../../../slices/courseSlice.js";
import { COURSE_STATUS } from "../../../../../utils/constants.js";
import IconBtn from "../../../../Common/IconBtn.jsx";
import Upload from "../Upload.jsx";
import ChipInput from "./ChipInput.jsx";
import RequirementsField from "./RequirementsField.jsx";

export default function CourseInformationForm() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { course, editCourse } = useSelector((state) => state.course);
  const [loading, setLoading] = useState(false);
  const [courseCategories, setCourseCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      const categories = await fetchCourseCategories();
      if (categories.length > 0) {
        setCourseCategories(categories);
      }
      setLoading(false);
    };

    if (editCourse) {
      setValue("courseTitle", course.courseName);
      setValue("courseShortDesc", course.courseDescription);
      setValue("coursePrice", course.price);
      setValue("courseTags", course.tag);
      setValue("courseBenefits", course.whatYouWillLearn);
      setValue("courseCategory", course.category);
      setValue("courseRequirements", course.instructions);
      setValue("courseImage", course.thumbnail);
    }
    getCategories();
  }, []);

  const isFormUpdated = () => {
    const currentValues = getValues()
    // console.log("changes after editing form values:", currentValues)
    if (
      currentValues.courseTitle !== course.courseName ||
      currentValues.courseShortDesc !== course.courseDescription ||
      currentValues.coursePrice !== course.price ||
      currentValues.courseTags.toString() !== course.tag.toString() ||
      currentValues.courseBenefits !== course.whatYouWillLearn ||
      currentValues.courseCategory._id !== course.category._id ||
      currentValues.courseRequirements.toString() !==
      course.instructions.toString() ||
      currentValues.courseImage !== course.thumbnail
    ) {
      return true
    }
    return false
  }

  //   handle next button click
  const onSubmit = async (data) => {
    // console.log(data)

    if (editCourse) {
      // const currentValues = getValues()
      // console.log("changes after editing form values:", currentValues)
      // console.log("now course:", course)
      // console.log("Has Form Changed:", isFormUpdated())
      if (isFormUpdated()) {
        const currentValues = getValues()
        const formData = new FormData()
        // console.log(data)
        formData.append("courseId", course._id)
        if (currentValues.courseTitle !== course.courseName) {
          formData.append("courseName", data.courseTitle)
        }
        if (currentValues.courseShortDesc !== course.courseDescription) {
          formData.append("courseDescription", data.courseShortDesc)
        }
        if (currentValues.coursePrice !== course.price) {
          formData.append("price", data.coursePrice)
        }
        if (currentValues.courseTags.toString() !== course.tag.toString()) {
          formData.append("tag", JSON.stringify(data.courseTags))
        }
        if (currentValues.courseBenefits !== course.whatYouWillLearn) {
          formData.append("whatYouWillLearn", data.courseBenefits)
        }
        if (currentValues.courseCategory._id !== course.category._id) {
          formData.append("category", data.courseCategory)
        }
        if (
          currentValues.courseRequirements.toString() !==
          course.instructions.toString()
        ) {
          formData.append(
            "instructions",
            JSON.stringify(data.courseRequirements)
          )
        }
        if (currentValues.courseImage !== course.thumbnail) {
          formData.append("thumbnailImage", data.courseImage)
        }
        // console.log("Edit Form data: ", formData)
        setLoading(true)
        const result = await editCourseDetails(formData, token)
        setLoading(false)
        if (result) {
          dispatch(setStep(2))
          dispatch(setCourse(result))
        }
      } else {
        toast.error("No changes made to the form")
      }
      return
    }

    const formData = new FormData()
    formData.append("courseName", data.courseTitle)
    formData.append("courseDescription", data.courseShortDesc)
    formData.append("price", data.coursePrice)
    formData.append("tag", JSON.stringify(data.courseTags))
    formData.append("whatYouWillLearn", data.courseBenefits)
    formData.append("category", data.courseCategory)
    formData.append("status", COURSE_STATUS.DRAFT)
    formData.append("instructions", JSON.stringify(data.courseRequirements))
    formData.append("thumbnailImage", data.courseImage)
    setLoading(true)
    const result = await addCourseDetails(formData, token)
    if (result) {
      dispatch(setStep(2))
      dispatch(setCourse(result))
    }
    setLoading(false)
  }

  // const onSubmit = async (data) => {
  //   const formData = new FormData();
  //   formData.append("courseName", data.courseTitle);
  //   formData.append("courseDescription", data.courseShortDesc);
  //   formData.append("price", data.coursePrice);
  //   formData.append("tag", JSON.stringify(data.courseTags));
  //   formData.append("whatYouWillLearn", data.courseBenefits);
  //   formData.append("category", data.courseCategory);
  //   formData.append("status", COURSE_STATUS.DRAFT);
  //   formData.append("instructions", JSON.stringify(data.courseRequirements));
  //   formData.append("thumbnailImage", data.courseImage);

  //   setLoading(true);
  //   const result = await addCourseDetails(formData, token);
  //   if (result) {
  //     dispatch(setStep(2));
  //     dispatch(setCourse(result));
  //   }
  //   setLoading(false);
  // };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 bg-whitesmoke p-6 shadow-lg rounded-lg"
    >
      {/* Course Title */}
      <div className="flex flex-col">
        <label className="text-sm text-gray-700">Course Title <sup className="text-[red]">*</sup></label>
        <input
          placeholder="Enter Course Title"
          {...register("courseTitle", { required: true })}
          className="p-3 bg-white rounded-lg shadow-sm"
        />
        {errors.courseTitle && (
          <span className="text-xs text-[red]">Course title is required</span>
        )}
      </div>

      {/* Course Short Description */}
      <div className="flex flex-col">
        <label className="text-sm text-gray-700">Course Short Description <sup className="text-[red]">*</sup></label>
        <textarea
          placeholder="Enter Description"
          {...register("courseShortDesc", { required: true })}
          className="p-3 bg-white rounded-lg shadow-sm min-h-[130px]"
        />
        {errors.courseShortDesc && (
          <span className="text-xs text-[red]">Course Description is required</span>
        )}
      </div>

      {/* Course Price */}
      <div className="flex flex-col">
        <label className="text-sm text-gray-700">Course Price <sup className="text-[red]">*</sup></label>
        <div className="flex gap-1 items-center">
          <HiOutlineCurrencyRupee className=" text-xl text-gray-400" />
          <input
            placeholder="Enter Course Price"
            {...register("coursePrice", { required: true, valueAsNumber: true })}
            className="p-3 pl-2 bg-white rounded-lg shadow-sm w-full"
          />
        </div>
        {errors.coursePrice && (
          <span className="text-xs text-[red]">Course Price is required</span>
        )}
      </div>

      {/* Course Category */}
      <div className="flex flex-col">
        <label className="text-sm text-gray-700">Course Category <sup className="text-[red]">*</sup></label>
        <select
          {...register("courseCategory", { required: true })}
          defaultValue=""
          className="p-3 bg-white rounded-lg shadow-sm"
        >
          <option value="" disabled>Choose a Category</option>
          {!loading && courseCategories?.map((category, indx) => (
            <option key={indx} value={category?._id}>{category?.name}</option>
          ))}
        </select>
        {errors.courseCategory && (
          <span className="text-xs text-[red]">Course Category is required</span>
        )}
      </div>

      {/* Course Tags */}
      <ChipInput
        label="Tags"
        name="courseTags"
        placeholder="Enter Tags and press Enter"
        register={register}
        errors={errors}
        setValue={setValue}
        getValues={getValues}
      />

      {/* Course Thumbnail Image */}
      <Upload
        name="courseImage"
        label="Course Thumbnail"
        register={register}
        setValue={setValue}
        errors={errors}
        editData={editCourse ? course?.thumbnail : null}
      />

      {/* Benefits of the course */}
      <div className="flex flex-col">
        <label className="text-sm text-gray-700">Benefits of the course <sup className="text-[red]">*</sup></label>
        <textarea
          placeholder="Enter benefits of the course"
          {...register("courseBenefits", { required: true })}
          className="p-3 bg-white rounded-lg shadow-sm min-h-[130px]"
        />
        {errors.courseBenefits && (
          <span className="text-xs text-[red]">Benefits of the course is required</span>
        )}
      </div>

      {/* Requirements/Instructions */}
      <RequirementsField
        name="courseRequirements"
        label="Requirements/Instructions"
        register={register}
        setValue={setValue}
        errors={errors}
        getValues={getValues}
      />

      {/* Next Button */}
      <div className="flex justify-end gap-2">
        {editCourse && (
          <button
            onClick={() => dispatch(setStep(2))}
            disabled={loading}
            className="px-4 py-2 bg-gray-300 text-gray-900 rounded-lg shadow-md"
          >
            Continue Without Saving
          </button>
        )}
        <IconBtn disabled={loading} text={!editCourse ? "Next" : "Save Changes"}>
          <MdNavigateNext />
        </IconBtn>
      </div>
    </form>
  );
}
