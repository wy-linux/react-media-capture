export function download(url: string, downName: string) {
    const a = document.createElement("a")
    a.href = url
    a.download = downName
    document.body.appendChild(a)
    a.click()
    a.remove()
}