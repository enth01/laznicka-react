export default function CartPage() {
    const cartItems = [
        { publicId: "1", name: "produkt1", price: 5, quantity: 2 },
        { publicId: "2", name: "produkt2", price: 8, quantity: 1 }
      ];


  
    return (
      <div>
        <h2 className="text-3xl text-center">Your Cart</h2>
        {cartItems.map((c) => (
          <div key={c.publicId}>
            <p><strong>produkt:</strong> {c.name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>pocet:</strong> {c.quantity} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>cena celkovo:</strong> {c.price * c.quantity}</p>
          </div>
        ))}
      </div>
    );
}
