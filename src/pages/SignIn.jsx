function SignUp() {
  const inputsData = [
    {
      position: "text",
      txt: "First name",
    },
    {
      position: "password",
      txt: "Password",
    },
  ];
  return (
    <div className="mx-auto flex h-screen items-center justify-center bg-white">
      <img
        src="/public/SignIn.svg"
        className="w-[713px] bg-[#C9AC8CED] px-[38px] py-[100px]"
        alt="SignUp"
      />

      <div className="bg-white px-[200px] pb-[140px] pt-[123px] text-black">
        <h2 className="font-slab text-[40px] font-black">Sign up</h2>
        <p className="mb-[21px] mt-[5px] font-sans text-[13px] font-normal">
          Already have an account? <a href="/signin">Sign in</a>
        </p>

        <div className="flex flex-col gap-5">
          {inputsData.map((input, index) => (
            <input
              className="w-[430px] rounded-xl border border-[#474747] px-[29px] py-[16px]"
              key={index}
              type={input.position}
              placeholder={input.txt}
            />
          ))}
        </div>

        <button className="mt-[39px] rounded-full bg-[#152540] px-[175px] py-4 text-[18px] font-medium text-white">
          Next step
        </button>
      </div>
    </div>
  );
}

export default SignUp;
