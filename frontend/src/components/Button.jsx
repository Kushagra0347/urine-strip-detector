/* eslint-disable react/prop-types */

function Button({ text, type = 'button', onClick, className }) {
  return (
    <button
      type={type}
      className={`${className} flex items-center justify-center px-4 py-2`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
