import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Dimmer, Image, Icon, Popup, Header } from 'semantic-ui-react'
import {
  fsidSet,
  recentGo, recentBack,
  redheartGo, redheartBack,
  recentIndexSet, redheartIndexSet
} from '../../../actions/fm/types'
import { playlistGET, playLog } from '../../../actions/fm/apis'
import patternSwitch from '../../../helper/patternSwitch'
import { onReceiveFromMainProcess, rendererProcessSend } from '../../../helper/electron'

class Cover extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playing: true,
      song: {
        title: '',
        singers: [{
          avatar: ''
        }],
        artist: '',
        picture: ''
      },
      love: 'white',
      isLoginPopup: false
    }
  }

  componentDidMount() {
    onReceiveFromMainProcess('pause', this.handleAudioPlay)
    onReceiveFromMainProcess('love', this.handleLoveSong)
    onReceiveFromMainProcess('trash', this.handleTrashSong)
    onReceiveFromMainProcess('skip', this.handleSkipSong)
    onReceiveFromMainProcess('forward', this.handleSongForward)
    onReceiveFromMainProcess('backward', this.handleSongBackward)
  }

  componentWillReceiveProps(nextProps) {
    const { _id, pattern, song, recentSong, recentIndex, redheartSong, redheartIndex } = nextProps

    if (pattern === 'select' && song !== this.props.song) {
      this.setCover(song)
    }

    patternSwitch.bind(this)(
      this.props.pattern,
      pattern,
      recentSong,
      redheartSong,
      this.props.recentIndex,
      recentIndex,
      this.props.redheartIndex,
      redheartIndex,
      this.switchHelper
    )

    if (_id === 0 && this.props._id === 1) {
      this.setState({ love: 'white' }, () => { rendererProcessSend('touchBarRateColor', this.state.love) })
    }
  }

  switchHelper = (pattern, nextPattern) => {
    return (songs, index, nextIndex) => {
      if (nextIndex !== index || nextPattern !== pattern) {
        this.setCover(songs[nextIndex], nextPattern)
        this.props.setFsid(songs[nextIndex].sid)
      }
    }
  }

  /**
   * Set cover.Do following:
   * 
   * 1. set song picture
   * 2. set current state, user already liked it?
   * 
   * @param {Object} song
   * @param {string} pattern
   * @memberof Cover
   */
  setCover = (song, pattern) => {
    this.setState({
      playing: true,
      song,
      love: pattern === 'redheart' ? 'red' : (song.like === 1 ? 'red' : 'white')
    }, () => { rendererProcessSend('touchBarRateColor', this.state.love) })
  }

  handleControlShow = () => this.setState({ controlPanelActive: true })
  handleControlHide = () => this.setState({ controlPanelActive: false })

  /**
   * Play or paused current song
   * 
   * @memberof Cover
   */
  handleAudioPlay = () => {
    const audio = document.querySelector('#_audio')
    if (audio.paused) {
      audio.play()
      this.setState({ playing: true }, () => { rendererProcessSend('touchBarPauseAndStart', this.state.playing) })
    } else {
      audio.pause()
      this.setState({ playing: false }, () => { rendererProcessSend('touchBarPauseAndStart', this.state.playing) })
    }
  }

  handleSongForward = () => {
    const { pattern, fsid, recentIndex, recentSong, redheartIndex, redheartSong,
      handlePlayLog, handleRecentGo, handleRedheartGo, handleRecentIndexSet,
      handleRedheartIndexSet } = this.props

    if (pattern === 'select') {
      return
    }

    if (pattern === 'recent') {
      if (recentSong.length === 1) { return }
      handlePlayLog(fsid, 'j', 'y')
      if (recentIndex === recentSong.length - 1) {
        handleRecentIndexSet(0)
      } else {
        handleRecentGo()
      }
    }

    if (pattern === 'redheart') {
      if (redheartSong.length === 1) { return }
      handlePlayLog(fsid, 'j', 'h')
      if (redheartIndex === redheartSong.length - 1) {
        handleRedheartIndexSet(0)
      } else {
        handleRedheartGo()
      }
    }
  }

  handleSongBackward = () => {
    const { pattern, fsid, recentIndex, recentSong, redheartIndex, redheartSong,
      handlePlayLog, handleRecentBack, handleRedheartBack, handleRecentIndexSet,
      handleRedheartIndexSet } = this.props

    if (pattern === 'select') {
      return
    }

    if (pattern === 'recent') {
      if (recentSong.length === 1) { return }
      handlePlayLog(fsid, 'k', 'y')
      if (recentIndex === 0) {
        handleRecentIndexSet(recentSong.length - 1)
      } else {
        handleRecentBack()
      }
    }

    if (pattern === 'redheart') {
      if (redheartSong.length === 1) { return }
      handlePlayLog(fsid, 'k', 'h')
      if (redheartIndex === 0) {
        handleRedheartIndexSet(redheartSong.length - 1)
      } else {
        handleRedheartBack()
      }
    }
  }

  handleSkipSong = () => {
    this.props.getPlayList('skip')
  }

  handleTrashSong = () => {
    this.props.getPlayList('trash')
  }

  /**
   * Handle like current song.Must login.
   * Now apply with three patterns
   * 
   * 1. select
   * 2. recent
   * 3. redheart
   * 
   * @memberof Cover
   */
  handleLoveSong = () => {
    const { _id, pattern, getPlayList, handlePlayLog, fsid } = this.props
    if (_id === 0) {
      this.handleLoveIsLoginPopupOpen()
      return
    }
    const { love } = this.state

    if (love === 'white') {
      if (pattern === 'select') {
        getPlayList('rate')
      }
      if (pattern === 'recent') {
        handlePlayLog(fsid, 'r', 'y')
      }
      if (pattern === 'redheart') {
        handlePlayLog(fsid, 'r', 'h')
      }
      this.setState({ love: 'red' }, () => { rendererProcessSend('touchBarRateColor', this.state.love) })
    }

    if (love === 'red') {
      if (pattern === 'select') {
        getPlayList('unrate')
      }
      if (pattern === 'recent') {
        handlePlayLog(fsid, 'u', 'y')
      }
      if (pattern === 'redheart') {
        handlePlayLog(fsid, 'u', 'h')
      }
      this.setState({ love: 'white' }, () => { rendererProcessSend('touchBarRateColor', this.state.love) })
    }
  }

  handleLoveIsLoginPopupOpen = () => {
    this.setState({ isLoginPopup: true })
    this.PopupTimeout = setTimeout(() => {
      this.setState({ isLoginPopup: false })
    }, 3000)
  }

  handleLoveIsLoginPopupClose = () => {
    this.setState({ isLoginPopup: false })
    clearTimeout(this.PopupTimeout)
  }

  render() {
    const { pattern, recentSong, redheartSong } = this.props
    const { controlPanelActive, playing, love, isLoginPopup, song } = this.state
    const controlPanel = (
      <div>
        <div className='play-pause' onClick={this.handleAudioPlay}>
          <Icon name={playing ? 'pause' : 'play'} size='large' />
        </div>
        <div className='heart-trash-forward'>
          {pattern === 'select' && <div>
            <Popup
              trigger={<Icon name='heart' size='big' style={{ color: love }} onClick={this.handleLoveSong} />}
              content='想要喜欢歌曲，请先登录'
              position='bottom center'
              on='click'
              open={isLoginPopup}
              onClose={this.handleLoveIsLoginPopupClose} />
            <Icon name='trash' size='big' onClick={this.handleTrashSong} />
            <Icon name='step forward' size='big' onClick={this.handleSkipSong} />
          </div>}
          {(pattern === 'recent' || pattern === 'redheart') && <div>
            <Icon name='step backward' size='big' onClick={this.handleSongBackward}
              title={recentSong.length === 1 ? '只有一首歌曲哦～' : ''} />
            <Icon name='heart' size='big' style={{ color: love }} onClick={this.handleLoveSong} />
            <Icon name='step forward' size='big' onClick={this.handleSongForward}
              title={redheartSong.length === 1 ? '只有一首歌曲哦～' : ''} />
          </div>}
        </div>
      </div>
    )

    return (
      <div className="petal-cover">
        <div className="info">
          <div className="title">
            <Header as="h3">
              {song.title.length > 20 ? song.title.substring(0, 17) + '...' : song.title}
              <Header.Subheader>
                {song.artist}
              </Header.Subheader>
            </Header>
          </div>
          <div className="artist">
            <Image src={song.singers[0].avatar} size='mini' circular />
          </div>
        </div>
        <Dimmer.Dimmable
          className="cover"
          as={Image}
          blurring={true}
          dimmed={controlPanelActive}
          dimmer={{ active: controlPanelActive, content: controlPanel }}
          onMouseEnter={this.handleControlShow}
          onMouseLeave={this.handleControlHide}
          src={song.picture}
          rounded
        />
      </div>
    )
  }
}

