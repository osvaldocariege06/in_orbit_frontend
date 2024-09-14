import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorPage } from './error-page'
import CreateGoals from './pages/create-goal'
import Summary from './pages/summary'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <CreateGoals />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/summary/:summaryId',
      element: <Summary />,
      errorElement: <ErrorPage />,
    },
  ])

  return <RouterProvider router={router} />
}

export default App
