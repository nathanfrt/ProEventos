using System;

namespace Back.src.ProEventos.API.Models
{
    public class Evento
    {
        public int EventoId { get; set; }
        public string Tema { get; set; }
        public string Local { get; set; }
        public string Lote { get; set; }
        public int QtdPessoas { get; set; }
        public DateTime DateEvento { get; set; }
        public string ImagemURL { get; set; }
    }
}
