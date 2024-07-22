export default function signinPage() {
  return (
    // sets background and centers the form page
    <div className="dark:text-white dark:bg-slate-950 bg-slate-200 w-full h-full flex items-center justify-center">
      {/* for styling the form page */}
      <div className=" dark:bg-slate-900 md:w-[95%] md:h-[70%] md:flex justify-between items-center bg-slate-100 shadow-lg p-3 rounded-lg w-2/3">
        <h1 className="md:mx-auto text-center font-bold text-2xl">Sign in</h1>

        <form action="" className=" md:mr-14 flex flex-col gap-4  mt-4 md:w-[40%]">
          <input
            type="text"
            name="username"
            id=""
            placeholder="Username"
            className=" dark:bg-slate-900 outline-none p-2 rounded-lg outline-2 focus:outline-blue-400" 
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            className="dark:bg-slate-900 peer/email outline-none p-2 rounded-lg outline-2 focus:outline-blue-400 invalid:text-rose-400 invalid:outline-rose-400" 
          />
          {/* error for email */}
          <p className="peer-invalid/email:block hidden text-rose-400 text-xs">*Invalid Email</p>
          <input
            type="password"
            name="password"
            id=""
            // checks for min, max no. of chars
            minLength={8}
            maxLength={20}
            placeholder="Password"
            // accepts atleast 8 characters which containing atleast one lowercase,uppercase and number
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$"
            className=" dark:bg-slate-900 peer/password outline-none p-2 rounded-lg outline-2 focus:outline-blue-400 invalid:text-rose-400 invalid:outline-rose-400" 
            />
          {/* error for password */}
          <p className="peer-invalid/password:block hidden text-rose-400 text-xs">*minimum 8 characters should contain atleast one lowcase, uppercase & number</p>
          <input type="submit" value="Sign in" className=" dark:active:bg-blue-900 p-2 bg-cyan-200 font-semibold text-xl rounded-lg dark:bg-sky-900 active:bg-sky-300" />
        </form>
      </div>
    </div>
  );
}
