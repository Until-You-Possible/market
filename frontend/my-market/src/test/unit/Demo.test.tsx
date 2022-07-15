
import TestDemo from "../../api/test";


describe("this is test module", function () {

    test("fetch data successfully", () => {
        new TestDemo().fetchData((data) => {
            expect(data).toEqual({
                success: true
            });
        });
    });


});


