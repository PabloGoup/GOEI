import Image from "next/image";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className="brand-mark" aria-label="GOEI">
      <Image
        src={compact ? "/brand/icon.PNG" : "/brand/logo.PNG"}
        width={compact ? 38 : 154}
        height={compact ? 38 : 52}
        alt="GOEI — Gastronomic Operational Efficiency Index"
        priority
      />
    </div>
  );
}
