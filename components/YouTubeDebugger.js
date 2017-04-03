const React = require('react');

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }

    this.handleBit = this.handleBit.bind(this)
    this.handleRes = this.handleRes.bind(this)
  }

  handleBit() {
    this.setState({
    settings: Object.assign({}, this.state.settings, {
        bitrate: 12
    })
  })
}

handleRes() {
  this.setState({
  settings: Object.assign({}, this.state.settings, {
    video: Object.assign({}, this.state.settings.video, {
       resolution: '720p'
     })
   })
  })
}

  render() {
    return (
      <div>
      <button className='bitrate' onClick={this.handleBit}></button>
      <button className='resolution' onClick={this.handleRes}></button>
      </div>
    );
  }
}

module.exports = YouTubeDebugger
