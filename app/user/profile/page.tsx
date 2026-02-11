import Link from 'next/link';

export default function ProfilePage() {
  const user = { name: "name", email: "example@gmail.com" };

  return (
    <div className="ml-100">
      <p>NAME: {user.name}</p>
      <p>EMAIL: {user.email}</p>
      <br />
      <Link href="/user/edit">Edit</Link>
      <br />
      <Link href="/user/delete-confirm">Delete account</Link>
      <form action="/api/user/logout" method="POST">
        <button className="cursor-pointer">Logout</button>
      </form>
    </div>
  );
}
