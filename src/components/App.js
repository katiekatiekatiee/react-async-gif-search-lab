import React from 'react'

import NavBar from './NavBar'

// the App component should render out the GifListContainer component 

const App = () => {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        < GifListContainter />
    </div>
  )
}

export default App


// https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=gJLeROaUCbCwyYUF8jbudhx6NtJhmdBK&rating=g