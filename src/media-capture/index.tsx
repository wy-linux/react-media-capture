import React from 'react'
import styles from './index.module.css'
import { useDisplayMediaCapture, useUserMediaCapture } from "./hook";
import {Button} from 'antd'
const Capture: React.FC = () => {
    const {videoRef, handleDisplayMediaCature, handleStopDisplayMediaCapture} = useDisplayMediaCapture<HTMLVideoElement>()
    const {audioRef, handleUserMediaCature, handleStopUserMediaCapture} = useUserMediaCapture<HTMLAudioElement>()
    return (
        <div className={styles['media-capture-container']}>
            <div className={styles['capture-preview']}>
                <video controls ref={videoRef} className={styles['capture-video']}></video>
                <audio controls ref={audioRef} className={styles['capture-audio']}></audio>
            </div>
            <div className={styles['capture-handle']}>
                <Button onClick={handleDisplayMediaCature} type="primary">捕获画面</Button>
                <Button onClick={handleStopDisplayMediaCapture} type="primary">停止捕获画面</Button>
                <Button style={{background: '#59db66', border: 'none'}} onClick={handleUserMediaCature} type="primary">捕获麦克风音频</Button>
                <Button style={{background: '#59db66', border: 'none'}} onClick={handleStopUserMediaCapture} type="primary">停止麦克风音频捕获</Button>
            </div>
        </div>
    )
}
export default Capture