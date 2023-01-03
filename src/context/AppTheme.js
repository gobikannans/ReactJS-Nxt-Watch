import React from 'react'

const AppTheme = React.createContext({
  activeTheme: 'light',
  activeTab: '',
  savedVideos: [],
  addSavedVideos: () => {},
})

export default AppTheme
