export default function AdminDashboard() {
    return (
      <div className="h-screen">
        <h2 className="text-3xl text-center">Admin Dashboard</h2>
        <div className="container ml-100">
            <h4 className="text-2xl">Add Product</h4>
    
            <form action="/api/admin/add-product" method="POST">
                <input className="p-1 border-2 ml-5 mt-2 block w-50 rounded-md" type="text" name="Name" placeholder="Name" required />
                <textarea className="p-1 border-2 ml-5 mt-2 block w-50 rounded-md"  name="Info" placeholder="Info" required></textarea>
                
                <select className="p-1 border-2 ml-5 mt-2 block w-50 rounded-md scroll-auto ms-overflow-style-none scrollbar-width-none [&::-webkit-scrollbar]:hidden" multiple name="Categories">
                    <option value="Category1">Category1</option>
                    <option value="Category2">Category2</option>
                </select>

                <input className="p-1 border-2 ml-5 mt-2 block w-50 rounded-md" type="number" step="0.01" name="Price" placeholder="Price" required />
                <button type="submit" className="ml-5 mt-2 p-2 rounded-md cursor-pointer bg-green-500 hover:bg-green-400">Add Product</button>
            </form>
        </div>
      </div>
    );
}
