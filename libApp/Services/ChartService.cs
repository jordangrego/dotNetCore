using libApp.Entities.Charts;
using System;
using System.Collections.Generic;

namespace libApp.Services
{
    public class ChartService
    {
        public IList<PieData> GetPieData()
        {
            List<PieData> lista = new List<PieData>();
            lista.Add(new PieData() { LabelData = "MORADIA", ValueData = this.RandomNumber(1, 100) });
            lista.Add(new PieData() { LabelData = "TRANSPORTE", ValueData = this.RandomNumber(1, 100) });
            lista.Add(new PieData() { LabelData = "ALIMENTACAO", ValueData = this.RandomNumber(1, 100) });
            lista.Add(new PieData() { LabelData = "EDUCACAO", ValueData = this.RandomNumber(1, 100) });
            return lista;
        }


        public IList<BarData> GetBarData()
        {
            List<BarData> lista = new List<BarData>();
            int i = 0;
            int ano = 2010;
            while(i < 5)
            {
                BarData barData = new BarData() { LabelData = (ano + i) + "", ListaValueData = this.GeraSeries() };
                lista.Add(barData);
                i++;
            }

            return lista;
        }

        public List<long> GeraSeries()
        {
            List<long> lista = new List<long>();
            int i = 0;
            while (i < 2)
            {
                lista.Add(this.RandomNumber(1, 100));
                i++;
            }

            return lista;
        }

        public int RandomNumber(int min, int max)
        {
            Random random = new Random(); return random.Next(min, max);

        }
    }
}
