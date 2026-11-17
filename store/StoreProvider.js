import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore } from './index'

// Провайдер Redux для Pages Router (store один на клиенте)
export default function StoreProvider({ children }) {
  const storeRef = useRef(null)
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }
  return <Provider store={storeRef.current}>{children}</Provider>
}
