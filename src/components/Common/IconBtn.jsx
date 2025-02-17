export default function IconBtn({
  text,
  onclick,
  children,
  disabled,
  outline = false,
  customClasses,
  type,
}) {
  return (
    <button
      disabled={disabled}
      onClick={onclick}
      className={`flex items-center ${outline ? "border border-[grey] shadow-sm shadow-[grey] bg-transparent" : "bg-[#1c5f27]"
        } cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold text-richblack-900 ${customClasses}`}
      type={type}
    >
      {children ? (
        <>
          <span className={`${outline && "text-black"}`}>{text}</span>
          {children}
        </>
      ) : (
        text
      )}
    </button>
  )
}
