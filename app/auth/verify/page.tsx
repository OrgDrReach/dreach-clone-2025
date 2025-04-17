import Verify from "@/components/auth/verify/Verify";
import { VerifyErrorBoundary } from "@/components/auth/verify/VerifyErrorBoundary";
import { redirect } from "next/navigation";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function VerifyPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const phone = typeof params.phone === "string" ? params.phone : undefined;

  if (!phone) {
    redirect("/auth/login");
  }

  return (
    <main className="min-h-screen">
      <VerifyErrorBoundary>
        <Verify phone={phone} />
      </VerifyErrorBoundary>
    </main>
  );
}
