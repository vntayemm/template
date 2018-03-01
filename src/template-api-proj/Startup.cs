using Identity.Data;
using Identity.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json.Serialization;

namespace template_api_proj
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //Add database connection
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(Configuration["ConnectionString"]));

            //Add identity
            services.AddIdentity<ApplicationUser, IdentityRole>()
                   .AddEntityFrameworkStores<ApplicationDbContext>()
                   .AddDefaultTokenProviders();

            services.AddMvc()
                .AddJsonOptions(options => options.SerializerSettings.ContractResolver = new DefaultContractResolver());

            //Enabling CORS with middleware
            services.AddCors(options => options.AddPolicy("AllowAll", p => p.AllowAnyOrigin()
                                                                    .AllowAnyMethod()
                                                                     .AllowAnyHeader()));

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            //Enabling CORS with middleware
            app.UseCors("AllowAll");
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseStaticFiles();

            app.UseMvcWithDefaultRoute();
            //app.UseMvc();
        }
    }

    public class TenantRouteConstraint : IRouteConstraint
    {
        public bool Match(HttpContext httpContext, IRouter route, string routeKey, RouteValueDictionary values, RouteDirection routeDirection)
        {
            var fullAddress = httpContext.Request.Headers["Host"].ToString().Split('.');
            if (fullAddress.Length < 2)
            {
                return false;
            }

            var tenantSubdomain = fullAddress[0];
            var tenantId = 1121; // Lookup tenant id (preferably use a cache) 

            if (!values.ContainsKey("tenant"))
            {
                values.Add("tenant", tenantId);
            }

            return true;
        }
    }
    //    routes.MapRoute(
    //            name: "Default", url: "{controller}/{action}/{id}",
    //            defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional
    //},
    //            constraints: new { TenantAccess = new TenantRouteConstraint() } 
    //);

    public class TenantActionFilter : ActionFilterAttribute, IActionFilter
    {
        //public void OnActionExecuting(ActionExecutingContext filterContext)
        //{
        //    var fullAddress = filterContext.HttpContext.Request.Headers["Host"].ToString').Split('.');
        //    if (fullAddress.Length < 2)
        //    {
        //        filterContext.Result = new (404); //or redirect filterContext.Result = new RedirectToRouteResult(..);
        //    }

        //    var tenantSubdomain = fullAddress[0];

        //    // Lookup tenant id (preferably use a cache) 
        //    var tenantId = ...filterContext.RouteData.Values.Add("tenant", tenantId);
        //    base.OnActionExecuting(filterContext);
        //}
    }
}
