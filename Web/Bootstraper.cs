using Nancy;
using Nancy.Hosting.Aspnet;

namespace Web
{
    public class Bootstraper : DefaultNancyBootstrapper
    {
        protected override IRootPathProvider RootPathProvider => new AspNetRootPathProvider();
    }
}