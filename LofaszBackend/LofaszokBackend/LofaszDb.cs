namespace LofaszokBackend
{
    public class LofaszDb
    {

        public static readonly List<Lofasz> Lofaszok = new[]
        {
            new Lofasz { Id = 1, Name = "Barátságos lófasz", IsFriendly = true},
            new Lofasz { Id = 2, Name = "Barátságtalan lófasz", IsFriendly = false},
            new Lofasz { Id = 3, Name = "Neutrális lófasz", IsFriendly = false},
        }.ToList();
    }
}
