
import { useCallback, useState } from "react"
import TripDetails from "./pages/trip-details"
import CreateTrip from "./pages/create-trip"
function App() {

  const [changePage, setChangePage] = useState<'Create-trip' | 'Details-trip'>('Create-trip')

  const Pages = useCallback(() => {
    if(changePage === 'Details-trip') {
      return <TripDetails setChangePages={setChangePage} />
    } else {
      return <CreateTrip setChangePages={setChangePage} />
    }
  }, [changePage, setChangePage])
  

  return (
    // <CreateTrip setChangePages={setChangePage} />
    <Pages />
  )
}

export default App
