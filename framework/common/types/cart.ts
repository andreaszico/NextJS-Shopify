interface Discount{
  value: number
}

export interface Cart{
  id: string
  createdAt: string
  currency: { code: string }
  taxesIncluded: boolean
  lineItemsSubtotalPrice: number
  totalPrice: number
  lineItems: any[]
  discounts: Discount[]
}