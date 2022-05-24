import React from "react";

const Contact = () => {
  return (
    <>
      <h1 className="text-center text-xl font-bold py-5">Need Help?</h1>
      <hr />
      <div className="grid lg:grid-cols-4 p-5 sm:grid-cols-1 justify-items-center">
        <div>
          <h1 className="flex gap-2 text-xl font-bold text-accent py-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            General Enquiries:
          </h1>
          <p>Tel: +960 3300891</p>
          <p>info@veligaa.com</p>
          <div className="py-5">
            <h2 className="text-xl font-bold ">Head office:</h2>
            <p>Tel: +960 3300881</p>
            <p>info@veligaa.com</p>
          </div>
          <div>
            <h2>Sales:</h2>
            <p>Tel +960 3327826</p>
          </div>
        </div>
        <div class="divider lg:divider-horizontal sm:none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
            />
          </svg>
        </div>

        <div className="">
          <h2 className="text-2xl font-bold text-primary py-2">Contact us</h2>
          <form className="w-4/5">
            <input
              type="text"
              name="name"
              placeholder=" Name"
              className="input input-bordered mt-3 block  w-96"
            />
            <input
              type="email"
              name="email"
              placeholder=" Email"
              className="input input-bordered mt-3 block  w-96"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="input input-bordered mt-3 block  w-96"
            ></textarea>
            <button type="submit" class="btn btn-primary btn-block mt-3 w-80">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
