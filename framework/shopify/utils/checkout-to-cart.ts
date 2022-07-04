import { Checkout, Maybe } from "@framework/schema";
import { normalizedCart } from "./normalize";


const checkoutToCart = (checkout?: Maybe<Checkout>) => {
  if(!checkout){
    throw new Error("Missing checkout object!!")
  }

  return normalizedCart(checkout)
}

export default checkoutToCart