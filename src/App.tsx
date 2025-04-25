import { RouterProvider } from 'react-router-dom'
import { router } from './Router'
import { WalletProvider } from './context/WalletContext'
import { Toaster } from './components/ui/sonner'

function App() {

  return (
    <WalletProvider>
      <Toaster position='top-right' />
      <RouterProvider router={router} />
    </WalletProvider>
  )
}

export default App
