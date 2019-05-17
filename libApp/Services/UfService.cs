using libApp.Enums;
using System;
using System.Collections.Generic;

namespace libApp.Services
{
    public class UfService
    {
        public List<string> getListaUFs()
        {
            return new List<string>(Enum.GetNames(typeof(UFEnum)));
        }
    }
}
