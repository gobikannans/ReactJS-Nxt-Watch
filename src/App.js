import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import AppTheme from './context/AppTheme'
import Login from './components/Login'
import Header from './components/Header'
import SideBar from './components/SideBar'

import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
class App extends Component {
  state = {activeTheme: 'light', savedVideos: []}

  changeTheme = activeTheme => {
    this.setState({activeTheme})
  }

  activeTabItem = activeTab => {
    this.setState({activeTab})
  }

  addSavedVideos = videoDetail => {
    const {savedVideos} = this.state

    const isIncluded =
      savedVideos.filter(item => item.id === videoDetail.id).length !== 0
    if (isIncluded) {
      this.setState(prevState => ({
        savedVideos: prevState.savedVideos.filter(
          eachSavedVideo => eachSavedVideo.id !== videoDetail.id,
        ),
      }))
    } else {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, videoDetail],
      }))
    }
  }

  render() {
    const {activeTheme, activeTab, savedVideos} = this.state
    return (
      <AppTheme.Provider
        value={{
          activeTheme,
          changeTheme: this.changeTheme,
          activeTab,
          activeTabItem: this.activeTabItem,
          savedVideos,
          addSavedVideos: this.addSavedVideos,
        }}
      >
        <div className="app-container">
          <Switch>
            <Route exact path="/login" component={Login} />
            <>
              <Header />
              <div className="main-container">
                <SideBar />
                <div className="content">
                  <Switch>
                    <ProtectedRoute exact path="/" component={Home} />
                    <ProtectedRoute
                      exact
                      path="/trending"
                      component={Trending}
                    />
                    <ProtectedRoute exact path="/gaming" component={Gaming} />
                    <ProtectedRoute
                      exact
                      path="/videos/:id"
                      component={VideoItemDetails}
                    />
                    <ProtectedRoute
                      exact
                      path="/saved-videos"
                      component={SavedVideos}
                    />
                    <Route path="/not-found" component={NotFound} />
                    <Redirect to="/not-found" />
                  </Switch>
                </div>
              </div>
            </>
          </Switch>
        </div>
      </AppTheme.Provider>
    )
  }
}

export default App
