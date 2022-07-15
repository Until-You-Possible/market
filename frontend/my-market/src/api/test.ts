import axios from "axios";

class TestDemo {

    private url = "http://www.dell-lee.com/react/api/demo.json"

    public fetchData(fn: (arg0: any) => void) {
         axios.get(this.url).then(function (res) {
             fn(res.data);
         });
    }
}

export default TestDemo;