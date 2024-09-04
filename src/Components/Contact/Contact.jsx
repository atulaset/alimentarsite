import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
//import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");

      
        setResult("Email sent successfully!");
        event.target.reset();


      // Use below code to actual send email
     /*  const formData = new FormData(event.target);

      // ------Enter your web3forms access key below-------
      
      formData.append("access_key", "add you web3 form access key here");//Enter your web3forms key
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());
  
      if (res.success) {
        console.log("Success", res);
        setResult(res.message);
        event.target.reset();
      } else {
        console.log("Error", res);
        setResult(res.message);
      } */
    };


  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our clients.</p>
        <ul>
            <li><img src={mail_icon} alt="" />almentartechsolution@gmail.com</li>
            {/* <li><img src={phone_icon} alt="" />+91 123-456-7890</li> */}
            <li><img src={location_icon} alt="" />Pune (MH)<br/> India</li>
        </ul>
      </div>
      <div className="contact-col">
          <form onSubmit={onSubmit}>
              <label>Your name</label>
              <input type="text" name='name' placeholder='Enter your name' required/>
              <label>Phone Number</label>
              <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
              <label>Write your messages here</label>
              <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
{/*              <div className="h-captcha" data-captcha="true" data-sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2">
                  <iframe
                      src="https://newassets.hcaptcha.com/captcha/v1/4e17d72/static/hcaptcha.html#frame=checkbox&amp;id=06iqjntijt6t&amp;host=greatstack.in&amp;sentry=true&amp;reportapi=https%3A%2F%2Faccounts.hcaptcha.com&amp;recaptchacompat=off&amp;custom=false&amp;hl=en&amp;tplinks=on&amp;pstissuer=https%3A%2F%2Fpst-issuer.hcaptcha.com&amp;sitekey=50b2fe65-b00b-4b9e-ad62-3ba471098be2&amp;theme=light&amp;origin=https%3A%2F%2Fgreatstack.in"
                      tabIndex="0" frameBorder="0" scrolling="no"
                      allow="private-state-token-issuance 'src'; private-state-token-redemption 'src'"
                      title="Widget containing checkbox for hCaptcha security challenge"
                      data-hcaptcha-widget-id="06iqjntijt6t" data-hcaptcha-response=""
                      style="pointer-events: auto; width: 303px; height: 78px; overflow: hidden;"></iframe>
                  <textarea id="h-captcha-response-06iqjntijt6t" name="h-captcha-response"
                            style="display: none;"></textarea>
              </div>*/}
              <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt=""/></button>
          </form>
          <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
