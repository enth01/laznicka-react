export default function RegisterPage() {
    return (
      <form action="/api/user/register" method="POST" className="container ml-100">
        <label>Name:</label>
        <input name="Name" className="p-1 border-2 ml-5 mt-2 block w-50 rounded-md" />
        <label>Email:</label>
        <input name="Email" type="email" className="p-1 border-2 ml-5 mt-2 block w-50 rounded-md" />
        <label>Password:</label>
        <input name="Password" type="password" className="p-1 border-2 ml-5 mt-2 block w-50 rounded-md" />
        <button type="submit" className="ml-5 mt-2 p-2 rounded-md cursor-pointer bg-green-500 hover:bg-green-400">Register</button>
      </form>
    );
}
