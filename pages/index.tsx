
import Head from 'next/head';
import products from '../data/products';
import Link from 'next/link';

export default function Home() {
  return (
    <div dir="rtl">
      <Head>
        <title>المتجر الرقمي</title>
      </Head>
      <h1>مرحبا بك في المتجر الرقمي</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #eee', padding: 20, width: 250 }}>
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} style={{ width: "100%", height: 120, objectFit: "cover" }} />
            <p>{product.price} ريال</p>
            <Link href={`/product/${product.id}`}>تفاصيل المنتج</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
