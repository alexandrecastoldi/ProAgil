using System.ComponentModel.DataAnnotations;

namespace ProAgil.WebAPI.Dtos
{
    public class RedeSocialDto
    {
        public int Id { get; set; }
        
        [Required]
        public string Nome { get; set; }
        
        [Required]
        public string URL { get; set; }
    }
}