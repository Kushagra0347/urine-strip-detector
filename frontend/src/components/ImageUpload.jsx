import { useState } from 'react'
import Button from './Button'
import { useDispatch } from 'react-redux'
import { postUrineStripImage } from '../redux/actions/urineStripActions'

function ImageUpload() {
  const [file, setFile] = useState(null)

  const dispatch = useDispatch()

  const handleImageInputChange = (e) => {
    e.preventDefault()
    const element = e.target
    setFile(element.files[0])
    document.getElementById(
      'response',
    ).innerHTML = `File Selected: ${element.files[0].name}`
  }

  const handleFile = (e) => {
    e.preventDefault()

    if (file) {
      dispatch(postUrineStripImage(file))
    }
  }

  return (
    <div className="px-10 pt-14">
      <label className="flex h-60 w-full cursor-pointer appearance-none justify-center rounded-md border-2 border-dashed border-gray-300 bg-white px-4 transition hover:border-gray-400 focus:outline-none">
        <div className="flex items-center space-x-2">
          <i className="far fa-cloud-upload text-4xl"></i>
          <span
            className="text-center text-3xl font-medium text-gray-600"
            id="response"
          >
            Pick your file
          </span>
        </div>
        <input
          type="file"
          name="file"
          className="hidden"
          onChange={handleImageInputChange}
        />
      </label>

      <div className="flex items-center justify-center">
        <Button
          text={'Extract'}
          className={
            'mt-4 h-10 w-40 rounded-lg bg-neutral-600 text-center text-xl font-bold text-amber-100 transition-colors hover:bg-neutral-700 hover:bg-opacity-80'
          }
          onClick={handleFile}
        />
      </div>
    </div>
  )
}

export default ImageUpload
