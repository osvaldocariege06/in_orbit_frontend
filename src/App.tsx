import CreateGoals from './pages/create-goal'
import Summary from './pages/summary'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from './http/get-summary'


function App() {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60, // 60 seconds
  })

  return <>{data?.total && data.total > 0 ? <Summary /> : <CreateGoals />}</>
}

export default App
