import { useSelector } from 'react-redux'
import { JsonView, allExpanded, defaultStyles } from 'react-json-view-lite'
import 'react-json-view-lite/dist/index.css'

function Results() {
  const { colors, error } = useSelector((state) => state.getUrineStrip)

  console.log(typeof colors)

  return error ? (
    <div className="pt-20 text-center text-2xl text-red-400">{error}</div>
  ) : colors ? (
    <JsonView
      data={colors}
      shouldExpandNode={allExpanded}
      style={defaultStyles}
    />
  ) : (
    <div className="pt-20 text-center text-2xl">
      Select an image that is a urine sample
    </div>
  )
}

export default Results
