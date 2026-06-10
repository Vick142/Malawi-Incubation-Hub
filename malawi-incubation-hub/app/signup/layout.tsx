import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | Daeyang Smart Business Incubation Hub",
  description: "Create your account or sign in to the Daeyang University Smart Business Incubation Hub.",
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Render children directly — no shared Header or Footer on auth pages
  return <>{children}</>;
}
