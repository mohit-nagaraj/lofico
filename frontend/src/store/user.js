import { createSlice } from '@reduxjs/toolkit'

const user = createSlice({
  name: 'user',
  initialState: {
    theme: 'dark',
    token: '',
    currentScenery: 0,
    pagesOpen: {
      timer: {
        display: false,
        position: {
          x: 100,
          y: 100,
        }
      },
      notes: {
        display: false,
        position: {
          x: 400,
          y: 100,
        }
      },
      chat: {
        display: false,
        position: {
          x: 400,
          y: 400,
        }
      },
      calendar: {
        display: false,
        position: {
          x: 800,
          y: 100,
        }
      },
      scenery: {
        display: false,
        position: {
          x: 1150,
          y: 80,
        }
      },
    },
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload
    },
    setToken: (state, action) => {
      state.token = action.payload
    },
    setPagesOpen: (state, action) => {
      state.pagesOpen[action.payload.page] = action.payload.value
    },
    setScenery: (state, action) => {
      state.currentScenery = action.payload
    },
    setInitialData: () => {
      return {
        theme: 'dark',
        token: '',
        currentScenery: 0,
        pagesOpen: {
          timer: {
            display: true,
            position: {
              x: 100,
              y: 100,
            }
          },
          notes: {
            display: true,
            position: {
              x: 400,
              y: 100,
            }
          },
          chat: {
            display: true,
            position: {
              x: 400,
              y: 400,
            }
          },
          calendar: {
            display: true,
            position: {
              x: 800,
              y: 100,
            }
          },
          scenery: {
            display: true,
            position: {
              x: 1150,
              y: 80,
            }
          },
        },
      }
    }
  },
})

export const { setTheme, setToken, setPagesOpen, setScenery, setInitialData } = user.actions

export default user.reducer