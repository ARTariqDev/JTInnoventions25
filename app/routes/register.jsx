import { FilloutStandardEmbed } from "@fillout/react";

export function meta() {
  return [{ title: "register" }];
}

function Register() {
  return (
    <div className="min-h-screen w-full bg-[#111827] flex justify-center items-center">
      <div className="pt-20 px-2 flex-1">
        <FilloutStandardEmbed
          filloutId="8xvLjcSirPus"
          inheritParameters
          dynamicResize
        />
      </div>
    </div>
  );
}

export default Register;
