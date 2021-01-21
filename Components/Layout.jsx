import Link from "next/link";
import Head from "next/head";
import React from "react";
import s from "./../styles/Layout.module.css";
import { useSelector, useDispatch  } from 'react-redux'



export default function MainLayout({ children, title }) {
  // const {productsToCart} = useProducts()
  // console.log(productsToCart);
  const { productsToCart } = useSelector(state => state.cart)
 let total= productsToCart.reduce((acc, item) => acc += item.price * item.quantity, 0)

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div>
      <div className={s.layout}>
        <Link href={"/"}>
          <a>
            <h1>ELECTRO</h1>
          </a>
        </Link>
        <Link href={"/about"}>
          <a>
            <h2>О компании</h2>
          </a>
        </Link>
        <Link href={"/cart"}>
        <div>
          <div style={{color:"yellow"}}>{total}p</div>
          <svg fill="white" id="Capa_1" enableBackground="new 0 0 512 512" height="51" viewBox="0 0 512 512" width="51" xmlns="http://www.w3.org/2000/svg">
            <path d="m504.399 185.065c-6.761-8.482-16.904-13.348-27.83-13.348h-98.604l-53.469-122.433c-3.315-7.591-12.157-11.06-19.749-7.743-7.592 3.315-11.059 12.158-7.743 19.75l48.225 110.427h-178.458l48.225-110.427c3.315-7.592-.151-16.434-7.743-19.75-7.591-3.317-16.434.15-19.749 7.743l-53.469 122.434h-98.604c-10.926 0-21.069 4.865-27.83 13.348-6.637 8.328-9.086 19.034-6.719 29.376l52.657 230c3.677 16.06 17.884 27.276 34.549 27.276h335.824c16.665 0 30.872-11.216 34.549-27.276l52.657-230.001c2.367-10.342-.082-21.048-6.719-29.376zm-80.487 256.652h-335.824c-2.547 0-4.778-1.67-5.305-3.972l-52.657-229.998c-.413-1.805.28-3.163.936-3.984.608-.764 1.985-2.045 4.369-2.045h85.503l-3.929 8.997c-3.315 7.592.151 16.434 7.743 19.75 1.954.854 3.99 1.258 5.995 1.258 5.782 0 11.292-3.363 13.754-9l9.173-21.003h204.662l9.173 21.003c2.462 5.638 7.972 9 13.754 9 2.004 0 4.041-.404 5.995-1.258 7.592-3.315 11.059-12.158 7.743-19.75l-3.929-8.997h85.503c2.384 0 3.761 1.281 4.369 2.045.655.822 1.349 2.18.936 3.983l-52.657 230c-.528 2.301-2.76 3.971-5.307 3.971z"/>
            <path d="m166 266.717c-8.284 0-15 6.716-15 15v110c0 8.284 6.716 15 15 15s15-6.716 15-15v-110c0-8.284-6.715-15-15-15z"/>
            <path d="m256 266.717c-8.284 0-15 6.716-15 15v110c0 8.284 6.716 15 15 15s15-6.716 15-15v-110c0-8.284-6.716-15-15-15z"/>
            <path d="m346 266.717c-8.284 0-15 6.716-15 15v110c0 8.284 6.716 15 15 15s15-6.716 15-15v-110c-.001-8.284-6.716-15-15-15z"/>
        </svg>
       </div>
       </Link>
      </div>
      <div className={s.main}>
        <div className={s.nav}>
          <div>Выключатель</div>
          <div>Корпус</div>
          <div>Шина</div>
        </div>
        <main>{children}</main>
      </div>
      </div>
    </>
  );
}
