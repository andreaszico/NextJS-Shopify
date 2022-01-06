import { Layout } from "@components/common";
import { ProductCard } from "@components/product";
import { Grid, Hero, Marquee } from "@components/ui";
import { getConfig } from "@framework/api/config";
import getAllProducts from "@framework/product/get-all-product";
import type { InferGetStaticPropsType } from "next";

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Grid>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Grid>
      <Hero
        headline="Cookies, Ice Cream and muffin"
        description="Fruitcake lollipop soufflé lemon drops powder. Caramels dessert sweet cookie pastry chocolate cake jujubes caramels. Carrot cake jelly beans pie halvah sugar plum pastry dragée. Tart cupcake ice cream donut cupcake cake bear claw muffin. Gummi bears pastry soufflé gingerbread lollipop toffee sugar plum. Sugar plum ice cream jujubes cotton candy pastry chupa chups pudding wafer. Chupa chups dessert bear claw wafer caramels tiramisu jujubes apple pie. Cotton candy sweet cotton candy carrot cake jelly beans dessert biscuit halvah marshmallow. Pastry candy soufflé shortbread soufflé dragée chupa chups cotton candy sugar plum. Sweet roll tart dragée tootsie roll wafer chocolate bar cake gingerbread."
      />
      <Marquee>
      {products.map((product) => (
          <ProductCard product={product} key={product.id} variant="slim" />
        ))}
      </Marquee>
      <Grid layout="B">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Grid>
      <Marquee variant="secondary">
      {products.map((product) => (
          <ProductCard product={product} key={product.id} variant="slim" />
        ))}
      </Marquee>
    </>
  );
}

Home.Layout = Layout;

export async function getStaticProps() {
  const config = getConfig();
  const products = await getAllProducts(config);

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}
