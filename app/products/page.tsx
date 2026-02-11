export default function ProductsPage() {
    const products = [
      { publicId: "1", name: "produkt1", info: "popis produktu 1", price: 5 },
      { publicId: "2", name: "produkt2", info: "popis produktu 2", price: 8 }
    ];
    const userId = "user-id-from-cookie";
  
    return (
      <div>
        <h2 className="text-3xl text-center">Products</h2>
        {products.map((p) => (
          <div key={p.publicId} className="p-5 m-5 inline-block rounded-md border-2 border-solid">
            <p>{p.name}</p>
            <p>{p.info}</p>
            <p>Price: {p.price}</p>
  
            <form action="/api/products/add-to-basket" method="POST" className="d-inline">
                <input type="hidden" name="productId" value={p.publicId} />
                <input type="hidden" name="userId" value={userId} />
                <input type="hidden" name="productName" value={p.name} />
                <input type="hidden" name="productPrice" value={p.price} />
                <button type="submit" className="btn bg-blue-500 p-3 rounded-md cursor-pointer hover:bg-blue-600">Add to basket</button>
            </form>
          </div>
        ))}
      </div>
    );
}
