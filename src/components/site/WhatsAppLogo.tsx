import whatsappLogo from "@/assets/whatsapp-logo.png";

interface WhatsAppLogoProps {
  className?: string;
  size?: number;
  loading?: "eager" | "lazy";
}

/**
 * Official WhatsApp Emblem Component using the verified client logo asset.
 */
export function WhatsAppLogo({
  className = "h-4 w-4",
  size,
  loading = "eager",
}: WhatsAppLogoProps) {
  return (
    <img
      src={whatsappLogo}
      alt="WhatsApp"
      width={size || 20}
      height={size || 20}
      className={`inline-block object-contain shrink-0 ${className}`}
      loading={loading}
    />
  );
}

