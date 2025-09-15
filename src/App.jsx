import './App.css'
import AppRoutes from './Hooks/useRoutes'
import { SnackbarProvider } from 'notistack'

function App() {

  return (
    <>
      <SnackbarProvider/>
      <AppRoutes/>
    </>
  )
}

export default App
