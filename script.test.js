const googleSerch = require("./script");

dbMock = ["dog.com", "cheesepuff.com", "disney.com", "dogpictures.com"];

it("this is a silly test", () => {
  expect("같아야").toBe("같아야");
});

it("is searching google", () => {
  expect(googleSerch("dog", dbMock)).toEqual(['dog.com',"dogpictures.com"]);
  //"testtest 키워드를 dbMock에 던지면 결과는 [] 로 예상된다"
  //를 소스로 풀어낸 것

});