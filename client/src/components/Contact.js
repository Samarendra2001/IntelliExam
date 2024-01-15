const Contact = () => {
  return (
    <div className="h-screen flex justify-between items-center bg-sky-300">
      <div className="p-10">
        <h1 className="text-4xl pb-6">Join IntelliExam Today</h1>
        <p>
          Discover incredible value, ease of use, accuracy and reliability when
          conducting online tests.
        </p>
        <p>Contact us at +91 9100018780 for any queries.</p>
      </div>
      <div class="container mx-auto mt-8">
        <form
          action="#"
          method="post"
          class="max-w-md bg-white p-8 rounded-md shadow-md mx-auto">
          <div className="text-center mb-8">
          <h2 class="text-4xl font-light mb-4">Contact Us</h2>
          </div>
        
          <div class="mb-6">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
              class="w-full px-4 py-2 border rounded-md focus:outline-none  bg-slate-100 focus:border-blue-500"
            />
          </div>

          <div class="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              class="w-full px-4 py-2 border rounded-md focus:outline-none bg-slate-100 focus:border-blue-500"
            />
          </div>

          <div class="mb-4">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
              class="w-full px-4 py-2 border rounded-md focus:outline-none  bg-slate-100 focus:border-blue-500"
            />
          </div>

          <div class="mb-4">
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              required
              class="w-full h-32 px-4 py-2 border rounded-md focus:outline-none  bg-slate-100 focus:border-blue-500 mb-4"
            ></textarea>
            <button
              type="submit"
              class=" w-full bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
