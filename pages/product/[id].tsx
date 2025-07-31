import { useRouter } from 'next/router';
import products from '../../data/products';

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find(p => p.id === Number(id));
  if (!product) return <div>المنتج غير موجود</div>;
  return (
    <div dir="rtl">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ width: 300 }} />
      <p>{product.description}</p>
      <p>السعر: {product.price} ريال</p>
      <button>أضف إلى السلة</button>
    </div>
  );
}
