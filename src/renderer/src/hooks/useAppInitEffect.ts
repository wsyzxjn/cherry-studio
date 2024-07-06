import LocalStorage from '@renderer/services/storage'
import { useAppDispatch } from '@renderer/store'
import { setAvatar } from '@renderer/store/runtime'
import { runAsyncFunction } from '@renderer/utils'
import { useEffect } from 'react'

export function useAppInitEffect() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    runAsyncFunction(async () => {
      try {
        const storedImage = await LocalStorage.getImage('avatar')
        storedImage && dispatch(setAvatar(storedImage))
      } catch (error) {
        console.error('Error retrieving the image', error)
      }
    })
  }, [dispatch])
}