import { useSelector } from 'react-redux'
import ImageUpload from './components/ImageUpload'
import Results from './components/Results'
import Loader from './components/Loader'

function App() {
  const { loading } = useSelector((state) => state.getUrineStrip)

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-amber-200 via-amber-400 to-yellow-400">
      <ImageUpload />

      <div className="w-full px-10 pt-3">
        <div className="h-52 w-full overflow-y-scroll border-2 border-dashed bg-gray-200">
          {loading ? (
            <div className="flex h-full items-center justify-center">
              <Loader />
            </div>
          ) : (
            <Results />
          )}
        </div>
      </div>
    </div>
  )
}

export default App
