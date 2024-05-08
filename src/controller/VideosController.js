import axios from 'axios';
import Video from '../models/VideoModel';

class VideosController {
  static async getVideos() {
    try {
      const response = await axios.get(
        'https://www.googleapis.com/youtube/v3/videos',

        {
          params: {
            key: 'AIzaSyAASabEKFGyZ9aW1CWOMaOzuilaLs8Ebjk',
            part: 'snippet',
            chart: 'mostPopular',
            maxResult: 10,
          },
        },
      );

      //console.log(response.data.items);

      const videos = await response?.data?.items?.map(
        video =>
          //verileri modeldeki sıraya göre dolduryoruz
          new Video(
            video.snippet.title,
            video.snippet.publishedAt,
            video.snippet.thumbnails.standard.url,
            '6:25',
            video.snippet.channelTitle,
            video.id,
            video.snippet.title,
          ),
      );

      return videos;
    } catch (error) {
      console.log(error);
    }
  }
}

export default VideosController;
