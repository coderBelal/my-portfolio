import "./ContactForm.css";
const index = () => {
  return (
    <div className="contact-container">
      <form
        className="contact-left"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <div className="contact-left-title">
          <h2>Contact Me</h2>
          <hr />
        </div>
        <input
          type="hidden"
          name="access_key"
          defaultValue="9172a112-6e21-489b-8131-3ab74de52b41"
        />
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="contact-inputs"
          required=""
        />
        <input
          type="number"
          name="number"
          placeholder="Your Number"
          className="contact-inputs"
          required=""
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          className="contact-inputs"
          required=""
        />
        <textarea
          name="message"
          placeholder="your message"
          className="contact-inputs"
          cols={30}
          rows={10}
          required=""
          defaultValue={""}
        />
        <button type="submit">
          Submit <img src="./arrow_icon.png" alt="" />
        </button>
      </form>
    </div>
  );
};

export default index;
