namespace webapiApp.Model
{
    public class ReturnModel
    {
        public bool Success { get; set; }
        public string Obs { get; set; }
        public object Data { get; set; }

        public ReturnModel()
        {
        }

        public ReturnModel(bool success, string obs, object data)
        {
            this.Success = success;
            this.Obs = obs;
            this.Data = data;
        }
    }

}