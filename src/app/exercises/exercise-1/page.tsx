// "use client" no es necesario porque Next.js lo ejecuta del lado del servidor por defecto
import axios from "axios";
import Typography from "@mui/material/Typography";
import UserList from "./UserList";
import { User } from "@/utils/types";

export default async function Exercise1Page() {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  const users: User[] = response.data;

  return (
    <main style={{ padding: "2rem" }}>
      <Typography variant="h4" color="primary" gutterBottom>
        Lista de Usuarios
      </Typography>
      <UserList users={users} />
    </main>
  );
}
