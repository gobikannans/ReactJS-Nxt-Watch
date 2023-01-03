import React from 'react'

const AppTheme = React.createContext({
  activeTheme: 'light',
  changeTheme: () => {},
  activeTab: '',
  activeTabItem: () => {},
  savedVideos: [],
  addSavedVideos: () => {},
})

export default AppTheme
