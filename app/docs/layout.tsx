import { title } from "@/components/primitives";
import { Spacer } from "@nextui-org/spacer";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Portfolio</h1>
        <Spacer y={20} />
        {children}
      </div>
    </section>
  );
}
