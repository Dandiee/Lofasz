using Microsoft.AspNetCore.SignalR;

namespace LofaszokBackend.Hubs
{
    public class LofaszHub : Hub
    {
        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("LofaszChanged", user, message);
        }
    }
}
