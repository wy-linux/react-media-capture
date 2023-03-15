import {useRef} from 'react'
import {download} from '../../utils'
import { message } from "antd";
export function useDisplayMediaCapture<T extends HTMLVideoElement>() {
    const videoRef = useRef<T>(null)
    let mediaRecorder: MediaRecorder | null = null
    async function handleDisplayMediaCature() {
        let stream  = await navigator.mediaDevices.getDisplayMedia({
            video: true,
            audio: {
                echoCancellation: true,
                noiseSuppression: true,
                sampleRate: 44100
            }
        })
        /**
         const mimeType = MediaRecorder.isTypeSupported('video/webm; codecs=vp9')
                        ? "video/webm; codecs=vp9"
                        : "video/webm"
         */
        mediaRecorder = new MediaRecorder(stream, {
            mimeType: 'video/webm;codecs=h264'
        })
        const chunks: Blob[] = []
        mediaRecorder.addEventListener('dataavailable', function (e) {
            chunks.push(e.data)
        })
        mediaRecorder.addEventListener('stop', function () {
            let blob = new Blob(chunks, {
                // type: chunks[0].type
                type: 'video/mp4'
            })
            let url = URL.createObjectURL(blob)
            videoRef.current!.src = url
            videoRef.current!.controls = true
            download(url, 'video.mp4')
            mediaRecorder = null
        })
        mediaRecorder.start()
    }
    function handleStopDisplayMediaCapture() {
        if(!mediaRecorder) {
            return message.error('您尚未开始录制！')
        }
        mediaRecorder.stop()
    }    
    return {
        videoRef,
        handleDisplayMediaCature,
        handleStopDisplayMediaCapture
    }
}

export function useUserMediaCapture<T extends HTMLAudioElement>() {
    const audioRef = useRef<T>(null)
    let mediaRecorder: MediaRecorder | null = null
    async function handleUserMediaCature() {
        let stream  = await navigator.mediaDevices.getUserMedia({
            // video: true,
            audio: {
                echoCancellation: true,
                noiseSuppression: true,
                sampleRate: 44100
            }
        })
        mediaRecorder = new MediaRecorder(stream)
        const chunks: Blob[] = []
        mediaRecorder.addEventListener('dataavailable', function (e) {
            chunks.push(e.data)
        })
        mediaRecorder.addEventListener('stop', function () {
            let blob = new Blob(chunks, {
                type: chunks[0].type
            })
            //关闭音轨
            stream.getTracks().forEach((track) => track.stop())
            let url = URL.createObjectURL(blob)
            audioRef.current!.src = url
            audioRef.current!.controls = true
            download(url, 'audio.mp3')
            mediaRecorder = null
        })
        mediaRecorder.start()
    }
    function handleStopUserMediaCapture() {
        if(!mediaRecorder) {
            return message.error('您尚未开始录制！')
        }
        mediaRecorder.stop()
    }  
    return {
        audioRef,
        handleUserMediaCature,
        handleStopUserMediaCapture
    }
}