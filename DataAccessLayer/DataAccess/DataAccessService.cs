using Microsoft.Extensions.DependencyInjection;

namespace DataAccessLayer.DataAccess
{
    public static class DataAccessService
    {
        public static IServiceCollection AddDataAccessServices(this IServiceCollection services)
        {
            services.AddScoped<DataContext, DataContext>();
            return services;
        }
    }
}
