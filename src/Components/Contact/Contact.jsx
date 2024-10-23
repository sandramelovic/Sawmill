import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Slanje....");
    const formData = new FormData(event.target);

    formData.append("access_key", "61c7aaa3-6373-4f0f-a4d0-f3406883a29e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Vaša poruka je uspešno poslata! Očekujte odgovor u najkraćem roku.");
      event.target.reset();
    } else {
      console.log("Greška", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
      <h3>Pošaljite nam poruku <img src={msg_icon} alt="" /></h3>
      <p>Ukoliko imate pitanja ili želite da nas kontaktirate, pošaljite nam e-mail ili ostavite broj telefona. Rado ćemo Vam se javiti i odgovoriti na sve vaše upite. Vaši podaci će biti korišćeni isključivo za svrhe komunikacije sa nama i neće biti deljeni sa trećim stranama. </p>
      <ul>
        <li><img src={mail_icon} alt="" /> melovicdoo@gmail.com</li>
        <li><img src={phone_icon} alt="" />+381 64 206 7775</li>
        <li><img src={location_icon} alt="" />67 Kamena Gora, Prijepolje <br/> Srbija</li>
      </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Ime:</label>
            <input type="text" name='name' placeholder='Unesite svoje ime' required/>
            <label>Broj telefona:</label>
            <input type='tel' name='phone' placeholder='Unesite svoj broj telefona' required/>
            <label>E-mail:</label>
            <input type='email' name="mail" placeholder='Unesite svoj e-mail'/>
            <label>Poruka:</label>
            <textarea name="message" rows="6" placeholder='Upišite svoju poruku...' required></textarea>
            <button type='submit' className='btn dark-btn'>Pošalji <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
