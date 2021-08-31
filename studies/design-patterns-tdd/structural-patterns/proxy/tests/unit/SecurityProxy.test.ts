import { Business } from "../../src/Business/Business";
import { SecurityBusiness } from "../../src/Business/SecurityBusiness";
import { UnauthorizedBusinessTransaction } from "../../src/Exception/UnauthorizedBusinessTransaction";
import { User } from "../../src/User/User";
import { BusinessMock } from "./mocks/Business.mock";

describe("SecurityBusiness", () => {
  it("should authorize access", () => {
    const user = new User("Peter");
    user.authorize("Business", "executeTransaction");
    const mock: BusinessMock = new BusinessMock();
    const b: Business = new SecurityBusiness(mock, user);
    b.executeTransaction();
    expect(mock.wasAccessed()).toBeTruthy();
  });

  it("should NOT authorize access", () => {
    const user = new User("Peter");
    user.authorize("Business", "executeTransaction");
    const mock: BusinessMock = new BusinessMock();
    const b: Business = new SecurityBusiness(mock, user);
    const t = () => {
      b.cancelTransaction();
    };
    expect(mock.wasAccessed()).toBeFalsy();
    expect(t).toThrow(UnauthorizedBusinessTransaction);
    expect(t).toThrow(
      "User Peter doesn't have business permission to cancel transactions."
    );
  });
});
