import { FilloutStandardEmbed  } from "@fillout/react";

export function meta() {
  return [{ title: "register" }];
}

function Register() {
  return (
    <div className="min-h-screen w-full">
      <div className="h-[100vh] md:h-[100vh] mt-20">
        <FilloutStandardEmbed 
          filloutId="8xvLjcSirPus" 
          inheritParameters 
        />
      </div>
    </div>
  );
}

export default Register;