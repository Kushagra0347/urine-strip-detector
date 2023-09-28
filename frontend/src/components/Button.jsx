/* eslint-disable react/prop-types */

function Button({ text, type = 'button', onClick, className }) {
  return (
    <button
      type={type}
      className={`${className} `}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
