export default function getBody(body: emailBody) {
  return `<div style="color: black;">Te contactaron a través de tu website Rodri:<br><table style="border: 1px solid #333;">
     <tr>
       <th>Nombre</th>
       <th>Email</th>
       <th>Asunto</th>
       <th>Mensaje</th>
     </tr>
           <tr><td style="text-align: center;" >${body.name}</td><td style="text-align: center;">${body.email}</td><td style="text-align: center;">${body.asunto}</td><td style="text-align: center;">${body.mensaje}</td></tr>
   </table></div>`;
}
