import { FacadeForCardAuthorizer } from "./credit-card-business/FacadeForCardAuthorizer";

const cardAuthorizer = new FacadeForCardAuthorizer();
cardAuthorizer.authorizeCreditCardTransaction({ executePreCapture: true });
