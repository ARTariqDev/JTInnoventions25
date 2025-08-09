import { FilloutStandardEmbed } from "@fillout/react";

export function meta() {
  return [{ title: "register" }];
}

function Register() {
  return (
    <div className="min-h-screen w-full bg-[#111827] flex justify-center items-center">
      <div className="h-[100vh] w-[100vw] pt-15">
        <FilloutStandardEmbed
          filloutId="8xvLjcSirPus"
          data-fillout-inherit-parameters
          data-fillout-dynamic-resize
        />
      </div>
    </div>
  );
}

export default Register;
