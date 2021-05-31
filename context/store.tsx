import { createContext, useContext, useReducer, useMemo, FC } from 'react'

export interface State {
  title: string
  description: string
}

const initialState = {
  title: 'DPCode Academy',
  description: 'This is DPCode site.',
}

type Action =
  | {
      type: 'SET_TITLE'
      title: string
    }
  | {
      type: 'SET_DESCRIPTION'
      description: string
    }

const AppContext = createContext<State | any>(initialState)

AppContext.displayName = 'AppContext'

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_TITLE': {
      return {
        ...state,
        title: action.title,
      }
    }
    case 'SET_DESCRIPTION': {
      return {
        ...state,
        description: action.description,
      }
    }
  }
}

export const AppContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setTitle = (title: string) => dispatch({ type: 'SET_TITLE', title })
  const setDescription = (description: string) =>
    dispatch({ type: 'SET_DESCRIPTION', description })

  const value = useMemo(
    () => ({
      ...state,
      setTitle,
      setDescription,
    }),
    [state]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useAppContext() {
  return useContext(AppContext)
}
