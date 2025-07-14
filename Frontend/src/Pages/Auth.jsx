import Auth from "../Components/Auth";

export default function Signup() {
  return (
    <>
      <Auth type="signup" />
    </>
  );
}
export function Signin() {
  return (
    <>
      <Auth type="signin" />
    </>
  );
}
