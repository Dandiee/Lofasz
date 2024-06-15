using LofaszokBackend.Hubs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace LofaszokBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LofaszController : ControllerBase
    {
        private readonly IHubContext<LofaszHub> _hub;

        private static readonly Random rnd = new();

        public LofaszController(IHubContext<LofaszHub> hub)
        {
            _hub = hub;
        }

        [HttpGet] public IEnumerable<Lofasz> GetAll()
        {
            Thread.Sleep(TimeSpan.FromMilliseconds(rnd.Next(300, 900)));
            return LofaszDb.Lofaszok;
        }


        [HttpGet("{id}")] public Lofasz GetById(int id)
            => LofaszDb.Lofaszok.Single(e => e.Id == id);

        [HttpDelete("{id}")] public async Task<int> Delete(int id, CancellationToken cancellationToken = default)
        {
            var entity = LofaszDb.Lofaszok.SingleOrDefault(e => e.Id == id);
            if (entity != null)
            {
                LofaszDb.Lofaszok.Remove(entity);
            }

            await _hub.Clients.All.SendAsync("LofaszDeleted", entity, cancellationToken);

            return id;
        }

        [HttpPut] public async Task<Lofasz> Create(Lofasz model, CancellationToken cancellationToken = default)
        {
            model.Id = rnd.Next();
            LofaszDb.Lofaszok.Add(model);

            await _hub.Clients.All.SendAsync("LofaszCreated", model, cancellationToken);

            return model;
        }

        [HttpPatch] public async Task<Lofasz> Update(Lofasz model, CancellationToken cancellationToken = default)
        {
            var entity = LofaszDb.Lofaszok.Single(e => e.Id == model.Id);
            LofaszDb.Lofaszok[LofaszDb.Lofaszok.IndexOf(entity)] = model;

            await _hub.Clients.All.SendAsync("LofaszUpdated", model, cancellationToken);

            return model;
        }

    }
}
