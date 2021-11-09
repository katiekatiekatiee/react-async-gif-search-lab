import React, { Component } from 'react'

export default class GifListContainer extends Component {

    state = {
        gifs: []
    }

    render() {
        return (
            <div>
                 <GifList gifs={this.state.gifs} />
            </div>
        )
    }

    componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=gJLeROaUCbCwyYUF8jbudhx6NtJhmdBK&rating=g&limit=3')
        .then(response => response.json())
        .then(data => {
            this.setState({
                gifs: data.map(gif => ({ url: gif.images.original.url }) )
            })
        })
    }
}
