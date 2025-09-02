import { useState } from "react";

export default function Usuarios() {
    const [usuarios] = useState([
    {uuid: "1", username: "joe", fullName: "Administrador del sistema", email: "algo@example.com", roles: ["user"]},
    {uuid: "2", username: "mary", fullName: "Mary Poppins", email: "m@example.com", roles: [ "admin"]},
    {uuid: "3", username: "jane", fullName: "Jane Doe", email: "jane@example.com", roles: ["user", "admin"]},

    ]);

    return <table>
        <thead>
            <tr>
                <th>Nombre de usuario</th>
                <th>Nombre completo</th>
                <th>Email</th>
                <th>Roles</th>
            </tr>
        </thead>
        <tbody>
            {usuarios.map( usuario =>  <tr>
                <td>{usuario.username}</td>
                <td>{usuario.fullName}</td>
                <td>{usuario.email}</td>
                <td>{usuario.roles.join(', ')}</td>
            </tr>
               
            )}
        </tbody>
    </table>
}