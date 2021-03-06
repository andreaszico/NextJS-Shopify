import cn from "classnames";
import { FC, useState } from "react";
import s from "./ProductView.module.css";
import { Container, Button } from "@components/ui";
import Image from "next/image";
import { Product } from "@common/types/product";
import { ProductSlider, Swatch } from "..";
import { Choices, getVariants } from "../helpers";
import { useUI } from "@components/ui/context";
import useAddItem from '@framework/cart/use-add-item';

interface Props {
  product: Product;
}

const ProductView: FC<Props> = ({ product }) => {
  const [choices, setChoices] = useState<Choices>({});
  const variant = getVariants(product, choices);
  const { openSidebar } = useUI();
  const addItem = useAddItem();

  const addToCart = async () => {
    try {
      const item = {
        productId: String(product.id),
        variantId: variant?.id,
        variantOptions: variant?.options,
      };
      const output = await addItem(item);
      alert(JSON.stringify(output))
      openSidebar()
    } catch (error) {}
  };
  return (
    <Container>
      <div className={cn(s.root, "fit", "mb-5")}>
        <div className={cn(s.productDisplay, "fit")}>
          <div className={s.nameBox}>
            <h1 className={s.name}>{product.name}</h1>
            <div className={s.price}>
              {product.price.value}
              {` `}
              {product.price.currencyCode}
            </div>
          </div>
          <ProductSlider>
            {product.images.map((img, index) => (
              <div className={s.imageContainer} key={index}>
                <Image
                  className={s.img}
                  src={img.url}
                  alt={img.alt}
                  width={1050}
                  height={1050}
                  quality="85"
                />
              </div>
            ))}
          </ProductSlider>
        </div>
        <div className={s.sidebar}>
          <section>
            {product.options.map((option) => (
              <div key={option.id} className="pb-4">
                <h2 className="uppercase font-medium">{option.displayName}</h2>
                <div className="flex flex-row py-4">
                  {option.values.map((ov) => {
                    const activeChoice =
                      choices[option.displayName.toLocaleLowerCase()];
                    return (
                      <Swatch
                        key={`${option.id}-${ov.label}`}
                        label={ov.label}
                        color={ov.hexColor}
                        active={ov.label.toLocaleLowerCase() === activeChoice}
                        variant={option.displayName}
                        onClick={() => {
                          setChoices({
                            ...choices,
                            [option.displayName.toLocaleLowerCase()]:
                              ov.label.toLocaleLowerCase(),
                          });
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
            <div className="pb-14 break-words w-full max-w-xl text-lg">
              {product.description}
            </div>
          </section>
          <div>
            <Button onClick={() => addToCart()}>Add to Cart</Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductView;
