import Head from 'next/head';
import Image from 'next/image';
import 'src/styles/Home.module.css';
import BannerSlider from 'src/components/BannerSlider';
import ProductSlider from 'src/components/ProductSlider';
import ProductByCategory from 'src/components/ProductByCategory';

export default function Home() {
  return (
    <>
      <BannerSlider />
      <ProductByCategory />
      <ProductSlider />
      <ProductSlider />
      <ProductSlider />
    </>
  );
}
