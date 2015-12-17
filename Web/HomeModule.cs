using Nancy;

namespace Web
{
    public class HomeModule : NancyModule
    {
        public HomeModule()
        {
            Get["/"] = parameters =>  View["Index"];
        }
    }
}