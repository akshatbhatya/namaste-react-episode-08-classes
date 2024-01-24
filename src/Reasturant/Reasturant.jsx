import { useParams } from 'react-router'
import ShemerPage from '../ShemmerPage/ShemmerPage'
import useResturantmenu from '../CustomHooks/UseResturantmenu'

function Reasturant() {
  const { resId } = useParams()

  let product = useResturantmenu(resId)

  let { name, locality, cuisines } = product[0]?.card?.card?.info || {}

  if (product.length == 0) {
    return <ShemerPage />
  }

  return (
    <div>
      <h2>{name}</h2>
      <h2>{locality}</h2>
      <h3>{cuisines}</h3>
    </div>
  )
}

export default Reasturant
