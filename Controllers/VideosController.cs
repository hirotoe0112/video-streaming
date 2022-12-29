using Microsoft.AspNetCore.Mvc;

namespace video_streaming.Controllers;

[ApiController]
[Route("[controller]")]
public class VideosController : ControllerBase
{
    private readonly ILogger<VideosController> _logger;

    public VideosController(ILogger<VideosController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IEnumerable<VideoData> Get()
    {
        var lists = new string[]{"伝説", "十月の朝", "秋のスケッチ", "夏のあらし"};
        return Enumerable.Range(0, 4).Select(index => new VideoData
        {
            FileName = lists[index]
        })
        .ToArray();
    }
}
