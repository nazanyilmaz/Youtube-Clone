class Video {
  //API dan gelecek veriler
  constructor(
    title,
    publishedAt,
    videoThumbnail,
    videoDuration,
    channelTitle,
    videoId,
    videoHeader,
  ) {
    //bizim UI tarafında ihtiyaç duyduğumuz veriler = //api den gelen veriyi istedğimiz şekilde formatlıyoruz

    //Mesela video başlığı ui gösterilemeycek karakterdeydi biz bu yapıyı ui üzerinde gösterilebcek hale getiridik
    (this.videoTitle = title.split('').slice(0, 40).join('') + '...'),
      (this.videoPublishedDate = publishedAt.split('').slice(11, 16).join('')),
      (this.videoThumbnail = `${videoThumbnail}`),
      (this.videoDuration = videoDuration),
      (this.channelTitle = channelTitle),
      (this.videoId = videoId),
      (this.videoHeader = videoHeader);
  }
}
export default Video;