Cover.propTypes = {
  pattern: PropTypes.string.isRequired,
  song: PropTypes.object.isRequired,
  recentSong: PropTypes.array,
  redheartSong: PropTypes.array,
  recentIndex: PropTypes.number.isRequired,
  redheartIndex: PropTypes.number.isRequired,
  getPlayList: PropTypes.func.isRequired,
  _id: PropTypes.number.isRequired,
  fsid: PropTypes.string.isRequired,
  setFsid: PropTypes.func.isRequired,
  handlePlayLog: PropTypes.func.isRequired,
  handleRecentGo: PropTypes.func.isRequired,
  handleRecentBack: PropTypes.func.isRequired,
  handleRedheartGo: PropTypes.func.isRequired,
  handleRedheartBack: PropTypes.func.isRequired,
  handleRecentIndexSet: PropTypes.func.isRequired,
  handleRedheartIndexSet: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    pattern: state.fmReducer.pattern,
    song: state.fmReducer.song,
    _id: state.authReducer._id,
    recentSong: state.fmReducer.recent.songs,
    redheartSong: state.fmReducer.redheart,
    recentIndex: state.fmReducer.recentIndex,
    redheartIndex: state.fmReducer.redheartIndex,
    fsid: state.fmReducer.fsid
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPlayList: (type) => dispatch(playlistGET(type)),
    setFsid: sid => dispatch(fsidSet(sid)),
    handlePlayLog: (sid, type, play_source) => dispatch(playLog(sid, type, play_source)),
    handleRecentGo: () => dispatch(recentGo),
    handleRecentBack: () => dispatch(recentBack),
    handleRedheartGo: () => dispatch(redheartGo),
    handleRedheartBack: () => dispatch(redheartBack),
    handleRecentIndexSet: index => dispatch(recentIndexSet(index)),
    handleRedheartIndexSet: index => dispatch(redheartIndexSet(index))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cover)
