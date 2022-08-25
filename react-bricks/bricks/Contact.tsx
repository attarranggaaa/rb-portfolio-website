import { types } from "react-bricks/frontend";
import Container from "../../components/Container";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact: types.Brick = () => {
  const form = useRef();

  const send = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          e.target.reset();
          alert("Success");
        },
        (error) => {
          alert("Failed");
        }
      );
  };
  return (
    <Container id="contact">
      <form
        className="w-full space-y-14 md:space-y-16"
        ref={form}
        onSubmit={send}
      >
        <div className="flex justify-center items-center flex-col space-y-2">
          <h1 className="text-base text-3xl md:text-6xl font-bold text-center">
            Send me a message!
          </h1>
          <p className="md:text-xl text-md text-base font-medium text-center">
            Got a question or proposal, or just want <br /> to say hello? Go
            ahead.
          </p>
        </div>
        <div className="flex flex-col space-y-5">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 w-full">
            <div className="space-y-1 border-2 rounded-lg border-base p-3 md:p-5">
              <label htmlFor="" className="text-base font-medium">
                Your Name
              </label>
              <input
                type="text"
                className="w-full bg-primary text-base focus:outline-none font-base"
                name="from_name"
                required
              />
            </div>
            <div className="space-y-1 border-2 rounded-lg border-base p-3 md:p-5">
              <label htmlFor="" className="text-base font-medium">
                Email Address
              </label>
              <input
                type="email"
                className="w-full bg-primary text-base focus:outline-none font-base"
                name="from_email"
                required
              />
            </div>
          </div>
          <div className="space-y-1 border-2 rounded-lg border-base p-3 md:p-5">
            <label htmlFor="" className="text-base font-medium">
              Your Message
            </label>
            <textarea
              name=""
              id=""
              rows={2}
              className="w-full bg-primary text-base focus:outline-none font-base"
              required
            ></textarea>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="py-2 px-10 border-2 hover:bg-base hover:text-dark duration-100 border-base rounded-lg text-base font-medium"
          >
            SEND
          </button>
        </div>
      </form>
    </Container>
  );
};

Contact.schema = {
  name: "contact",
  label: "Contact",
  sideEditProps: [],
};

export default Contact;
