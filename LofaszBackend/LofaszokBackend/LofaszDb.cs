namespace LofaszokBackend
{
    public class LofaszDb
    {

        public static readonly List<Lofasz> Lofaszok = new[]
        {
            new Lofasz { Id = 1, Name = "Bar�ts�gos l�fasz", IsFriendly = true},
            new Lofasz { Id = 2, Name = "Bar�ts�gtalan l�fasz", IsFriendly = false},
            new Lofasz { Id = 3, Name = "Neutr�lis l�fasz", IsFriendly = false},
        }.ToList();
    }
}
