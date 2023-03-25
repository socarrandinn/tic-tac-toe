import { useCallback, useState } from "react"
import { IPlay } from "../constant/play.interface"
import { URL_API } from "../utils/api"


export const useApiPlay = () => {
  const [isLoading, setIsloading] = useState(true)

  const postPlay = useCallback(async (play: IPlay) => {
    setIsloading(true)

    const response = await fetch(`${URL_API}/tic-tac-toe/play`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(play)
    })
    const data = await response.json()
    if (data?.winner === null) {
      setIsloading(false)
    }
    return data
  },
    []
  )


  return {
    postPlay,
    isLoading
  }
}