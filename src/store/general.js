export const DOMAIN = 'https://intense-reaches-12245.herokuapp.com/api'

export const getHeaders = () => ({
  Authorization: localStorage.getItem('token'),
  'Content-Type': 'application/json'
})

export const letterSubjectSubscribe = 'Good day! Dear customer';
export const letterHtmlSubscribe = `<!DOCTYPE html><html lang='en'> <head> <meta charset='UTF-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <meta http-equiv='X-UA-Compatible' content='ie=edge' /> <title>Document</title>
    <style> td { padding: 20px 50px; background-color: yellow;
color: blueviolet; font-size: 20px; }
    </style> </head> <body> <table> <tr>
<td>Thank you for your subscribe!</td></tr> 
<tr> <td><td>Once a week you will receive news about receipts</td></tr> </table> </body></html>`

export const letterSubjectContactUs = 'Good day! Dear customer';
export const letterHtmlContactUs = `<!DOCTYPE html><html lang='en'> <head> <meta charset='UTF-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <meta http-equiv='X-UA-Compatible' content='ie=edge' /> <title>Document</title>
    <style> td { padding: 20px 50px; background-color: yellow;
color: blueviolet; font-size: 20px; }
    </style> </head> <body> <table> <tr>
<td>Thank you for your appeal!</td></tr> 
<tr> <td><td>Our manager will contact you soon</td></tr> </table> </body></html>`